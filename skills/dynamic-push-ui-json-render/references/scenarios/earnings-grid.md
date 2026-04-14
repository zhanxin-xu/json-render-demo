# Earnings Grid

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetHeader(无评分)` + `AssetKeyStatsStrip` + `AssetDataGridTable` + `NotificationButtonList`

## 元素骨架
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

## 规范
- 使用无评分 `AssetHeader`（不填 `assetScoreValue/assetScoreTotal`）。
- `cells[].columnKey` 必须来自 `tableColumns`。
