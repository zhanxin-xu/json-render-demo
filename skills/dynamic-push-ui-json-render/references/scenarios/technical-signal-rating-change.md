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
### Example: `technical-signal-update-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ed's Daily Discovery",
        "title": "Technical Signal Update"
      },
      "children": [
        "notice-text",
        "rating",
        "notice-actions"
      ]
    },
    "notice-text": {
      "type": "NotificationText",
      "props": {
        "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
      },
      "children": []
    },
    "rating": {
      "type": "AssetRatingChangeComparisonList",
      "props": {
        "changes": [
          {
            "assetLogo": "https://cdn.simpleicons.org/bitcoin/f7931a",
            "assetSymbol": "BTC",
            "fromRating": "Buy",
            "toRating": "Strong Buy"
          },
          {
            "assetLogo": "https://cdn.simpleicons.org/bitcoin/f7931a",
            "assetSymbol": "BTC",
            "fromRating": "Buy",
            "toRating": "Strong Buy"
          }
        ]
      },
      "children": []
    },
    "notice-actions": {
      "type": "NotificationButtonList",
      "props": {
        "actions": [
          {
            "actionType": "negative",
            "label": "Skip Signal"
          },
          {
            "actionType": "positive",
            "label": "View Technical Details",
            "link": "https://example.com/technical-signal/btc"
          },
          {
            "actionType": "positive",
            "label": "Ask Ed",
            "link": "ask-ed:Does this technical signal suggest holding, adding, or trimming?"
          }
        ]
      },
      "children": []
    }
  }
}
```

## Rules
- Each entry in `changes` must include `assetSymbol`, `fromRating`, and `toRating`.
- `assetLogo` is optional.
