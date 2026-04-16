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
### Example: `pick-hybrid-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Alpha Picks",
        "title": "My Pick This Week: TSM"
      },
      "children": [
        "notice-text",
        "title",
        "comparison",
        "table",
        "notice-actions"
      ]
    },
    "notice-text": {
      "type": "NotificationText",
      "props": {
        "text": "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value."
      },
      "children": []
    },
    "title": {
      "type": "AssetHeader",
      "props": {
        "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
        "assetSymbol": "NVDA",
        "title": "NVIDIA Corporation",
        "assetScoreValue": 2,
        "assetScoreTotal": 100
      },
      "children": []
    },
    "comparison": {
      "type": "MultiAssetDimensionScoreComparisonTable",
      "props": {
        "sectionLabel": "AI Ecosystem Peer Comparison",
        "dimensions": [
          {
            "dimensionKey": "growth",
            "dimensionName": "Growth"
          },
          {
            "dimensionKey": "valuation",
            "dimensionName": "Valuation"
          },
          {
            "dimensionKey": "profitability",
            "dimensionName": "Profitability"
          }
        ],
        "assets": [
          {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "assetName": "NVIDIA Corporation",
            "dimensionScores": [
              {
                "dimensionKey": "growth",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "valuation",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionKey": "profitability",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              }
            ]
          }
        ]
      },
      "children": []
    },
    "table": {
      "type": "AssetDimensionScoreTable",
      "props": {
        "sectionLabel": "AI Ecosystem Theme Score",
        "rows": [
          {
            "dimensionName": "Growth",
            "scoreValue": 2,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Profitability",
            "scoreValue": 2,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Valuation",
            "scoreValue": 2,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
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
              "label": "No Action Yet"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "View Full Report",
              "link": "https://example.com/asset/TSM"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:Given the current score and valuation, suggest a step-by-step action plan."
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
- Use `comparison` for horizontal cross-asset context first, then `table` for target-asset vertical detail.
- Keep `title.assetSymbol` aligned with the target asset represented by `table`.
- Set concrete `sectionLabel` values for both `comparison` and `table` to clarify scope.
