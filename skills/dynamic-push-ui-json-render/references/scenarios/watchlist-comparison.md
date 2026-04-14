# Watchlist Comparison

## Scenario Description
Compare multiple assets side by side across shared scoring dimensions for fast watchlist ranking.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `MultiAssetDimensionScoreComparisonTable`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/MultiAssetDimensionScoreComparisonTable.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
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

## Rules
- Each asset must provide scores for every key declared in `dimensions`.
- Recommend 2-5 assets and 3-5 dimensions.
