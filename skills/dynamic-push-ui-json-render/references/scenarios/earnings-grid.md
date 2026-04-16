# Earnings Grid

## Scenario Description
Summarize an earnings event with key metrics and a compact estimate-vs-actual style data table.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetHeader`
- `AssetKeyStatsStrip`
- `AssetDataGridTable`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetKeyStatsStrip.schema.json`
- `references/schemas/AssetDataGridTable.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
### Example: `earnings-grid-v1`
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": {
        "label": "Earnings Call",
        "title": "Earnings Update"
      },
      "children": [
        "notice-text",
        "asset-context-header",
        "key-stats-strip",
        "data-grid-table",
        "notice-actions"
      ]
    },
    "notice-text": {
      "type": "NotificationText",
      "props": {
        "text": "Ed's Insight (placeholder bodyEd's Insight placeholder body text"
      },
      "children": []
    },
    "asset-context-header": {
      "type": "AssetHeader",
      "props": {
        "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
        "assetSymbol": "NVDA",
        "title": "Q2 Earnings"
      },
      "children": []
    },
    "key-stats-strip": {
      "type": "AssetKeyStatsStrip",
      "props": {
        "items": [
          {
            "metricKey": "fcf",
            "metricName": "FCF",
            "metricValue": "$1.51",
            "metricChange": "+8.2%"
          },
          {
            "metricKey": "dps",
            "metricName": "DPS",
            "metricValue": "$1.51",
            "metricChange": "+8.2%"
          },
          {
            "metricKey": "pr",
            "metricName": "PR",
            "metricValue": "15.1%",
            "metricChange": "+8.2%"
          }
        ]
      },
      "children": []
    },
    "data-grid-table": {
      "type": "AssetDataGridTable",
      "props": {
        "tableColumns": [
          {
            "columnKey": "estimate",
            "columnTitle": "Estimate"
          },
          {
            "columnKey": "actual",
            "columnTitle": "Actual"
          },
          {
            "columnKey": "result",
            "columnTitle": "Result",
            "columnStyle": "badge"
          },
          {
            "columnKey": "yoy",
            "columnTitle": "YoY",
            "columnStyle": "accent"
          }
        ],
        "tableRows": [
          {
            "rowKey": "eps",
            "rowName": "EPS",
            "cells": [
              {
                "columnKey": "estimate",
                "cellValue": "$1.51"
              },
              {
                "columnKey": "actual",
                "cellValue": "$1.58"
              },
              {
                "columnKey": "result",
                "cellValue": "Beat"
              },
              {
                "columnKey": "yoy",
                "cellValue": "+8.2%"
              }
            ]
          },
          {
            "rowKey": "revenue",
            "rowName": "Revenue",
            "cells": [
              {
                "columnKey": "estimate",
                "cellValue": "$1.51"
              },
              {
                "columnKey": "actual",
                "cellValue": "$1.58"
              },
              {
                "columnKey": "result",
                "cellValue": "Beat"
              },
              {
                "columnKey": "yoy",
                "cellValue": "+8.2%"
              }
            ]
          },
          {
            "rowKey": "gm",
            "rowName": "GM",
            "cells": [
              {
                "columnKey": "estimate",
                "cellValue": "$1.51"
              },
              {
                "columnKey": "actual",
                "cellValue": "$1.58"
              },
              {
                "columnKey": "result",
                "cellValue": "Beat"
              },
              {
                "columnKey": "yoy",
                "cellValue": "+8.2%"
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
              "label": "Skip Earnings"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "View Earnings Details",
              "link": "https://example.com/earnings/nvda"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:What were the most important beats and misses in this earnings report?"
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
- Use `AssetHeader` without score fields (`assetScoreValue` / `assetScoreTotal`).
- Every `cells[].columnKey` must exist in `tableColumns`.
