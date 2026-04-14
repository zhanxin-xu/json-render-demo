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
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Earnings Update" },
      "children": ["notice-text", "asset-context-header", "key-stats-strip", "data-grid-table", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "asset-context-header": {
      "type": "AssetHeader",
      "props": { "assetSymbol": "NVDA", "title": "Q2 Earnings" },
      "children": []
    },
    "key-stats-strip": {
      "type": "AssetKeyStatsStrip",
      "props": {
        "items": [
          { "metricKey": "eps", "metricName": "EPS", "metricValue": "$0.98", "metricChange": "+12.1%" }
        ]
      },
      "children": []
    },
    "data-grid-table": {
      "type": "AssetDataGridTable",
      "props": {
        "tableColumns": [{ "columnKey": "estimate", "columnTitle": "Estimate" }],
        "tableRows": [
          { "rowKey": "eps", "rowName": "EPS", "cells": [{ "columnKey": "estimate", "cellValue": "$0.95" }] }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## Rules
- Use `AssetHeader` without score fields (`assetScoreValue` / `assetScoreTotal`).
- Every `cells[].columnKey` must exist in `tableColumns`.
