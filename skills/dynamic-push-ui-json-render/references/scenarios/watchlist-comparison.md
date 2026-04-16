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
### Example: `watchlist-comparison-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ratings & Discovery",
        "title": "Semiconductor Watchlist Comparison"
      },
      "children": [
        "notice-text",
        "comparison",
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
    "comparison": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": {
        "dimensions": [
          {
            "dimensionKey": "growth",
            "dimensionName": "Growth"
          },
          {
            "dimensionKey": "profitability",
            "dimensionName": "Profitability"
          },
          {
            "dimensionKey": "valuation",
            "dimensionName": "Valuation"
          }
        ],
        "assets": [
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
            "assetSymbol": "TSLA",
            "assetName": "Tesla",
            "dimensionScores": [
              {
                "dimensionKey": "growth",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              }
            ]
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
            "assetSymbol": "TSLA",
            "assetName": "Tesla",
            "dimensionScores": [
              {
                "dimensionKey": "growth",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              }
            ]
          },
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
            "assetSymbol": "TSLA",
            "assetName": "Tesla",
            "dimensionScores": [
              {
                "dimensionKey": "growth",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 4,
                "rankTotalAssets": 100
              }
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
          {
            "type": "negative",
            "attributes": {
              "label": "No Comparison"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Open Watchlist",
              "link": "https://example.com/watchlist/semiconductors"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:In this semiconductor comparison, which two names are most worth tracking now?"
            }
          }
        ]
      },
      "children": []
    }
  }
}
```

## Rules
- Each asset must provide scores for every key declared in `dimensions`.
- Prefer a concrete scoped label in `MultiAssetDimensionScoreComparisonTable.sectionLabel` (for example `Semiconductor Theme Comparison`).
- Recommend 2-5 assets and 3-5 dimensions.
