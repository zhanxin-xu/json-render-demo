# Figma 组件定义（最新）

## 1. 通知卡容器
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18324&m=dev

字段：
- `noticeTitle`
- `detailUrl`
- `children`

## 2. 资产推荐列表
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18334&m=dev

字段：
- `assets[]`

`assets[]` 内字段：
- `assetLogo`
- `assetSymbol`
- `assetPriceUsd`
- `priceChange24h`
- `reason`
- `assetScoreValue`（得分）
- `assetScoreTotal`（满分）

## 3. 资产标题
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81148-35902&m=dev

字段：
- `assetLogo`
- `assetSymbol`
- `assetName`
- `assetScoreValue`（得分）
- `assetScoreTotal`（满分）

## 4. 单一资产不同维度评分展示表格
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81148-35915&m=dev

字段：
- `rows[]`

`rows[]` 内字段：
- `dimensionName`
- `scoreValue`（得分）
- `scoreTotal`（满分）
- `rankValue`（排行）
- `rankTotalAssets`（参与排行总资产数）

## 5. 多资产维度评分对比表
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18607&m=dev

字段：
- `dimensions[]`
- `assets[]`

`dimensions[]` 内字段：
- `dimensionKey`
- `dimensionName`

`assets[]` 内字段：
- `assetLogo`
- `assetSymbol`
- `assetName`
- `dimensionScores[]`

`dimensionScores[]` 内字段：
- `dimensionKey`
- `scoreValue`（得分）
- `scoreTotal`（满分）
- `rankValue`（排行）
- `rankTotalAssets`（参与排行总资产数）

## 6. 财报速览卡
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19191&m=dev

字段：
- `assetLogo`
- `assetSymbol`
- `eventTitle`
- `summaryMetrics[]`
- `tableColumns[]`
- `tableRows[]`

`summaryMetrics[]` 内字段：
- `metricKey`
- `metricName`
- `metricValue`
- `metricChange`

`tableColumns[]` 内字段：
- `columnKey`
- `columnTitle`

`tableRows[]` 内字段：
- `rowKey`
- `rowName`
- `cells[]`
- `resultTag?`
- `rowChange?`

`cells[]` 内字段：
- `columnKey`
- `cellValue`

## 7. 管理层电话会要点卡
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19289&m=dev

字段：
- `assetLogo`
- `assetSymbol`
- `eventTitle`
- `highlights[]`

`highlights[]` 内字段：
- `title`
- `description`

## 8. 维度排名变化卡
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19042&m=dev

字段：
- `assetLogo`
- `assetSymbol`
- `assetName`
- `dimensionRankChanges[]`

`dimensionRankChanges[]` 内字段：
- `dimensionKey`
- `dimensionName`
- `rankValue`（排行）
- `rankTotalAssets`（参与排行总资产数）
- `rankChange`

## 9. 评级变动对比列表
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19165&m=dev

字段：
- `changes[]`

`changes[]` 内字段：
- `assetLogo`
- `assetSymbol`
- `fromRating`
- `toRating`
