---
name: dynamic-push-ui-json-render
description: 根据不同推送场景动态生成或改写 JSON Render UI 规格（spec JSON）。Use when 需要把自然语言或业务数据映射为通知卡 UI（Trending Stocks、Weekly Pick、Watchlist Comparison、Earnings Update、Rank Movement、Technical Signal 等）、需要输出符合 demo 组件约束的 `root/elements` 结构、或需要按组件 JSON Schema 做字段校验与修复。
---

# Dynamic Push UI JSON Render

## Overview
将场景需求和业务数据转换为可直接渲染的 JSON Render `spec`。始终复用 demo 中既有组件，输出稳定的 `NotificationCardContainer` 卡片结构。

## Workflow
1. 识别场景类型并选择对应文档：先看本文件内的 `Scenario Routing`。
2. 套用该场景的元素骨架：读取 `references/scenarios/*.md` 对应模板。
3. 填充 props 数据：仅填组件 schema 允许的字段。
4. 执行一致性检查：对照本文件内 `Syntax`、`Rules`、`Validation Order` 与 `references/schemas/*.json`。
5. 输出最终 spec：返回单个 JSON 对象（不要夹带解释性文本）。

## Syntax
始终使用以下顶层语法：

```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "..." },
      "children": ["notice-text", "core-module", "notice-actions"]
    },
    "notice-text": {
      "type": "NotificationText",
      "props": { "text": "..." },
      "children": []
    },
    "core-module": {
      "type": "<scene-component>",
      "props": {},
      "children": []
    },
    "notice-actions": {
      "type": "NotificationButtonList",
      "props": { "actions": [] },
      "children": []
    }
  }
}
```

## Rules
- 令 `root` 指向 `elements` 中真实存在的 key。
- 为每个 element 提供 `type`、`props`、`children` 三个字段。
- 将叶子节点 `children` 设为 `[]`。
- 将 element key 保持为短横线命名（如 `notice-actions`、`key-stats-strip`）。
- 保持 element key 语义化，避免无意义 id（如 `a1`、`x2`）。
- 保持容器子节点顺序：正文在前、业务模块居中、按钮在底部。
- 固定使用 `NotificationCardContainer` 作为容器节点类型。
- 固定使用 `NotificationText` 作为 `notice-text` 的节点类型。
- 固定使用 `NotificationButtonList` 作为 `notice-actions` 的节点类型。
- 成对提供 `AssetHeader.assetScoreValue` 与 `assetScoreTotal`，要么都给，要么都不填。
- 让 `MultiAssetDimensionScoreComparisonTable.dimensions[].dimensionKey` 与每个 `dimensionScores[].dimensionKey` 严格对齐。
- 让 `AssetDataGridTable.tableRows[].cells[].columnKey` 只使用 `tableColumns[].columnKey` 中定义过的值。
- 让 `AssetDimensionRankChangeTable.rows[].rankChange` 使用整数，正数表示上升，负数表示下降。
- 对 `NotificationButtonList.actions` 至少提供 `dislike`、`detail`、`askEd` 三类操作中的 2 个；推荐 3 个。
- 将 `NotificationButtonList.actions[].actionType` 限制为 `dislike`、`detail`、`askEd`。
- 为 `detail` 动作推荐提供 `href`，为 `askEd` 动作推荐提供 `question`。

## Validation Order
1. 验证 `root/elements` 顶层结构。
2. 验证 `children` 中引用的节点 key 全部存在。
3. 按组件类型匹配对应 `references/schemas/*.json` 执行字段校验。
4. 校验跨字段约束（如 score 字段成对、dimensionKey 对齐）。

## Scenario Routing
- `Trending Stocks`：`references/scenarios/trending-stocks.md`
- `Weekly Pick / Health Check (单资产评分)`：`references/scenarios/weekly-pick-score.md`
- `Watchlist Comparison (多资产对比)`：`references/scenarios/watchlist-comparison.md`
- `Earnings Update (指标条 + 数据表)`：`references/scenarios/earnings-grid.md`
- `Earnings Update (Narrative Highlights)`：`references/scenarios/earnings-highlights.md`
- `Rating Rank Movement`：`references/scenarios/rank-movement.md`
- `Technical Signal Update`：`references/scenarios/technical-signal-rating-change.md`
- `Hybrid Deep Dive (评分 + 多资产对比 + 单资产表)`：`references/scenarios/pick-hybrid.md`

## Scenario Docs
按需读取以下单场景文档（不要一次性加载全部）：

- [trending-stocks.md](references/scenarios/trending-stocks.md)
- [weekly-pick-score.md](references/scenarios/weekly-pick-score.md)
- [watchlist-comparison.md](references/scenarios/watchlist-comparison.md)
- [earnings-grid.md](references/scenarios/earnings-grid.md)
- [earnings-highlights.md](references/scenarios/earnings-highlights.md)
- [rank-movement.md](references/scenarios/rank-movement.md)
- [technical-signal-rating-change.md](references/scenarios/technical-signal-rating-change.md)
- [pick-hybrid.md](references/scenarios/pick-hybrid.md)

## Schema Resources
将组件 schema 作为最终约束来源：

- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/NotificationButtonList.schema.json`
- `references/schemas/AssetRecommendationList.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetDimensionScoreTable.schema.json`
- `references/schemas/MultiAssetDimensionScoreComparisonTable.schema.json`
- `references/schemas/AssetKeyStatsStrip.schema.json`
- `references/schemas/AssetDataGridTable.schema.json`
- `references/schemas/AssetNarrativeHighlightsList.schema.json`
- `references/schemas/AssetDimensionRankChangeTable.schema.json`
- `references/schemas/AssetRatingChangeComparisonList.schema.json`

## Output Contract
- 仅输出可解析 JSON。
- 不输出 schema 之外字段。
- 未提供数据时，优先生成结构完整的最小可渲染版本。
