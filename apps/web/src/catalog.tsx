import { defineCatalog } from "@json-render/core";
import { defineRegistry } from "@json-render/react";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

const baseFontFamily = '"General Sans", "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const buttonFontFamily = '"Bricolage Grotesque", "General Sans", "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const accentColor = "#2d6b4f";

const assetRecommendationListItemSchema = z.object({
  assetLogo: z.string().optional(),
  assetSymbol: z.string(),
  assetPriceUsd: z.string(),
  priceChange24h: z.string(),
  reason: z.string(),
  assetScoreValue: z.number(),
  assetScoreTotal: z.number()
});

const assetDimensionTableRowSchema = z.object({
  dimensionName: z.string(),
  scoreValue: z.number(),
  scoreTotal: z.number(),
  rankValue: z.number(),
  rankTotalAssets: z.number()
});

const dimensionDefinitionSchema = z.object({
  dimensionKey: z.string(),
  dimensionName: z.string()
});

const dimensionScoreSchema = z.object({
  dimensionKey: z.string(),
  scoreValue: z.number(),
  scoreTotal: z.number(),
  rankValue: z.number(),
  rankTotalAssets: z.number()
});

const multiAssetDimensionItemSchema = z.object({
  assetLogo: z.string().optional(),
  assetSymbol: z.string(),
  assetName: z.string(),
  dimensionScores: z.array(dimensionScoreSchema)
});

const summaryMetricSchema = z.object({
  metricKey: z.string(),
  metricName: z.string(),
  metricValue: z.string(),
  metricChange: z.string()
});

const tableColumnSchema = z.object({
  columnKey: z.string(),
  columnTitle: z.string()
});

const tableCellSchema = z.object({
  columnKey: z.string(),
  cellValue: z.string()
});

const tableRowSchema = z.object({
  rowKey: z.string(),
  rowName: z.string(),
  cells: z.array(tableCellSchema),
  resultTag: z.string().optional(),
  rowChange: z.string().optional()
});

const highlightSchema = z.object({
  title: z.string(),
  description: z.string()
});

const dimensionRankChangeSchema = z.object({
  dimensionKey: z.string(),
  dimensionName: z.string(),
  rankValue: z.number(),
  rankTotalAssets: z.number(),
  rankChange: z.number()
});

const ratingChangeSchema = z.object({
  assetLogo: z.string().optional(),
  assetSymbol: z.string(),
  fromRating: z.string(),
  toRating: z.string()
});

const assetContextHeaderSchema = z.object({
  assetLogo: z.string().optional(),
  assetSymbol: z.string(),
  title: z.string()
});

const keyStatsStripSchema = z.object({
  items: z.array(summaryMetricSchema)
});

const dataGridTableSchema = z.object({
  tableColumns: z.array(tableColumnSchema),
  tableRows: z.array(tableRowSchema),
  firstColumnHeader: z.string().optional(),
  badgeColumnKeys: z.array(z.string()).optional(),
  accentColumnKeys: z.array(z.string()).optional()
});

const narrativeHighlightsListSchema = z.object({
  items: z.array(highlightSchema)
});

const dimensionRankChangeTableSchema = z.object({
  rows: z.array(dimensionRankChangeSchema),
  dimensionLabel: z.string().optional(),
  rankLabel: z.string().optional(),
  changeLabel: z.string().optional()
});

type AssetContextHeaderProps = {
  assetLogo?: string;
  assetSymbol: string;
  title: string;
};

type KeyStatsStripProps = {
  items: Array<{
    metricKey: string;
    metricName: string;
    metricValue: string;
    metricChange: string;
  }>;
};

type DataGridTableProps = {
  tableColumns: Array<{
    columnKey: string;
    columnTitle: string;
  }>;
  tableRows: Array<{
    rowKey: string;
    rowName: string;
    cells: Array<{
      columnKey: string;
      cellValue: string;
    }>;
  }>;
  firstColumnHeader?: string;
  badgeColumnKeys?: string[];
  accentColumnKeys?: string[];
};

type NarrativeHighlightsListProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

type DimensionRankChangeTableProps = {
  rows: Array<{
    dimensionKey: string;
    dimensionName: string;
    rankValue: number;
    rankTotalAssets: number;
    rankChange: number;
  }>;
  dimensionLabel?: string;
  rankLabel?: string;
  changeLabel?: string;
};

const catalog = defineCatalog(schema, {
  components: {
    NotificationCardContainer: {
      description: "Notification card container mapped from Figma node 81033:18324",
      props: z.object({
        noticeTitle: z.string(),
        detailUrl: z.string()
      })
    },
    NotificationText: {
      description: "Notification body text block rendered inside NotificationCardContainer",
      props: z.object({
        text: z.string()
      })
    },
    AssetRecommendationList: {
      description: "Asset recommendation list mapped from Figma node 81033:18334",
      props: z.object({
        sectionLabel: z.string().optional(),
        assets: z.array(assetRecommendationListItemSchema)
      })
    },
    AssetTitle: {
      description: "Asset title mapped from Figma node 81148:35902",
      props: z.object({
        assetLogo: z.string().optional(),
        assetSymbol: z.string(),
        assetName: z.string(),
        assetScoreValue: z.number(),
        assetScoreTotal: z.number()
      })
    },
    AssetDimensionScoreTable: {
      description: "Single asset score table mapped from Figma node 81148:35915",
      props: z.object({
        rows: z.array(assetDimensionTableRowSchema)
      })
    },
    MultiAssetDimensionScoreComparisonTable: {
      description: "Multi-asset dimension score comparison table mapped from Figma node 81033:18607",
      props: z.object({
        dimensions: z.array(dimensionDefinitionSchema),
        assets: z.array(multiAssetDimensionItemSchema)
      })
    },
    AssetContextHeader: {
      description: "Reusable asset + context title header",
      props: assetContextHeaderSchema
    },
    KeyStatsStrip: {
      description: "Reusable key stats strip",
      props: keyStatsStripSchema
    },
    DataGridTable: {
      description: "Reusable tabular data block",
      props: dataGridTableSchema
    },
    NarrativeHighlightsList: {
      description: "Reusable narrative highlights list",
      props: narrativeHighlightsListSchema
    },
    DimensionRankChangeTable: {
      description: "Reusable dimension rank change table",
      props: dimensionRankChangeTableSchema
    },
    RatingChangeComparisonList: {
      description: "Rating change comparison list mapped from Figma node 81033:19165",
      props: z.object({
        changes: z.array(ratingChangeSchema)
      })
    }
  },
  actions: {}
});

function renderAssetLogo(logo: string | undefined, symbol: string, size = 24) {
  if (logo) {
    return <img src={logo} alt={`${symbol} logo`} style={{ width: size, height: size, borderRadius: 999, objectFit: "cover" }} />;
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: accentColor,
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size >= 32 ? 12 : 11,
        fontWeight: 700
      }}
    >
      {symbol.slice(0, 2)}
    </div>
  );
}

function getPriceChangeColor(value: string) {
  const normalized = value.trim();
  if (normalized.startsWith("-")) {
    return "#e04f5f";
  }
  return "#15a46d";
}

