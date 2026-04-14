# Trending Stocks

## Scenario Description
Show a ranked list of currently hot assets with quick pricing context and a short reason for each pick.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetRecommendationList`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetRecommendationList.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "label": "Ed's Picks for You", "title": "Trending Stocks" },
      "children": ["notice-text", "list", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "list": {
      "type": "AssetRecommendationList",
      "props": {
        "sectionLabel": "AI Ecosystem",
        "assets": [
          {
            "assetSymbol": "NVDA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "...",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
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
- Recommend `assets` length between 3 and 5.
- Provide price, 24h change, and reason for each asset.
- Use a concrete thematic category name in `sectionLabel` (for example `AI Ecosystem`), not the literal string `Theme`.
- If `assetLogo` is included, keep it as a reachable URL.
