# Rank Movement

## Scenario Description
Show a themed rank snapshot across multiple assets, using per-dimension score and rank values in one comparison table.

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
      "props": { "label": "Ed's Daily Discovery", "title": "Rating Rank Movement" },
      "children": ["notice-text", "theme-comparison-table", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "theme-comparison-table": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": {
        "sectionLabel": "AI Ecosystem",
        "dimensions": [
          { "dimensionKey": "overall", "dimensionName": "总评分" },
          { "dimensionKey": "growth", "dimensionName": "Growth" },
          { "dimensionKey": "profitability", "dimensionName": "Profitability" },
          { "dimensionKey": "valuation", "dimensionName": "Valuation" }
        ],
        "assets": [
          {
            "assetSymbol": "TSLA",
            "assetName": "Tesla",
            "dimensionScores": [
              { "dimensionKey": "overall", "scoreValue": 92, "scoreTotal": 100, "rankValue": 2, "rankTotalAssets": 100 },
              { "dimensionKey": "growth", "scoreValue": 92, "scoreTotal": 100, "rankValue": 2, "rankTotalAssets": 100 },
              { "dimensionKey": "profitability", "scoreValue": 92, "scoreTotal": 100, "rankValue": 4, "rankTotalAssets": 100 },
              { "dimensionKey": "valuation", "scoreValue": 92, "scoreTotal": 100, "rankValue": 4, "rankTotalAssets": 100 }
            ]
          },
          {
            "assetSymbol": "NVDA",
            "assetName": "NVIDIA",
            "dimensionScores": [
              { "dimensionKey": "overall", "scoreValue": 94, "scoreTotal": 100, "rankValue": 1, "rankTotalAssets": 100 },
              { "dimensionKey": "growth", "scoreValue": 95, "scoreTotal": 100, "rankValue": 1, "rankTotalAssets": 100 },
              { "dimensionKey": "profitability", "scoreValue": 93, "scoreTotal": 100, "rankValue": 2, "rankTotalAssets": 100 },
              { "dimensionKey": "valuation", "scoreValue": 90, "scoreTotal": 100, "rankValue": 8, "rankTotalAssets": 100 }
            ]
          },
          {
            "assetSymbol": "AAPL",
            "assetName": "Apple",
            "dimensionScores": [
              { "dimensionKey": "overall", "scoreValue": 88, "scoreTotal": 100, "rankValue": 8, "rankTotalAssets": 100 },
              { "dimensionKey": "growth", "scoreValue": 86, "scoreTotal": 100, "rankValue": 10, "rankTotalAssets": 100 },
              { "dimensionKey": "profitability", "scoreValue": 90, "scoreTotal": 100, "rankValue": 5, "rankTotalAssets": 100 },
              { "dimensionKey": "valuation", "scoreValue": 89, "scoreTotal": 100, "rankValue": 6, "rankTotalAssets": 100 }
            ]
          }
        ]
      },
      "children": []
    },
    "notice-actions": {
      "type": "NotificationButtonList",
      "props": {
        "actions": [
          { "actionType": "dislike", "label": "Not Tracking" },
          { "actionType": "detail", "label": "View Theme Changes", "href": "https://example.com/rank-movement/theme" },
          { "actionType": "askEd", "label": "Ask Ed", "question": "Which asset in this theme has the best risk-reward balance now?" }
        ]
      },
      "children": []
    }
  }
}
```

## Rules
- Use a concrete thematic label for `sectionLabel` (for example `AI Ecosystem`), not the literal string `Theme`.
- Keep `assets` as distinct symbols (for example `TSLA`, `NVDA`, `AAPL`) to avoid repeated duplicate rows.
- Keep `dimensions[].dimensionKey` aligned with every asset's `dimensionScores[].dimensionKey`.
