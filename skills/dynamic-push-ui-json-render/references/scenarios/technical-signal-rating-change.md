# Technical Signal Rating Change

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetRatingChangeComparisonList` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Technical Signal Update" },
      "children": ["notice-text", "rating-change-list", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "rating-change-list": {
      "type": "AssetRatingChangeComparisonList",
      "props": {
        "changes": [
          { "assetSymbol": "NVDA", "fromRating": "Hold", "toRating": "Buy" }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- 每条 `changes` 必须包含 `assetSymbol/fromRating/toRating`。
- 可选提供 `assetLogo`。
