import { Component, useEffect, useState } from "react";
import { ActionProvider, Renderer, StateProvider, ValidationProvider, VisibilityProvider } from "@json-render/react";
import { registry } from "./catalog";
import type { ReactNode } from "react";

type RendererSpec = {
  root: string;
  elements: Record<string, unknown>;
};

type DemoGroup = {
  id: string;
  name: string;
  spec: RendererSpec;
};

type EditableGroup = {
  id: string;
  name: string;
  originalSpec: RendererSpec;
  currentSpec: RendererSpec;
  jsonDraft: string;
  parseError: string;
};

class RenderErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; message: string }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "未知渲染错误"
    };
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 12, borderRadius: 8, background: "#fff5f5", border: "1px solid rgba(220,40,40,0.25)", color: "#a22", fontSize: 12 }}>
          渲染失败：{this.state.message}
        </div>
      );
    }
    return this.props.children;
  }
}

function isRendererSpec(input: unknown): input is RendererSpec {
  return Boolean(
    input &&
      typeof input === "object" &&
      "root" in input &&
      typeof (input as { root?: unknown }).root === "string" &&
      "elements" in input &&
      typeof (input as { elements?: unknown }).elements === "object"
  );
}

function toEditableGroups(input: DemoGroup[]): EditableGroup[] {
  return input.map((group) => ({
    id: group.id,
    name: group.name,
    originalSpec: group.spec,
    currentSpec: group.spec,
    jsonDraft: JSON.stringify(group.spec, null, 2),
    parseError: ""
  }));
}

export default function App() {
  const [groups, setGroups] = useState<EditableGroup[] | null>(null);
  const [error, setError] = useState<string>("");

  const updateDraft = (groupId: string, jsonDraft: string) => {
    setGroups((prev) => {
      if (!prev) return prev;
      return prev.map((group) => {
        if (group.id !== groupId) return group;
        try {
          const parsed = JSON.parse(jsonDraft);
          if (!isRendererSpec(parsed)) {
            return {
              ...group,
              jsonDraft,
              parseError: "JSON 结构不符合 renderer 规范：需要 root/elements"
            };
          }
          return {
            ...group,
            jsonDraft,
            currentSpec: parsed,
            parseError: ""
          };
        } catch (err) {
          return {
            ...group,
            jsonDraft,
            parseError: err instanceof Error ? err.message : "JSON 解析失败"
          };
        }
      });
    });
  };

  const formatDraft = (groupId: string) => {
    setGroups((prev) => {
      if (!prev) return prev;
      return prev.map((group) => {
        if (group.id !== groupId) return group;
        try {
          const parsed = JSON.parse(group.jsonDraft);
          if (!isRendererSpec(parsed)) {
            return {
              ...group,
              parseError: "JSON 结构不符合 renderer 规范：需要 root/elements"
            };
          }
          return {
            ...group,
            currentSpec: parsed,
            jsonDraft: JSON.stringify(parsed, null, 2),
            parseError: ""
          };
        } catch (err) {
          return {
            ...group,
            parseError: err instanceof Error ? err.message : "JSON 解析失败"
          };
        }
      });
    });
  };

  const resetDraft = (groupId: string) => {
    setGroups((prev) => {
      if (!prev) return prev;
      return prev.map((group) => {
        if (group.id !== groupId) return group;
        return {
          ...group,
          currentSpec: group.originalSpec,
          jsonDraft: JSON.stringify(group.originalSpec, null, 2),
          parseError: ""
        };
      });
    });
  };

  useEffect(() => {
    fetch("/api/spec")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`请求失败: ${res.status}`);
        }
        return res.json();
      })
      .then((data: unknown) => {
        if (data && typeof data === "object" && "groups" in data && Array.isArray((data as { groups?: unknown[] }).groups)) {
          const parsedGroups = (data as { groups: DemoGroup[] }).groups;
          const invalidGroup = parsedGroups.find((group) => !isRendererSpec(group.spec));
          if (invalidGroup) {
            throw new Error(`服务端 group "${invalidGroup.name}" 返回的 spec 不是 renderer 结构（需要 root/elements）`);
          }
          setGroups(toEditableGroups(parsedGroups));
          return;
        }

        if (!isRendererSpec(data)) {
          throw new Error("服务端数据不符合 renderer 规范：需要 root/elements");
        }

        setGroups(
          toEditableGroups([
            {
              id: "default",
              name: "Default",
              spec: data
            }
          ])
        );
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "未知错误");
      });
  }, []);

  if (error) {
    return <main style={{ padding: 24 }}>加载失败：{error}</main>;
  }

  if (!groups) {
    return <main style={{ padding: 24 }}>加载中...</main>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3efe8",
        padding: 16,
        boxSizing: "border-box",
        fontFamily: '"SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {groups.map((group) => (
          <section
            key={group.id}
            style={{
              border: "1px solid rgba(10,10,10,0.12)",
              borderRadius: 14,
              background: "#fff",
              overflow: "hidden"
            }}
          >
            <header style={{ padding: "12px 14px", borderBottom: "1px solid rgba(10,10,10,0.08)", fontWeight: 700, fontSize: 14 }}>{group.name}</header>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: 12,
                padding: 12,
                alignItems: "stretch"
              }}
            >
              <div style={{ minHeight: 200, border: "1px solid rgba(10,10,10,0.08)", borderRadius: 12, padding: 12, background: "#fff" }}>
                <RenderErrorBoundary>
                  <StateProvider>
                    <ActionProvider>
                      <VisibilityProvider>
                        <ValidationProvider>
                          <Renderer registry={registry} spec={group.currentSpec as any} />
                        </ValidationProvider>
                      </VisibilityProvider>
                    </ActionProvider>
                  </StateProvider>
                </RenderErrorBoundary>
              </div>

              <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(10,10,10,0.08)", borderRadius: 12, overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderBottom: "1px solid rgba(10,10,10,0.08)",
                    background: "rgba(10,10,10,0.02)"
                  }}
                >
                  <strong style={{ fontSize: 12 }}>JSON 规格（可编辑）</strong>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      onClick={() => formatDraft(group.id)}
                      style={{
                        border: "1px solid rgba(10,10,10,0.2)",
                        background: "#fff",
                        borderRadius: 8,
                        padding: "4px 8px",
                        fontSize: 12,
                        cursor: "pointer"
                      }}
                    >
                      格式化
                    </button>
                    <button
                      type="button"
                      onClick={() => resetDraft(group.id)}
                      style={{
                        border: "1px solid rgba(10,10,10,0.2)",
                        background: "#fff",
                        borderRadius: 8,
                        padding: "4px 8px",
                        fontSize: 12,
                        cursor: "pointer"
                      }}
                    >
                      重置
                    </button>
                  </div>
                </div>

                <textarea
                  value={group.jsonDraft}
                  onChange={(event) => updateDraft(group.id, event.target.value)}
                  spellCheck={false}
                  style={{
                    width: "100%",
                    minHeight: 300,
                    border: "none",
                    outline: "none",
                    resize: "vertical",
                    padding: 12,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    fontSize: 12,
                    lineHeight: "18px",
                    boxSizing: "border-box"
                  }}
                />

                {group.parseError ? (
                  <div style={{ color: "#d33", fontSize: 12, borderTop: "1px solid rgba(10,10,10,0.08)", padding: "8px 12px", background: "#fff5f5" }}>{group.parseError}</div>
                ) : (
                  <div style={{ color: "#2b7", fontSize: 12, borderTop: "1px solid rgba(10,10,10,0.08)", padding: "8px 12px", background: "#f3fff9" }}>JSON 有效，已应用渲染</div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
