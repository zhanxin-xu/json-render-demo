# Technical Signal Rating Change

## Scenario Description
Show rating transitions driven by technical signals, such as upgrades and downgrades across tracked assets.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetRatingChangeComparisonList`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetRatingChangeComparisonList.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Technical Signal Update" },
      "children": ["notice-text", "rating-change-list", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "rating-change-list": {
      "type": "AssetRatingChangeComparisonList",
      "props": {
        "changes": [
          { "assetSymbol": "NVDA", "fromRating": "Hold", "toRating": "Buy" }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## Rules
- Each entry in `changes` must include `assetSymbol`, `fromRating`, and `toRating`.
- `assetLogo` is optional.
