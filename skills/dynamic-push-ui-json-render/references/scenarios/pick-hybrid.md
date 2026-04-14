# Pick Hybrid

## Scenario Description
Build a deep-dive card that combines a headline score, cross-asset comparison, and a target-asset drilldown table.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetHeader`
- `MultiAssetDimensionScoreComparisonTable`
- `AssetDimensionScoreTable`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/MultiAssetDimensionScoreComparisonTable.schema.json`
- `references/schemas/AssetDimensionScoreTable.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
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
      "props": { "sectionLabel": "AI Ecosystem Peer Comparison", "dimensions": [], "assets": [] },
      "children": []
    },
    "table": {
      "type": "AssetDimensionScoreTable",
      "props": { "sectionLabel": "AI Ecosystem Theme Score", "rows": [] },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## Rules
- Use `comparison` for horizontal cross-asset context first, then `table` for target-asset vertical detail.
- Keep `title.assetSymbol` aligned with the target asset represented by `table`.
- Set concrete `sectionLabel` values for both `comparison` and `table` to clarify scope.
