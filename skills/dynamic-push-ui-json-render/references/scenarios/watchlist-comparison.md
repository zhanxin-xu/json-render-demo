# Watchlist Comparison

## 组件组合
`NotificationCardContainer` + `NotificationText` + `MultiAssetDimensionScoreComparisonTable` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Semiconductor Watchlist Comparison" },
      "children": ["notice-text", "comparison", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "comparison": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": {
        "dimensions": [
          { "dimensionKey": "growth", "dimensionName": "Growth" },
          { "dimensionKey": "valuation", "dimensionName": "Valuation" }
        ],
        "assets": [
          {
            "assetSymbol": "NVDA",
            "assetName": "NVIDIA",
            "dimensionScores": [
              { "dimensionKey": "growth", "scoreValue": 92, "scoreTotal": 100, "rankValue": 2, "rankTotalAssets": 100 },
              { "dimensionKey": "valuation", "scoreValue": 65, "scoreTotal": 100, "rankValue": 23, "rankTotalAssets": 100 }
            ]
          }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- 每个资产都要覆盖全部 `dimensions`。
- 推荐资产数量 2-5；维度数量 3-5。
