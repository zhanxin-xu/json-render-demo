# Earnings Highlights

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetHeader(无评分)` + `AssetNarrativeHighlightsList` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Earnings Update" },
      "children": ["notice-text", "asset-context-header", "highlights", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "asset-context-header": {
      "type": "AssetHeader",
      "props": { "assetSymbol": "NVDA", "title": "Q2 Earnings" },
      "children": []
    },
    "highlights": {
      "type": "AssetNarrativeHighlightsList",
      "props": {
        "items": [
          { "title": "Guidance Raised", "description": "Management raised full-year guidance." }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- `items` 推荐 2-5 条。
- `title` 保持短句，`description` 提供可读解释。
