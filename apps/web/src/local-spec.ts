export function getSpecGroups() {
const assetLogos = {
  NVDA: "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
  TSLA: "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
  APPL: "https://www.figma.com/api/mcp/asset/af2ee954-92ab-4c7b-8cc6-3ff9d15d944a",
  BTC: "https://cdn.simpleicons.org/bitcoin/f7931a"
} as const;

const trendingAssets = [
  {
    assetLogo: assetLogos.NVDA,
    assetSymbol: "NVDA",
    assetName: "NVIDIA Corporation",
    assetPriceUsd: "$171.23",
    priceChange24h: "+0.61%",
    reason: "Growth beats 95% of sector · 4 quarters",
    assetScoreValue: 88,
    assetScoreTotal: 100
  },
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    assetPriceUsd: "$171.23",
    priceChange24h: "+0.61%",
    reason: "Growth beats 95% of sector · 4 quarters",
    assetScoreValue: 86,
    assetScoreTotal: 100
  },
  {
    assetLogo: assetLogos.APPL,
    assetSymbol: "APPL",
    assetName: "Apple",
    assetPriceUsd: "$171.23",
    priceChange24h: "+0.61%",
    reason: "Growth beats 95% of sector · 4 quarters",
    assetScoreValue: 83,
    assetScoreTotal: 100
  }
];

const dimensionRows = [
  { dimensionName: "Growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
  { dimensionName: "Profitability", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
  { dimensionName: "Valuation", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 }
];

const comparisonDimensions3 = [
  { dimensionKey: "growth", dimensionName: "Growth" },
  { dimensionKey: "profitability", dimensionName: "Profitability" },
  { dimensionKey: "valuation", dimensionName: "Valuation" }
];

const comparisonDimensions4 = [
  { dimensionKey: "growth", dimensionName: "Growth" },
  { dimensionKey: "valuation", dimensionName: "Valuation" },
  { dimensionKey: "profitability", dimensionName: "Profitability" },
  { dimensionKey: "quality", dimensionName: "Quality" }
];

const comparisonAssets3 = [
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  },
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  },
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  }
];

const comparisonAssets4 = [
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "quality", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  },
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "quality", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  },
  {
    assetLogo: assetLogos.TSLA,
    assetSymbol: "TSLA",
    assetName: "Tesla",
    dimensionScores: [
      { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "valuation", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
      { dimensionKey: "profitability", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 },
      { dimensionKey: "quality", scoreValue: 92, scoreTotal: 100, rankValue: 4, rankTotalAssets: 100 }
    ]
  }
];

const earningsProps = {
  assetLogo: assetLogos.NVDA,
  assetSymbol: "NVDA",
  eventTitle: "Q2 Earnings",
  summaryMetrics: [
    { metricKey: "fcf", metricName: "FCF", metricValue: "$1.51", metricChange: "+8.2%" },
    { metricKey: "dps", metricName: "DPS", metricValue: "$1.51", metricChange: "+8.2%" },
    { metricKey: "pr", metricName: "PR", metricValue: "15.1%", metricChange: "+8.2%" }
  ],
  tableColumns: [
    { columnKey: "estimate", columnTitle: "Estimate" },
    { columnKey: "actual", columnTitle: "Actual" },
    { columnKey: "result", columnTitle: "Result" },
    { columnKey: "yoy", columnTitle: "YoY" }
  ],
  tableRows: [
    {
      rowKey: "eps",
      rowName: "EPS",
      cells: [
        { columnKey: "estimate", cellValue: "$1.51" },
        { columnKey: "actual", cellValue: "$1.58" },
        { columnKey: "result", cellValue: "Beat" },
        { columnKey: "yoy", cellValue: "+8.2%" }
      ]
    },
    {
      rowKey: "revenue",
      rowName: "Revenue",
      cells: [
        { columnKey: "estimate", cellValue: "$1.51" },
        { columnKey: "actual", cellValue: "$1.58" },
        { columnKey: "result", cellValue: "Beat" },
        { columnKey: "yoy", cellValue: "+8.2%" }
      ]
    },
    {
      rowKey: "gm",
      rowName: "GM",
      cells: [
        { columnKey: "estimate", cellValue: "$1.51" },
        { columnKey: "actual", cellValue: "$1.58" },
        { columnKey: "result", cellValue: "Beat" },
        { columnKey: "yoy", cellValue: "+8.2%" }
      ]
    }
  ]
};

