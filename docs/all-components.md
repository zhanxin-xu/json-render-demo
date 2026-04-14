# JSON Render 组件清单与 Schema

来源：`apps/web/src/catalog.tsx` 中 `defineCatalog(schema, { components: ... })`。
Figma 主文件：[Edgen - 開發文檔](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?m=dev)。
Figma 组件契约补充说明见：[docs/figma-component-contracts.md](/Users/user/project/opensocial/demo/json-render-demo/docs/figma-component-contracts.md)。

## 组件总数

当前共 **11** 个组件。

## 组件列表

1. `NotificationCardContainer`
2. `NotificationText`
3. `AssetRecommendationList`
4. `AssetHeader`
5. `AssetDimensionScoreTable`
6. `MultiAssetDimensionScoreComparisonTable`
7. `KeyStatsStrip`
8. `DataGridTable`
9. `NarrativeHighlightsList`
10. `DimensionRankChangeTable`
11. `RatingChangeComparisonList`

## 各组件 Props Schema

### 1) NotificationCardContainer

说明：通知卡外层容器，承载标题、子组件内容和底部操作按钮。
Figma：[`81033:18324`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18324&m=dev)。

```ts
{
  noticeTitle: string;
  detailUrl: string;
}
```

### 2) NotificationText

说明：通知卡中的正文文本块（通常作为说明/洞察文案）。
Figma：无独立映射节点，复用在通知卡场景中，参考 [`81033:18324`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18324&m=dev)。

```ts
{
  text: string;
}
```

### 3) AssetRecommendationList

说明：资产推荐列表，展示多个资产的价格、涨跌、推荐理由和评分。
Figma：[`81033:18334`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18334&m=dev)。

```ts
{
  sectionLabel?: string;
  assets: AssetRecommendationListItem[];
}
```

`AssetRecommendationListItem`:

```ts
{
  assetLogo?: string;
  assetSymbol: string;
  assetPriceUsd: string;
  priceChange24h: string;
  reason: string;
  assetScoreValue: number;
  assetScoreTotal: number;
}
```

### 4) AssetHeader

说明：统一资产头组件。若同时提供 `assetScoreValue` 与 `assetScoreTotal`，按评分头样式渲染；否则按上下文标题样式渲染。
Figma（有评分样式）：[`81148:35902`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81148-35902&m=dev)。
Figma（无评分样式）：[`81033:19293`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19293&m=dev)。

```ts
{
  assetLogo?: string;
  assetSymbol: string;
  title: string;
  assetScoreValue?: number;
  assetScoreTotal?: number;
}
```

### 5) AssetDimensionScoreTable

说明：单资产多维度评分表，展示每个维度的分数和排名。
Figma：[`81148:35915`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81148-35915&m=dev)。

```ts
{
  rows: AssetDimensionTableRow[];
}
```

`AssetDimensionTableRow`:

```ts
{
  dimensionName: string;
  scoreValue: number;
  scoreTotal: number;
  rankValue: number;
  rankTotalAssets: number;
}
```

### 6) MultiAssetDimensionScoreComparisonTable

说明：多资产维度对比表，横向比较不同资产在各维度的评分和排名。
Figma：[`81033:18607`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-18607&m=dev)。

```ts
{
  dimensions: DimensionDefinition[];
  assets: MultiAssetDimensionItem[];
}
```

`DimensionDefinition`:

```ts
{
  dimensionKey: string;
  dimensionName: string;
}
```

`MultiAssetDimensionItem`:

```ts
{
  assetLogo?: string;
  assetSymbol: string;
  assetName: string;
  dimensionScores: DimensionScore[];
}
```

`DimensionScore`:

```ts
{
  dimensionKey: string;
  scoreValue: number;
  scoreTotal: number;
  rankValue: number;
  rankTotalAssets: number;
}
```

### 7) KeyStatsStrip

说明：可复用的关键指标条，用于展示简要核心数据。
Figma：[`81033:19200`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19200&m=dev)。

```ts
{
  items: SummaryMetric[];
}
```

`SummaryMetric`:

```ts
{
  metricKey: string;
  metricName: string;
  metricValue: string;
  metricChange: string;
}
```

### 8) DataGridTable

说明：可复用数据表格组件，支持徽标列与强调列配置。
Figma：[`81033:19219`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19219&m=dev)。

```ts
{
  tableColumns: TableColumn[];
  tableRows: TableRow[];
  firstColumnHeader?: string;
  badgeColumnKeys?: string[];
  accentColumnKeys?: string[];
}
```

`TableColumn`:

```ts
{
  columnKey: string;
  columnTitle: string;
}
```

`TableRow`:

```ts
{
  rowKey: string;
  rowName: string;
  cells: TableCell[];
  resultTag?: string;
  rowChange?: string;
}
```

`TableCell`:

```ts
{
  columnKey: string;
  cellValue: string;
}
```

### 9) NarrativeHighlightsList

说明：可复用叙述型要点列表，展示标题和描述。
Figma：[`81033:19297`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19297&m=dev)。

```ts
{
  items: Highlight[];
}
```

`Highlight`:

```ts
{
  title: string;
  description: string;
}
```

### 10) DimensionRankChangeTable

说明：可复用维度排名变化表，展示当前排名与变化值。
Figma：[`81174:35977`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81174-35977&m=dev)。

```ts
{
  rows: DimensionRankChange[];
  dimensionLabel?: string;
  rankLabel?: string;
  changeLabel?: string;
}
```

`DimensionRankChange`:

```ts
{
  dimensionKey: string;
  dimensionName: string;
  rankValue: number;
  rankTotalAssets: number;
  rankChange: number;
}
```

### 11) RatingChangeComparisonList

说明：评级变动对比列表，展示资产从旧评级到新评级的变化。
Figma：[`81033:19165`](https://www.figma.com/design/5u9TvHh6FzxydDBW6ncDja/Edgen---%E9%96%8B%E7%99%BC%E6%96%87%E6%AA%94?node-id=81033-19165&m=dev)。

```ts
{
  changes: RatingChange[];
}
```

`RatingChange`:

```ts
{
  assetLogo?: string;
  assetSymbol: string;
  fromRating: string;
  toRating: string;
}
```

## 复用子 Schema（原始命名）

`catalog.tsx` 中复用的子 schema 常量如下：

- `assetRecommendationListItemSchema`
- `assetDimensionTableRowSchema`
- `dimensionDefinitionSchema`
- `dimensionScoreSchema`
- `multiAssetDimensionItemSchema`
- `summaryMetricSchema`
- `tableColumnSchema`
- `tableCellSchema`
- `tableRowSchema`
- `highlightSchema`
- `dimensionRankChangeSchema`
- `ratingChangeSchema`
- `assetHeaderSchema`
- `keyStatsStripSchema`
- `dataGridTableSchema`
- `narrativeHighlightsListSchema`
- `dimensionRankChangeTableSchema`
