#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { createRequire } = require("module");

const repoRoot = path.resolve(__dirname, "..");
const webDir = path.join(repoRoot, "apps", "web");
const catalogSourceFile = path.join(webDir, "src", "catalog.tsx");
const tempDir = path.join(webDir, ".tmp-schema-export");
const bundledCatalogFile = path.join(tempDir, "catalog.cjs");
const outputDir = path.join(repoRoot, "output", "component-json-schemas");

function findEsbuildBin() {
  const pnpmDir = path.join(repoRoot, "node_modules", ".pnpm");
  if (!fs.existsSync(pnpmDir)) {
    throw new Error("Cannot find node_modules/.pnpm; install dependencies first.");
  }

  const candidates = fs
    .readdirSync(pnpmDir)
    .filter((name) => name.startsWith("esbuild@"))
    .map((name) => path.join(pnpmDir, name, "node_modules", "esbuild", "bin", "esbuild"))
    .filter((binPath) => fs.existsSync(binPath));

  if (!candidates.length) {
    throw new Error("Cannot locate esbuild binary under node_modules/.pnpm.");
  }

  return candidates.sort()[candidates.length - 1];
}

function ensureCleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJsonFile(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function toSchemaFileName(componentName) {
  return `${componentName}.schema.json`;
}

function removeStaleSchemaFiles(dirPath, expectedFileNames) {
  const existing = fs.readdirSync(dirPath).filter((name) => name.endsWith(".schema.json"));
  for (const fileName of existing) {
    if (!expectedFileNames.has(fileName)) {
      fs.rmSync(path.join(dirPath, fileName), { force: true });
    }
  }
}

function main() {
  if (!fs.existsSync(catalogSourceFile)) {
    throw new Error(`Catalog source not found: ${catalogSourceFile}`);
  }

  const esbuildBin = findEsbuildBin();

  ensureCleanDir(tempDir);
  fs.mkdirSync(outputDir, { recursive: true });

  execFileSync(
    esbuildBin,
    [catalogSourceFile, "--platform=node", "--format=cjs", `--outfile=${bundledCatalogFile}`],
    { stdio: "inherit" }
  );

  const appRequire = createRequire(path.join(webDir, "package.json"));
  const { z } = appRequire("zod");
  const { catalog } = require(bundledCatalogFile);

  const components = catalog?.data?.components;
  if (!components || typeof components !== "object") {
    throw new Error("Cannot read components from catalog.data.components.");
  }

  const componentEntries = Object.entries(components).sort(([a], [b]) => a.localeCompare(b));
  const expectedFileNames = new Set();

  for (const [componentName, componentDef] of componentEntries) {
    const propsSchema = componentDef?.props;
    if (!propsSchema) {
      continue;
    }

    const schemaJson = z.toJSONSchema(propsSchema);
    const fileName = toSchemaFileName(componentName);
    expectedFileNames.add(fileName);
    writeJsonFile(path.join(outputDir, fileName), schemaJson);
  }

  removeStaleSchemaFiles(outputDir, expectedFileNames);

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log(`Exported ${expectedFileNames.size} component schema files to ${outputDir}`);
}

try {
  main();
} catch (error) {
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