const managementCallProps = {
  assetLogo: assetLogos.NVDA,
  assetSymbol: "NVDA",
  eventTitle: "Management Call",
  highlights: [
    {
      title: "Services revenue growth expected to sustain double-digit momentum",
      description: "Services carries the highest margins — growth here means improving profit mix"
    },
    {
      title: "Services revenue growth expected to sustain double-digit momentum",
      description: "For you: Stronger Services = more stable FCF backing your dividends"
    },
    {
      title: "Services revenue growth expected to sustain double-digit momentum",
      description: "Services carries the highest margins — growth here means improving profit mix"
    }
  ]
};

const rankChangeProps = {
  assetLogo: assetLogos.NVDA,
  assetSymbol: "NVDA",
  assetName: "NVIDIA Corporation",
  dimensionRankChanges: [
    { dimensionKey: "growth", dimensionName: "Growth", rankValue: 2, rankTotalAssets: 100, rankChange: -2 },
    { dimensionKey: "profitability", dimensionName: "Profitability", rankValue: 2, rankTotalAssets: 100, rankChange: -2 },
    { dimensionKey: "valuation", dimensionName: "Valuation", rankValue: 2, rankTotalAssets: 100, rankChange: -2 },
    { dimensionKey: "quality", dimensionName: "Quality", rankValue: 2, rankTotalAssets: 100, rankChange: -2 }
  ]
};

const ratingChangeProps = {
  changes: [
    { assetLogo: assetLogos.BTC, assetSymbol: "BTC", fromRating: "Buy", toRating: "Strong Buy" },
    { assetLogo: assetLogos.BTC, assetSymbol: "BTC", fromRating: "Buy", toRating: "Strong Buy" }
  ]
};

