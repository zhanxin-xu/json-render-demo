# Trending Stocks

## 组件组合
`NotificationCardContainer` + `NotificationText` + `AssetRecommendationList` + `NotificationButtonList`

## 元素骨架
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "Trending Stocks" },
      "children": ["notice-text", "list", "notice-actions"]
    },
    "notice-text": { "type": "NotificationText", "props": { "text": "..." }, "children": [] },
    "list": {
      "type": "AssetRecommendationList",
      "props": {
        "sectionLabel": "Theme",
        "assets": [
          {
            "assetSymbol": "NVDA",
            "assetPriceUsd": "$171.23",
            "priceChange24h": "+0.61%",
            "reason": "...",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
          }
        ]
      },
      "children": []
    },
    "notice-actions": { "type": "NotificationButtonList", "props": { "actions": [] }, "children": [] }
  }
}
```

## 规范
- 推荐 `assets` 数量为 3-5。
- 每个资产都要提供价格、24h 涨跌和推荐理由。
- 若有 `assetLogo`，保持为可访问 URL。
