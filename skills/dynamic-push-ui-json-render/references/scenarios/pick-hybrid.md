# Pick Hybrid

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetHeader(含评分)` + `MultiAssetDimensionScoreComparisonTable` + `AssetDimensionScoreTable` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "My Pick This Week: TSM" },
      "children": ["notice-text", "title", "comparison", "table", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "title": {
      "type": "AssetHeader",
      "props": {
        "assetSymbol": "TSM",
        "title": "Taiwan Semiconductor",
        "assetScoreValue": 82,
        "assetScoreTotal": 100
      },
      "children": []
    },
    "comparison": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": { "dimensions": [], "assets": [] },
      "children": []
    },
    "table": {
      "type": "AssetDimensionScoreTable",
      "props": { "rows": [] },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- 先用 `comparison` 展示横向对比，再用 `table` 展示目标资产纵向细分。
- `title.assetSymbol` 应与 `table` 的目标资产一致。
