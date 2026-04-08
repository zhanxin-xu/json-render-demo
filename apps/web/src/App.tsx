import { useEffect, useState } from "react";
import { ActionProvider, Renderer, StateProvider, ValidationProvider, VisibilityProvider } from "@json-render/react";
import { registry } from "./catalog";

export default function App() {
  const [spec, setSpec] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/spec")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`请求失败: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setSpec(data))
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "未知错误");
      });
  }, []);

  if (error) {
    return <main style={{ padding: 24 }}>加载失败：{error}</main>;
  }

  if (!spec) {
    return <main style={{ padding: 24 }}>加载中...</main>;
  }

  return (
    <main>
      <StateProvider initialState={{}}>
        <VisibilityProvider>
          <ActionProvider handlers={{}}>
            <ValidationProvider customFunctions={{}}>
              <Renderer spec={spec} registry={registry} />
            </ValidationProvider>
          </ActionProvider>
        </VisibilityProvider>
      </StateProvider>
    </main>
  );
}
