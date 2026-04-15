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
### Example: `trending-stocks-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ed's Picks for You",
        "title": "Trending Stocks"
      },
      "children": [
        "notice-text",
        "list",
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
    "list": {
      "type": "AssetRecommendationList",
      "props": {
        "sectionLabel": "AI Ecosystem",
        "assets": [
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
            "assetSymbol": "TSLA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 86,
            "assetScoreTotal": 100
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/af2ee954-92ab-4c7b-8cc6-3ff9d15d944a",
            "assetSymbol": "APPL",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 83,
            "assetScoreTotal": 100
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
            "label": "Not Interested"
          },
          {
            "actionType": "positive",
            "label": "Open NVDA",
            "link": "https://example.com/asset/NVDA"
          },
          {
            "actionType": "positive",
            "label": "Ask Ed",
            "link": "ask-ed:Which stock in this trending list should I review first, and why?"
          }
        ]
      },
      "children": []
    }
  }
}
```

### Example: `trending-stocks-v2`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ed's Picks for You",
        "title": "Trending Stocks"
      },
      "children": [
        "notice-text",
        "list",
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
    "list": {
      "type": "AssetRecommendationList",
      "props": {
        "sectionLabel": "AI Ecosystem",
        "assets": [
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
            "assetSymbol": "TSLA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 86,
            "assetScoreTotal": 100
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/af2ee954-92ab-4c7b-8cc6-3ff9d15d944a",
            "assetSymbol": "APPL",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "Growth beats 95% of sector · 4 quarters",
            "assetScoreValue": 83,
            "assetScoreTotal": 100
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
            "label": "Skip Picks"
          },
          {
            "actionType": "positive",
            "label": "View Trending List",
            "link": "https://example.com/asset/NVDA"
          },
          {
            "actionType": "positive",
            "label": "Ask Ed",
            "link": "ask-ed:Which name in this trending set is best suited for a conservative portfolio?"
          }
        ]
      },
      "children": []
    }
  }
}
```

## Rules
- Recommend `assets` length between 3 and 5.
- Provide price, 24h change, and reason for each asset.
- Use a concrete thematic category name in `sectionLabel` (for example `AI Ecosystem`), not the literal string `Theme`.
- If `assetLogo` is included, keep it as a reachable URL.