function renderScoreBadge(score: number, total: number, label = "Score") {
  const safeTotal = total <= 0 ? 100 : total;
  const ratio = Math.max(0, Math.min(1, score / safeTotal));
  const degree = ratio * 360;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: `conic-gradient(${accentColor} ${degree}deg, rgba(10,10,10,0.18) ${degree}deg 360deg)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            background: "#f3f3f3",
            color: accentColor,
            fontSize: 15,
            lineHeight: "20px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {score}
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 10, lineHeight: "12px", color: "rgba(10,10,10,0.4)" }}>{label}</p>
    </div>
  );
}

function renderFooterButton(label: string, variant: "primary" | "secondary", href?: string) {
  const style = {
    minHeight: 28,
    minWidth: 80,
    boxSizing: "border-box" as const,
    borderRadius: 6,
    border: variant === "primary" ? `1px solid ${accentColor}` : "1px solid rgba(10,10,10,0.2)",
    background: variant === "primary" ? accentColor : "#fff",
    padding: "6px 8px",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 700,
    letterSpacing: 0,
    fontFamily: buttonFontFamily,
    color: variant === "primary" ? "#fff" : "#1f1f1f",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    whiteSpace: "nowrap" as const,
    textDecoration: "none",
    overflow: "hidden" as const,
    opacity: 1
  };

  if (href) {
    return (
      <button type="button" onClick={() => window.location.assign(href)} style={{ ...style, cursor: "pointer" }}>
        {label + " \u2192"}
      </button>
    );
  }

  return (
    <button type="button" style={{ ...style, cursor: "pointer" }}>
      {label + " \u2192"}
    </button>
  );
}

function renderAssetContextHeader(props: AssetContextHeaderProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {renderAssetLogo(props.assetLogo, props.assetSymbol, 20)}
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.assetSymbol}</p>
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.title}</p>
    </div>
  );
}

function renderKeyStatsStrip(props: KeyStatsStripProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.max(1, props.items.length)}, minmax(0, 1fr))`, gap: 12, borderRadius: 10, background: "rgba(10,10,10,0.04)", padding: "10px 12px" }}>
      {props.items.map((metric) => (
        <div key={metric.metricKey} style={{ padding: 0 }}>
          <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>{metric.metricName}</p>
          <p style={{ margin: "2px 0 0 0", fontSize: 16, lineHeight: "24px", fontWeight: 700 }}>{metric.metricValue}</p>
          <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: getPriceChangeColor(metric.metricChange), fontWeight: 600 }}>{metric.metricChange}</p>
        </div>
      ))}
    </div>
  );
}

