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
### Example: `weekly-pick-score-v1`
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
          {
            "dimensionName": "Growth",
            "scoreValue": 92,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Profitability",
            "scoreValue": 92,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Valuation",
            "scoreValue": 92,
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
              "label": "Skip for Now"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "View TSM Thesis",
              "link": "https://example.com/asset/TSM"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:What is the core thesis for TSM this week, and what are the main risks?"
            }
          }
        ]
      },
      "children": []
    }
  }
}
```

### Example: `weekly-pick-score-v2`
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
          {
            "dimensionName": "Growth",
            "scoreValue": 92,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Profitability",
            "scoreValue": 92,
            "scoreTotal": 100,
            "rankValue": 2,
            "rankTotalAssets": 100
          },
          {
            "dimensionName": "Valuation",
            "scoreValue": 92,
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
              "label": "Skip This"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "View Score Breakdown",
              "link": "https://example.com/asset/TSM"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:Based on the scores, what are this asset's strongest and weakest dimensions right now?"
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
- Keep `AssetHeader` score fields paired (`assetScoreValue` + `assetScoreTotal`).
- Prefer a concrete scoped label in `AssetDimensionScoreTable.sectionLabel` (for example `AI Ecosystem Theme Score`).
- Recommend at least 3 scoring rows (for example Growth, Profitability, Valuation).
