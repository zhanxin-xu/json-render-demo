# Weekly Pick Score

## Scenario Description
Highlight one featured asset of the week with a headline score and a per-dimension score breakdown.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetHeader`
- `AssetDimensionScoreTable`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetDimensionScoreTable.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "label": "Ed's Picks for You", "title": "My Pick This Week: TSM" },
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
        "sectionLabel": "AI Ecosystem Theme Score",
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

## Rules
- Keep `AssetHeader` score fields paired (`assetScoreValue` + `assetScoreTotal`).
- Prefer a concrete scoped label in `AssetDimensionScoreTable.sectionLabel` (for example `AI Ecosystem Theme Score`).
- Recommend at least 3 scoring rows (for example Growth, Profitability, Valuation).
