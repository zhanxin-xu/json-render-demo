import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get("/api/spec", (_req, res) => {
  const groups = [
    {
      id: "figma-component-contracts-all",
      name: "FigmaComponentContracts (All 9)",
      spec: {
        root: "container-1",
        elements: {
          "container-1": {
            type: "NotificationCardContainer",
            props: {
              sourceLabel: "Ed's Picks for You",
              noticeTitle: "Trending Stocks",
              detailUrl: "https://example.com/asset/NVDA"
            },
            children: ["list-1", "asset-title-1", "table-1", "multi-table-1", "earnings-1", "highlights-1", "rank-change-1", "rating-change-1"]
          },
          "list-1": {
            type: "AssetRecommendationList",
            props: {
              assets: [
                {
                  assetSymbol: "NVDA",
                  assetPriceUsd: "$171.23",
                  priceChange24h: "+0.61%",
                  reason: "Growth beats 95% of sector · 4 quarters",
                  assetScoreValue: 88,
                  assetScoreTotal: 100
                },
                {
                  assetSymbol: "TSLA",
                  assetPriceUsd: "$171.23",
                  priceChange24h: "+0.61%",
                  reason: "Growth beats 95% of sector · 4 quarters",
                  assetScoreValue: 86,
                  assetScoreTotal: 100
                },
                {
                  assetSymbol: "AAPL",
                  assetPriceUsd: "$171.23",
                  priceChange24h: "+0.61%",
                  reason: "Growth beats 95% of sector · 4 quarters",
                  assetScoreValue: 83,
                  assetScoreTotal: 100
                }
              ]
            },
            children: []
          },
          "asset-title-1": {
            type: "AssetTitle",
            props: {
              assetSymbol: "NVDA",
              assetName: "NVIDIA Corporation",
              assetScoreValue: 88,
              assetScoreTotal: 100
            },
            children: []
          },
          "table-1": {
            type: "AssetDimensionScoreTable",
            props: {
              rows: [
                { dimensionName: "Growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                { dimensionName: "Profitability", scoreValue: 89, scoreTotal: 100, rankValue: 9, rankTotalAssets: 100 },
                { dimensionName: "Valuation", scoreValue: 81, scoreTotal: 100, rankValue: 15, rankTotalAssets: 100 }
              ]
            },
            children: []
          },
          "multi-table-1": {
            type: "MultiAssetDimensionScoreComparisonTable",
            props: {
              dimensions: [
                { dimensionKey: "growth", dimensionName: "Growth" },
                { dimensionKey: "profitability", dimensionName: "Profitability" },
                { dimensionKey: "valuation", dimensionName: "Valuation" }
              ],
              assets: [
                {
                  assetSymbol: "NVDA",
                  assetName: "NVIDIA Corporation",
                  dimensionScores: [
                    { dimensionKey: "growth", scoreValue: 92, scoreTotal: 100, rankValue: 2, rankTotalAssets: 100 },
                    { dimensionKey: "profitability", scoreValue: 89, scoreTotal: 100, rankValue: 9, rankTotalAssets: 100 },
                    { dimensionKey: "valuation", scoreValue: 81, scoreTotal: 100, rankValue: 15, rankTotalAssets: 100 }
                  ]
                },
                {
                  assetSymbol: "TSLA",
                  assetName: "Tesla",
                  dimensionScores: [
                    { dimensionKey: "growth", scoreValue: 85, scoreTotal: 100, rankValue: 14, rankTotalAssets: 100 },
                    { dimensionKey: "profitability", scoreValue: 78, scoreTotal: 100, rankValue: 21, rankTotalAssets: 100 },
                    { dimensionKey: "valuation", scoreValue: 72, scoreTotal: 100, rankValue: 27, rankTotalAssets: 100 }
                  ]
                }
              ]
            },
            children: []
          },
          "earnings-1": {
            type: "EarningsSnapshotCard",
            props: {
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
                }
              ]
            },
            children: []
          },
          "highlights-1": {
            type: "ManagementCallHighlightsCard",
            props: {
              assetSymbol: "NVDA",
              eventTitle: "Management Call",
              highlights: [
                {
                  title: "Services revenue growth expected to sustain double-digit momentum",
                  description: "Services carries the highest margins — growth here means improving profit mix."
                },
                {
                  title: "For you: stronger Services supports more stable free cash flow",
                  description: "Stability in free cash flow can improve dividend and buyback visibility."
                }
              ]
            },
            children: []
          },
          "rank-change-1": {
            type: "DimensionRankChangeCard",
            props: {
              assetSymbol: "NVDA",
              assetName: "NVIDIA Corporation",
              dimensionRankChanges: [
                { dimensionKey: "growth", dimensionName: "Growth", rankValue: 2, rankTotalAssets: 100, rankChange: -2 },
                { dimensionKey: "profitability", dimensionName: "Profitability", rankValue: 9, rankTotalAssets: 100, rankChange: 1 },
                { dimensionKey: "valuation", dimensionName: "Valuation", rankValue: 15, rankTotalAssets: 100, rankChange: -1 }
              ]
            },
            children: []
          },
          "rating-change-1": {
            type: "RatingChangeComparisonList",
            props: {
              changes: [
                { assetSymbol: "BTC", fromRating: "Buy", toRating: "Strong Buy" },
                { assetSymbol: "ETH", fromRating: "Hold", toRating: "Buy" }
              ]
            },
            children: []
          }
        }
      }
    }
  ];

  res.json({ groups });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