function renderDataGridTable(props: DataGridTableProps) {
  const tableGridTemplateColumns = `minmax(110px,1.25fr) repeat(${props.tableColumns.length}, minmax(0, 1fr))`;
  const badgeKeys = new Set(props.badgeColumnKeys ?? []);
  const accentKeys = new Set(props.accentColumnKeys ?? []);

  return (
    <div style={{ border: "none", borderRadius: 0, overflow: "hidden" }}>
      <div style={{ minWidth: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: tableGridTemplateColumns,
            borderBottom: "1px solid rgba(10,10,10,0.08)"
          }}
        >
          <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.38)" }}>{props.firstColumnHeader ?? ""}</p>
          {props.tableColumns.map((column) => (
            <p key={column.columnKey} style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.38)", textAlign: "center" }}>
              {column.columnTitle}
            </p>
          ))}
        </div>
        {props.tableRows.map((row, index) => {
          const rowMap = new Map(row.cells.map((cell) => [cell.columnKey, cell.cellValue]));
          return (
            <div
              key={row.rowKey}
              style={{
                display: "grid",
                gridTemplateColumns: tableGridTemplateColumns,
                borderBottom: index === props.tableRows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
              }}
            >
              <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.72)" }}>{row.rowName}</p>
              {props.tableColumns.map((column) => {
                const value = rowMap.get(column.columnKey) ?? "-";

                if (badgeKeys.has(column.columnKey) && value !== "-") {
                  return (
                    <p key={`${row.rowKey}-${column.columnKey}`} style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", textAlign: "center" }}>
                      <span style={{ display: "inline-flex", padding: "1px 6px", borderRadius: 6, background: "rgba(45,107,79,0.2)", color: accentColor, fontSize: 12, lineHeight: "18px" }}>
                        {value}
                      </span>
                    </p>
                  );
                }

                return (
                  <p
                    key={`${row.rowKey}-${column.columnKey}`}
                    style={{
                      margin: 0,
                      padding: "12px 8px",
                      fontSize: 14,
                      lineHeight: "20px",
                      textAlign: "center",
                      color: accentKeys.has(column.columnKey) ? accentColor : "inherit",
                      fontWeight: accentKeys.has(column.columnKey) ? 700 : 600
                    }}
                  >
                    {value}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function renderNarrativeHighlightsList(props: NarrativeHighlightsListProps) {
  return (
    <div style={{ borderRadius: 8, background: "rgba(10,10,10,0.04)", padding: "10px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
      {props.items.map((highlight, index) => (
        <div key={`${highlight.title}-${index}`} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{highlight.title}</p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.68)" }}>{highlight.description}</p>
        </div>
      ))}
    </div>
  );
}

function renderDimensionRankChangeTable(props: DimensionRankChangeTableProps) {
  return (
    <div style={{ border: "1px solid rgba(10,10,10,0.08)", borderRadius: 8, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(120px,1.2fr) 1fr 1fr", borderBottom: "1px solid rgba(10,10,10,0.08)", background: "rgba(10,10,10,0.04)" }}>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>{props.dimensionLabel ?? "维度"}</p>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>{props.rankLabel ?? "排行"}</p>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>{props.changeLabel ?? "变化"}</p>
      </div>
      {props.rows.map((row, index) => (
        <div
          key={`${row.dimensionKey}-${index}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px,1.2fr) 1fr 1fr",
            borderBottom: index === props.rows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
          }}
        >
          <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.72)" }}>{row.dimensionName}</p>
          <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", textAlign: "center" }}>
            {row.rankValue}/{row.rankTotalAssets}
          </p>
          <p
            style={{
              margin: 0,
              padding: "12px 8px",
              fontSize: 14,
              lineHeight: "20px",
              textAlign: "center",
              color: row.rankChange > 0 ? "#e04f5f" : row.rankChange < 0 ? "#15a46d" : "rgba(10,10,10,0.52)",
              fontWeight: 600
            }}
          >
            {row.rankChange > 0 ? `+${row.rankChange}` : row.rankChange}
          </p>
        </div>
      ))}
    </div>
  );
}

const { registry } = defineRegistry(catalog, {
  components: {
    NotificationText: ({ props }) => (
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 400, color: "rgba(10,10,10,0.8)" }}>{props.text}</p>
    ),

    NotificationCardContainer: ({ props, children }) => (
      <section
        style={{
          borderRadius: 12,
          border: "1px solid rgba(10,10,10,0.1)",
          background: "#FEFDFC",
          color: "#0a0a0a",
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontFamily: baseFontFamily
        }}
      >
        <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.noticeTitle}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{children}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          {renderFooterButton("Dislike", "secondary")}
          {renderFooterButton("View Details", "secondary", props.detailUrl)}
          {renderFooterButton("Ask Ed", "primary")}
        </div>
      </section>
    ),

    AssetRecommendationList: ({ props }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {props.sectionLabel ? <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.sectionLabel}</p> : null}
        {props.assets.map((asset, index) => (
          <div key={`${asset.assetSymbol}-${index}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0, flex: "1 1 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {renderAssetLogo(asset.assetLogo, asset.assetSymbol)}
                <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", fontWeight: 600 }}>{asset.assetSymbol}</p>
                <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.6)" }}>{asset.assetPriceUsd}</p>
                <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: getPriceChangeColor(asset.priceChange24h), fontWeight: 600 }}>{asset.priceChange24h}</p>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.82)" }}>{asset.reason}</p>
            </div>
            {renderScoreBadge(asset.assetScoreValue, asset.assetScoreTotal)}
          </div>
        ))}
      </div>
    ),

    AssetTitle: ({ props }) => (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          {renderAssetLogo(props.assetLogo, props.assetSymbol, 32)}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.assetSymbol}</p>
            <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.42)" }}>{props.assetName}</p>
          </div>
        </div>
        {renderScoreBadge(props.assetScoreValue, props.assetScoreTotal)}
      </div>
    ),

    AssetDimensionScoreTable: ({ props }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <p style={{ margin: "0 8px 2px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>Theme</p>
        {props.rows.map((row, index) => {
          const isHighlighted = index === 0;
          return (
            <div key={`${row.dimensionName}-${index}`} style={{ padding: "0 8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 8px",
                  background: isHighlighted ? "rgba(10,10,10,0.04)" : "transparent",
                  borderRadius: isHighlighted ? 8 : 0,
                  borderBottom: isHighlighted || index === props.rows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
                }}
              >
                <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{row.dimensionName}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: accentColor, fontWeight: 700 }}>{row.scoreValue}</p>
                  <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.4)", fontWeight: 500 }}>
                    {row.rankValue}/{row.rankTotalAssets}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),

    MultiAssetDimensionScoreComparisonTable: ({ props }) => {
      const gridTemplateColumns = `minmax(110px, 1.25fr) repeat(${props.dimensions.length}, minmax(0, 1fr))`;

      return (
        <div style={{ border: "none", borderRadius: 0, overflow: "hidden" }}>
          <div style={{ minWidth: "auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns,
                background: "transparent",
                borderBottom: "1px solid rgba(10,10,10,0.08)"
              }}
            >
            <p style={{ margin: 0, padding: "8px 10px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>Asset</p>
            {props.dimensions.map((dimension) => (
              <p key={dimension.dimensionKey} style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>
                {dimension.dimensionName}
              </p>
            ))}
          </div>
          {props.assets.map((asset, index) => {
            const scoreMap = new Map(asset.dimensionScores.map((item) => [item.dimensionKey, item]));
            return (
              <div
                key={`${asset.assetSymbol}-${index}`}
                style={{
                  display: "grid",
                  gridTemplateColumns,
                  borderBottom: index === props.assets.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
                }}
              >
                <div style={{ padding: "12px 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  {renderAssetLogo(asset.assetLogo, asset.assetSymbol)}
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{asset.assetSymbol}</p>
                    <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {asset.assetName}
                    </p>
                  </div>
                </div>
                {props.dimensions.map((dimension) => {
                  const score = scoreMap.get(dimension.dimensionKey);
                  return (
                    <div key={`${asset.assetSymbol}-${dimension.dimensionKey}`} style={{ padding: "12px 8px", textAlign: "center" }}>
                      {score ? (
                        <>
                          <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: accentColor, fontWeight: 700 }}>{score.scoreValue}</p>
                          <p style={{ margin: 0, fontSize: 10, lineHeight: "14px", color: "rgba(10,10,10,0.5)" }}>
                            {score.rankValue}/{score.rankTotalAssets}
                          </p>
                        </>
                      ) : (
                        <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.32)" }}>-</p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      );
    },

    AssetContextHeader: ({ props }) => renderAssetContextHeader(props),

    KeyStatsStrip: ({ props }) => renderKeyStatsStrip(props),

    DataGridTable: ({ props }) => renderDataGridTable(props),

    NarrativeHighlightsList: ({ props }) => renderNarrativeHighlightsList(props),

    DimensionRankChangeTable: ({ props }) => renderDimensionRankChangeTable(props),

    RatingChangeComparisonList: ({ props }) => (
      <div style={{ border: "1px solid rgba(10,10,10,0.08)", borderRadius: 8, overflow: "hidden" }}>
        {props.changes.map((change, index) => (
          <div
            key={`${change.assetSymbol}-${index}`}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(120px,1fr) 1fr 1fr",
              alignItems: "center",
              borderBottom: index === props.changes.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
            }}
          >
            <div style={{ padding: "12px 8px", display: "flex", alignItems: "center", gap: 8 }}>
              {renderAssetLogo(change.assetLogo, change.assetSymbol)}
              <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{change.assetSymbol}</p>
            </div>
            <p style={{ margin: 0, padding: "12px 8px", textAlign: "center", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.62)" }}>{change.fromRating}</p>
            <p style={{ margin: 0, padding: "12px 8px", textAlign: "center", fontSize: 12, lineHeight: "16px", color: accentColor, fontWeight: 700 }}>{change.toRating}</p>
          </div>
        ))}
      </div>
    )
  }
});

export { catalog, registry };
