# Rank Movement

## Scenario Description
Track how an asset's rank changed by dimension over time, with signed deltas for each factor.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetHeader`
- `AssetDimensionRankChangeTable`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetDimensionRankChangeTable.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
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

## Rules
- `rankChange > 0` means ranking improvement; `rankChange < 0` means decline.
- `dimensionLabel`, `rankLabel`, and `changeLabel` are optional custom headers.
