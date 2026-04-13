# json-render-demo

React + Express 的最小示例：服务端返回 JSON Render spec，前端页面渲染。

## 设计文档

- 动态推送 UI 组件设计：`docs/dynamic-push-ui-json-render.md`
- 组件拆分（按直接交互关联）：`docs/component-splitting-by-direct-coupling.md`
- Figma 组件契约（81033/81148）：`docs/figma-component-contracts.md`
- 组件清单（全量）：`docs/all-components.md`

## 运行方式

```bash
pnpm install
pnpm dev
```

- 前端：`http://localhost:5173`
- 服务端：`http://localhost:3001/api/spec`
