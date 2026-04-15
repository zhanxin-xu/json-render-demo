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
### Example: `rating-rank-movement-rank-table-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ed's Daily Discovery",
        "title": "Rating Rank Movement"
      },
      "children": [
        "notice-text",
        "asset-context-header",
        "dimension-rank-change-table",
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
    "asset-context-header": {
      "type": "AssetHeader",
      "props": {
        "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
        "assetSymbol": "NVDA",
        "title": "NVIDIA Corporation"
      },
      "children": []
    },
    "dimension-rank-change-table": {
      "type": "AssetDimensionRankChangeTable",
      "props": {
        "rows": [
          {
            "dimensionKey": "growth",
            "dimensionName": "Growth",
            "rankValue": 2,
            "rankTotalAssets": 100,
            "rankChange": -2
          },
          {
            "dimensionKey": "profitability",
            "dimensionName": "Profitability",
            "rankValue": 2,
            "rankTotalAssets": 100,
            "rankChange": -2
          },
          {
            "dimensionKey": "valuation",
            "dimensionName": "Valuation",
            "rankValue": 2,
            "rankTotalAssets": 100,
            "rankChange": -2
          },
          {
            "dimensionKey": "quality",
            "dimensionName": "Quality",
            "rankValue": 2,
            "rankTotalAssets": 100,
            "rankChange": -2
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
            "label": "Skip Ranking"
          },
          {
            "actionType": "positive",
            "label": "View Rank Changes",
            "link": "https://example.com/rank-movement/nvda"
          },
          {
            "actionType": "positive",
            "label": "Ask Ed",
            "link": "ask-ed:Are these ranking changes driven by short-term noise or fundamental shifts?"
          }
        ]
      },
      "children": []
    }
  }
}
```

### Example: `rating-rank-movement-theme-comparison-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Ed's Daily Discovery",
        "title": "Rating Rank Movement"
      },
      "children": [
        "notice-text",
        "theme-comparison-table",
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
    "theme-comparison-table": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": {
        "sectionLabel": "AI Ecosystem",
        "dimensions": [
          {
            "dimensionKey": "overall",
            "dimensionName": "总评分"
          },
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
            "assetLogo": "https://www.figma.com/api/mcp/asset/11190ea1-32c3-4b65-8746-71105e0076c8",
            "assetSymbol": "TSLA",
            "assetName": "Tesla",
            "dimensionScores": [
              {
                "dimensionKey": "overall",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
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
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "assetName": "NVIDIA",
            "dimensionScores": [
              {
                "dimensionKey": "overall",
                "scoreValue": 94,
                "scoreTotal": 100,
                "rankValue": 1,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "growth",
                "scoreValue": 95,
                "scoreTotal": 100,
                "rankValue": 1,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 93,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 90,
                "scoreTotal": 100,
                "rankValue": 8,
                "rankTotalAssets": 100
              }
            ]
          },
          {
            "assetLogo": "https://cdn.simpleicons.org/apple/000000",
            "assetSymbol": "AAPL",
            "assetName": "Apple",
            "dimensionScores": [
              {
                "dimensionKey": "overall",
                "scoreValue": 88,
                "scoreTotal": 100,
                "rankValue": 8,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "growth",
                "scoreValue": 86,
                "scoreTotal": 100,
                "rankValue": 10,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 90,
                "scoreTotal": 100,
                "rankValue": 5,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 89,
                "scoreTotal": 100,
                "rankValue": 6,
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
            "actionType": "negative",
            "label": "Not Tracking"
          },
          {
            "actionType": "positive",
            "label": "View Theme Changes",
            "link": "https://example.com/rank-movement/theme"
          },
          {
            "actionType": "positive",
            "label": "Ask Ed",
            "link": "ask-ed:Which asset in this theme has the best risk-reward balance now?"
          }
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