function containerElements(containerProps: Record<string, unknown>, children: Array<{ id: string; type: string; props: Record<string, unknown> }>) {
  const normalizedProps = { ...containerProps };
  const normalizedChildren = [...children];
  const insight = typeof normalizedProps.insightText === "string" ? normalizedProps.insightText.trim() : "";
  delete normalizedProps.insightText;

  if (insight) {
    normalizedChildren.unshift({
      id: "notice-text",
      type: "NotificationText",
      props: { text: insight }
    });
  }

  const elements: Record<string, { type: string; props: Record<string, unknown>; children: string[] }> = {
    container: {
      type: "NotificationCardContainer",
      props: normalizedProps,
      children: normalizedChildren.map((item) => item.id)
    }
  };

  for (const child of normalizedChildren) {
    elements[child.id] = {
      type: child.type,
      props: child.props,
      children: []
    };
  }

  return {
    root: "container",
    elements
  };
}
  const groups = [
    {
      id: "scene-81033-18324",
      name: "81033:18324",
      spec: containerElements(
        {
          noticeTitle: "Trending Stocks",
          detailUrl: "https://example.com/asset/NVDA",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [{ id: "list", type: "AssetRecommendationList", props: { sectionLabel: "Theme", assets: trendingAssets } }]
      )
    },
    {
      id: "scene-81148-35892",
      name: "81148:35892",
      spec: containerElements(
        {
          noticeTitle: "My Pick This Week: TSM",
          detailUrl: "https://example.com/asset/TSM",
          insightText:
            "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value.",
        },
        [
          {
            id: "title",
            type: "AssetTitle",
            props: { assetLogo: assetLogos.NVDA, assetSymbol: "NVDA", assetName: "NVIDIA Corporation", assetScoreValue: 88, assetScoreTotal: 100 }
          },
          {
            id: "table",
            type: "AssetDimensionScoreTable",
            props: {
              rows: [
                { dimensionName: "Growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                { dimensionName: "Profitability", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                { dimensionName: "Valuation", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 }
              ]
            }
          }
        ]
      )
    },
    {
      id: "scene-81033-18596",
      name: "81033:18596",
      spec: containerElements(
        {
          noticeTitle: "Semiconductor Watchlist Comparison",
          detailUrl: "https://example.com/watchlist/semiconductors",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
        },
        [
          {
            id: "comparison",
            type: "MultiAssetDimensionScoreComparisonTable",
            props: { dimensions: comparisonDimensions3, assets: comparisonAssets3 }
          }
        ]
      )
    },
    {
      id: "scene-81033-19338",
      name: "81033:19338",
      spec: containerElements(
        {
          noticeTitle: "My Pick This Week: TSM",
          detailUrl: "https://example.com/asset/TSM",
          insightText:
            "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value.",
        },
        [
          {
            id: "title",
            type: "AssetTitle",
            props: { assetLogo: assetLogos.NVDA, assetSymbol: "NVDA", assetName: "NVIDIA Corporation", assetScoreValue: 88, assetScoreTotal: 100 }
          },
          {
            id: "table",
            type: "AssetDimensionScoreTable",
            props: { rows: dimensionRows }
          }
        ]
      )
    },
    {
      id: "scene-81033-18901",
      name: "81033:18901",
      spec: containerElements(
        {
          noticeTitle: "单资产健康检查",
          detailUrl: "https://example.com/asset/health/nvda",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [
          {
            id: "title",
            type: "AssetTitle",
            props: { assetLogo: assetLogos.NVDA, assetSymbol: "NVDA", assetName: "NVIDIA Corporation", assetScoreValue: 88, assetScoreTotal: 100 }
          },
          { id: "table", type: "AssetDimensionScoreTable", props: { rows: dimensionRows } }
        ]
      )
    },
    {
      id: "scene-81033-18948",
      name: "81033:18948",
      spec: containerElements(
        {
          noticeTitle: "Semiconductor Watchlist Comparison",
          detailUrl: "https://example.com/watchlist/semiconductors",
          insightText: "Ed's Insight (placeholder bodyEd's Insight placeholder body text",
        },
        [
          {
            id: "comparison",
            type: "MultiAssetDimensionScoreComparisonTable",
            props: { dimensions: comparisonDimensions4, assets: comparisonAssets4 }
          }
        ]
      )
    },
    {
      id: "scene-81033-19183",
      name: "81033:19183",
      spec: containerElements(
        {
          noticeTitle: "Earnings Update",
          detailUrl: "https://example.com/earnings/nvda",
          insightText: "Ed's Insight (placeholder bodyEd's Insight placeholder body text",
        },
        [
          {
            id: "asset-context-header",
            type: "AssetContextHeader",
            props: { assetLogo: earningsProps.assetLogo, assetSymbol: earningsProps.assetSymbol, title: earningsProps.eventTitle }
          },
          {
            id: "key-stats-strip",
            type: "KeyStatsStrip",
            props: { items: earningsProps.summaryMetrics }
          },
          {
            id: "data-grid-table",
            type: "DataGridTable",
            props: {
              tableColumns: earningsProps.tableColumns,
              tableRows: earningsProps.tableRows,
              badgeColumnKeys: ["result"],
              accentColumnKeys: ["yoy"]
            }
          }
        ]
      )
    },
    {
      id: "scene-81033-19281",
      name: "81033:19281",
      spec: containerElements(
        {
          noticeTitle: "Earnings Update",
          detailUrl: "https://example.com/management-call/nvda",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [
          {
            id: "asset-context-header",
            type: "AssetContextHeader",
            props: { assetLogo: managementCallProps.assetLogo, assetSymbol: managementCallProps.assetSymbol, title: managementCallProps.eventTitle }
          },
          {
            id: "narrative-highlights-list",
            type: "NarrativeHighlightsList",
            props: { items: managementCallProps.highlights }
          }
        ]
      )
    },
    {
      id: "scene-81033-19034",
      name: "81033:19034",
      spec: containerElements(
        {
          noticeTitle: "Rating Rank Movement",
          detailUrl: "https://example.com/rank-movement/nvda",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [
          {
            id: "asset-context-header",
            type: "AssetContextHeader",
            props: { assetLogo: rankChangeProps.assetLogo, assetSymbol: rankChangeProps.assetSymbol, title: rankChangeProps.assetName }
          },
          {
            id: "dimension-rank-change-table",
            type: "DimensionRankChangeTable",
            props: { rows: rankChangeProps.dimensionRankChanges }
          }
        ]
      )
    },
    {
      id: "scene-81033-19095",
      name: "81033:19095",
      spec: containerElements(
        {
          noticeTitle: "Rating Rank Movement",
          detailUrl: "https://example.com/rank-movement/btc",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [
          {
            id: "asset-context-header",
            type: "AssetContextHeader",
            props: {
              assetLogo: assetLogos.BTC,
              assetSymbol: "BTC",
              title: "Bitcoin"
            }
          },
          {
            id: "dimension-rank-change-table",
            type: "DimensionRankChangeTable",
            props: { rows: rankChangeProps.dimensionRankChanges }
          }
        ]
      )
    },
    {
      id: "scene-81033-19157",
      name: "81033:19157",
      spec: containerElements(
        {
          noticeTitle: "Technical Signal Update",
          detailUrl: "https://example.com/technical-signal/btc",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [{ id: "rating", type: "RatingChangeComparisonList", props: ratingChangeProps }]
      )
    },
    {
      id: "scene-81033-19395",
      name: "81033:19395",
      spec: containerElements(
        {
          noticeTitle: "Trending Stocks",
          detailUrl: "https://example.com/asset/NVDA",
          insightText: "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text",
        },
        [{ id: "list", type: "AssetRecommendationList", props: { sectionLabel: "Theme", assets: trendingAssets } }]
      )
    },
    {
      id: "scene-81033-18043",
      name: "81033:18043",
      spec: containerElements(
        {
          noticeTitle: "My Pick This Week: TSM",
          detailUrl: "https://example.com/asset/TSM",
          insightText:
            "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value.",
        },
        [
          {
            id: "title",
            type: "AssetTitle",
            props: { assetLogo: assetLogos.NVDA, assetSymbol: "NVDA", assetName: "NVIDIA Corporation", assetScoreValue: 2, assetScoreTotal: 100 }
          },
          {
            id: "comparison",
            type: "MultiAssetDimensionScoreComparisonTable",
            props: {
              dimensions: [
                { dimensionKey: "growth", dimensionName: "Growth" },
                { dimensionKey: "valuation", dimensionName: "Valuation" },
                { dimensionKey: "profitability", dimensionName: "Profitability" }
              ],
              assets: [
                {
                  assetLogo: assetLogos.NVDA,
                  assetSymbol: "NVDA",
                  assetName: "NVIDIA Corporation",
                  dimensionScores: [
                    { dimensionKey: "growth", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                    { dimensionKey: "valuation", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                    { dimensionKey: "profitability", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 }
                  ]
                }
              ]
            }
          },
          {
            id: "table",
            type: "AssetDimensionScoreTable",
            props: {
              rows: [
                { dimensionName: "Growth", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                { dimensionName: "Profitability", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                { dimensionName: "Valuation", scoreValue: 2, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 }
              ]
            }
          }
        ]
      )
    }
  ];
  return groups;
}
