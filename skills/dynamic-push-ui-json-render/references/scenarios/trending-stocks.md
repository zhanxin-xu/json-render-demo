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
      "props": { "noticeTitle": "Trending Stocks" },
      "children": ["notice-text", "list", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "list": {
      "type": "AssetRecommendationList",
      "props": {
        "sectionLabel": "Theme",
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
- If `assetLogo` is included, keep it as a reachable URL.
