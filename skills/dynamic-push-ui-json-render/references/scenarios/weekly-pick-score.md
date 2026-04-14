# Weekly Pick Score

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetHeader(含评分)` + `AssetDimensionScoreTable` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "My Pick This Week: TSM" },
      "children": ["notice-text", "title", "table", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "title": {
      "type": "AssetHeader",
      "props": {
        "assetSymbol": "TSM",
        "title": "Taiwan Semiconductor",
        "assetScoreValue": 88,
        "assetScoreTotal": 100
      },
      "children": []
    },
    "table": {
      "type": "AssetDimensionScoreTable",
      "props": {
        "rows": [
          { "dimensionName": "Growth", "scoreValue": 92, "scoreTotal": 100, "rankValue": 2, "rankTotalAssets": 100 }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- `AssetHeader` 中评分字段必须成对出现。
- `rows` 推荐至少 3 条维度（如 Growth/Profitability/Valuation）。
