# Rank Movement

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetHeader` + `AssetDimensionRankChangeTable` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Rating Rank Movement" },
      "children": ["notice-text", "asset-context-header", "rank-change-table", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "asset-context-header": {
      "type": "AssetHeader",
      "props": { "assetSymbol": "NVDA", "title": "NVIDIA Corporation" },
      "children": []
    },
    "rank-change-table": {
      "type": "AssetDimensionRankChangeTable",
      "props": {
        "rows": [
          {
            "dimensionKey": "growth",
            "dimensionName": "Growth",
            "rankValue": 4,
            "rankTotalAssets": 100,
            "rankChange": 2
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
- `rankChange > 0` 表示名次改善，`rankChange < 0` 表示下滑。
- 可选填 `dimensionLabel/rankLabel/changeLabel` 自定义表头。
