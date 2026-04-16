# Figma 组件定义（最新）

## 1. 通知卡容器
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18324&m=dev

字段：
- `label`
- `title`
- `children`

说明：
- 底部按钮区已拆分为独立组件 `NotificationButtonList`（通知按钮列表）。

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

## 3. 资产头（AssetHeader）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81148-35902&m=dev
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19293&m=dev

字段：
- `assetLogo`
- `assetSymbol`
- `title`
- `assetScoreValue?`（得分）
- `assetScoreTotal?`（满分）

说明：
- 当 `assetScoreValue` 与 `assetScoreTotal` 同时存在时，按“评分头”样式展示（对应 `81148:35902`）。
- 当两者都不存在时，按“上下文头”样式展示（对应 `81033:19293`）。

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

`cells[]` 内字段：
- `columnKey`
- `cellValue`

## 13. 要点列表（AssetNarrativeHighlightsList）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19297&m=dev

字段：
- `items[]`

`items[]` 内字段：
- `title`
- `description`

## 14. 维度排名变化表（AssetDimensionRankChangeTable）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81174-35977&m=dev

字段：
- `rows[]`
- `dimensionLabel?`
- `rankLabel?`
- `changeLabel?`

`rows[]` 内字段：
- `dimensionKey`
- `dimensionName`
- `rankValue`
- `rankTotalAssets`
- `rankChange`

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

## 10. 资产头（AssetContextHeader，已并入 AssetHeader）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19293&m=dev

说明：
- 该定义已合并到 `## 3. 资产头（AssetHeader）`，保留此节仅用于历史兼容说明。

## 15. 通知按钮列表（NotificationButtonList）
Figma：
无独立映射节点（代码拆分组件）

字段：
- `actions[]`

`actions[]` 内字段：
- `type`（`negative` / `positive`）
  - `negative`：白色负反馈按钮
  - `positive`：绿色正反馈按钮
- `attributes`（`Record<string, unknown>`）
  - 开放字段，不预设内部参数类型；可按业务约定使用 `label`、`link` 等键

## 11. 关键指标条（AssetKeyStatsStrip）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19200&m=dev

字段：
- `items[]`

`items[]` 内字段：
- `metricKey`
- `metricName`
- `metricValue`
- `metricChange`

## 12. 数据表格（AssetDataGridTable）
Figma：
https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19219&m=dev

字段：
- `tableColumns[]`
- `tableRows[]`
- `firstColumnHeader?`

`tableColumns[]` 内字段：
- `columnKey`
- `columnTitle`
- `columnStyle?`（`default` / `badge` / `accent`）
  - `default`：普通文本样式（居中、常规强调）
  - `badge`：以圆角标签样式展示（适合状态词，如 Beat/Miss）
  - `accent`：使用强调色与更高字重（适合变化值，如 +8.2%）

`tableRows[]` 内字段：
- `rowKey`
- `rowName`
- `cells[]`

`cells[]` 内字段：
- `columnKey`
- `cellValue`
