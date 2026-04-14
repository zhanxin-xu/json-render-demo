const groups = [
  {
    "id": "scene-81033-18324",
    "name": "81033:18324",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ed's Picks for You",
            "title": "Trending Stocks"
          },
          "children": [
            "notice-text",
            "list",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "list": {
          "type": "AssetRecommendationList",
          "props": {
            "sectionLabel": "AI Ecosystem",
            "assets": [
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
                "assetSymbol": "NVDA",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 88,
                "assetScoreTotal": 100
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
                "assetSymbol": "TSLA",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 86,
                "assetScoreTotal": 100
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/af2ee954-92ab-4c7b-8cc6-3ff9d15d944a",
                "assetSymbol": "APPL",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 83,
                "assetScoreTotal": 100
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Not Interested"
              },
              {
                "actionType": "detail",
                "label": "Open NVDA",
                "href": "https://example.com/asset/NVDA"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Which stock in this trending list should I review first, and why?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81148-35892",
    "name": "81148:35892",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Alpha Picks",
            "title": "My Pick This Week: TSM"
          },
          "children": [
            "notice-text",
            "title",
            "table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value."
          },
          "children": []
        },
        "title": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "NVIDIA Corporation",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
          },
          "children": []
        },
        "table": {
          "type": "AssetDimensionScoreTable",
          "props": {
            "sectionLabel": "AI Ecosystem Theme Score",
            "rows": [
              {
                "dimensionName": "Growth",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Profitability",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Valuation",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip for Now"
              },
              {
                "actionType": "detail",
                "label": "View TSM Thesis",
                "href": "https://example.com/asset/TSM"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "What is the core thesis for TSM this week, and what are the main risks?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-18596",
    "name": "81033:18596",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ratings & Discovery",
            "title": "Semiconductor Watchlist Comparison"
          },
          "children": [
            "notice-text",
            "comparison",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "comparison": {
          "type": "MultiAssetDimensionScoreComparisonTable",
          "props": {
            "dimensions": [
              {
                "dimensionKey": "growth",
                "dimensionName": "Growth"
              },
              {
                "dimensionKey": "profitability",
                "dimensionName": "Profitability"
              },
              {
                "dimensionKey": "valuation",
                "dimensionName": "Valuation"
              }
            ],
            "assets": [
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
                "assetSymbol": "TSLA",
                "assetName": "Tesla",
                "dimensionScores": [
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  }
                ]
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
                "assetSymbol": "TSLA",
                "assetName": "Tesla",
                "dimensionScores": [
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  }
                ]
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
                "assetSymbol": "TSLA",
                "assetName": "Tesla",
                "dimensionScores": [
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  }
                ]
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "No Comparison"
              },
              {
                "actionType": "detail",
                "label": "Open Watchlist",
                "href": "https://example.com/watchlist/semiconductors"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "In this semiconductor comparison, which two names are most worth tracking now?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19338",
    "name": "81033:19338",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Alpha Picks",
            "title": "My Pick This Week: TSM"
          },
          "children": [
            "notice-text",
            "title",
            "table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value."
          },
          "children": []
        },
        "title": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "NVIDIA Corporation",
            "assetScoreValue": 88,
            "assetScoreTotal": 100
          },
          "children": []
        },
        "table": {
          "type": "AssetDimensionScoreTable",
          "props": {
            "sectionLabel": "AI Ecosystem Theme Score",
            "rows": [
              {
                "dimensionName": "Growth",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Profitability",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Valuation",
                "scoreValue": 92,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip This"
              },
              {
                "actionType": "detail",
                "label": "View Score Breakdown",
                "href": "https://example.com/asset/TSM"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Based on the scores, what are this asset's strongest and weakest dimensions right now?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19183",
    "name": "81033:19183",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Earnings Call",
            "title": "Earnings Update"
          },
          "children": [
            "notice-text",
            "asset-context-header",
            "key-stats-strip",
            "data-grid-table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight (placeholder bodyEd's Insight placeholder body text"
          },
          "children": []
        },
        "asset-context-header": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "Q2 Earnings"
          },
          "children": []
        },
        "key-stats-strip": {
          "type": "AssetKeyStatsStrip",
          "props": {
            "items": [
              {
                "metricKey": "fcf",
                "metricName": "FCF",
                "metricValue": "$1.51",
                "metricChange": "+8.2%"
              },
              {
                "metricKey": "dps",
                "metricName": "DPS",
                "metricValue": "$1.51",
                "metricChange": "+8.2%"
              },
              {
                "metricKey": "pr",
                "metricName": "PR",
                "metricValue": "15.1%",
                "metricChange": "+8.2%"
              }
            ]
          },
          "children": []
        },
        "data-grid-table": {
          "type": "AssetDataGridTable",
          "props": {
            "tableColumns": [
              {
                "columnKey": "estimate",
                "columnTitle": "Estimate"
              },
              {
                "columnKey": "actual",
                "columnTitle": "Actual"
              },
              {
                "columnKey": "result",
                "columnTitle": "Result"
              },
              {
                "columnKey": "yoy",
                "columnTitle": "YoY"
              }
            ],
            "tableRows": [
              {
                "rowKey": "eps",
                "rowName": "EPS",
                "cells": [
                  {
                    "columnKey": "estimate",
                    "cellValue": "$1.51"
                  },
                  {
                    "columnKey": "actual",
                    "cellValue": "$1.58"
                  },
                  {
                    "columnKey": "result",
                    "cellValue": "Beat"
                  },
                  {
                    "columnKey": "yoy",
                    "cellValue": "+8.2%"
                  }
                ]
              },
              {
                "rowKey": "revenue",
                "rowName": "Revenue",
                "cells": [
                  {
                    "columnKey": "estimate",
                    "cellValue": "$1.51"
                  },
                  {
                    "columnKey": "actual",
                    "cellValue": "$1.58"
                  },
                  {
                    "columnKey": "result",
                    "cellValue": "Beat"
                  },
                  {
                    "columnKey": "yoy",
                    "cellValue": "+8.2%"
                  }
                ]
              },
              {
                "rowKey": "gm",
                "rowName": "GM",
                "cells": [
                  {
                    "columnKey": "estimate",
                    "cellValue": "$1.51"
                  },
                  {
                    "columnKey": "actual",
                    "cellValue": "$1.58"
                  },
                  {
                    "columnKey": "result",
                    "cellValue": "Beat"
                  },
                  {
                    "columnKey": "yoy",
                    "cellValue": "+8.2%"
                  }
                ]
              }
            ],
            "badgeColumnKeys": [
              "result"
            ],
            "accentColumnKeys": [
              "yoy"
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip Earnings"
              },
              {
                "actionType": "detail",
                "label": "View Earnings Details",
                "href": "https://example.com/earnings/nvda"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "What were the most important beats and misses in this earnings report?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19281",
    "name": "81033:19281",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Earnings Call",
            "title": "Earnings Update"
          },
          "children": [
            "notice-text",
            "asset-context-header",
            "narrative-highlights-list",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "asset-context-header": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "Management Call"
          },
          "children": []
        },
        "narrative-highlights-list": {
          "type": "AssetNarrativeHighlightsList",
          "props": {
            "items": [
              {
                "title": "Services revenue growth expected to sustain double-digit momentum",
                "description": "Services carries the highest margins — growth here means improving profit mix"
              },
              {
                "title": "Services revenue growth expected to sustain double-digit momentum",
                "description": "For you: Stronger Services = more stable FCF backing your dividends"
              },
              {
                "title": "Services revenue growth expected to sustain double-digit momentum",
                "description": "Services carries the highest margins — growth here means improving profit mix"
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip Highlights"
              },
              {
                "actionType": "detail",
                "label": "View Call Notes",
                "href": "https://example.com/management-call/nvda"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "From the management call, what guidance matters most for next quarter?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19034",
    "name": "81033:19034",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ed's Daily Discovery",
            "title": "Rating Rank Movement"
          },
          "children": [
            "notice-text",
            "asset-context-header",
            "dimension-rank-change-table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "asset-context-header": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "NVIDIA Corporation"
          },
          "children": []
        },
        "dimension-rank-change-table": {
          "type": "AssetDimensionRankChangeTable",
          "props": {
            "rows": [
              {
                "dimensionKey": "growth",
                "dimensionName": "Growth",
                "rankValue": 2,
                "rankTotalAssets": 100,
                "rankChange": -2
              },
              {
                "dimensionKey": "profitability",
                "dimensionName": "Profitability",
                "rankValue": 2,
                "rankTotalAssets": 100,
                "rankChange": -2
              },
              {
                "dimensionKey": "valuation",
                "dimensionName": "Valuation",
                "rankValue": 2,
                "rankTotalAssets": 100,
                "rankChange": -2
              },
              {
                "dimensionKey": "quality",
                "dimensionName": "Quality",
                "rankValue": 2,
                "rankTotalAssets": 100,
                "rankChange": -2
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip Ranking"
              },
              {
                "actionType": "detail",
                "label": "View Rank Changes",
                "href": "https://example.com/rank-movement/nvda"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Are these ranking changes driven by short-term noise or fundamental shifts?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19095",
    "name": "81033:19095",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ed's Daily Discovery",
            "title": "Rating Rank Movement"
          },
          "children": [
            "notice-text",
            "theme-comparison-table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "theme-comparison-table": {
          "type": "MultiAssetDimensionScoreComparisonTable",
          "props": {
            "sectionLabel": "AI Ecosystem",
            "dimensions": [
              {
                "dimensionKey": "overall",
                "dimensionName": "总评分"
              },
              {
                "dimensionKey": "growth",
                "dimensionName": "Growth"
              },
              {
                "dimensionKey": "profitability",
                "dimensionName": "Profitability"
              },
              {
                "dimensionKey": "valuation",
                "dimensionName": "Valuation"
              }
            ],
            "assets": [
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/11190ea1-32c3-4b65-8746-71105e0076c8",
                "assetSymbol": "TSLA",
                "assetName": "Tesla",
                "dimensionScores": [
                  {
                    "dimensionKey": "overall",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 92,
                    "scoreTotal": 100,
                    "rankValue": 4,
                    "rankTotalAssets": 100
                  }
                ]
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
                "assetSymbol": "NVDA",
                "assetName": "NVIDIA",
                "dimensionScores": [
                  {
                    "dimensionKey": "overall",
                    "scoreValue": 94,
                    "scoreTotal": 100,
                    "rankValue": 1,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 95,
                    "scoreTotal": 100,
                    "rankValue": 1,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 93,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 90,
                    "scoreTotal": 100,
                    "rankValue": 8,
                    "rankTotalAssets": 100
                  }
                ]
              },
              {
                "assetLogo": "https://cdn.simpleicons.org/apple/000000",
                "assetSymbol": "AAPL",
                "assetName": "Apple",
                "dimensionScores": [
                  {
                    "dimensionKey": "overall",
                    "scoreValue": 88,
                    "scoreTotal": 100,
                    "rankValue": 8,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 86,
                    "scoreTotal": 100,
                    "rankValue": 10,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 90,
                    "scoreTotal": 100,
                    "rankValue": 5,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 89,
                    "scoreTotal": 100,
                    "rankValue": 6,
                    "rankTotalAssets": 100
                  }
                ]
              },
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Not Tracking"
              },
              {
                "actionType": "detail",
                "label": "View Theme Changes",
                "href": "https://example.com/rank-movement/theme"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Which asset in this theme has the best risk-reward balance now?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19157",
    "name": "81033:19157",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ed's Daily Discovery",
            "title": "Technical Signal Update"
          },
          "children": [
            "notice-text",
            "rating",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "rating": {
          "type": "AssetRatingChangeComparisonList",
          "props": {
            "changes": [
              {
                "assetLogo": "https://cdn.simpleicons.org/bitcoin/f7931a",
                "assetSymbol": "BTC",
                "fromRating": "Buy",
                "toRating": "Strong Buy"
              },
              {
                "assetLogo": "https://cdn.simpleicons.org/bitcoin/f7931a",
                "assetSymbol": "BTC",
                "fromRating": "Buy",
                "toRating": "Strong Buy"
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip Signal"
              },
              {
                "actionType": "detail",
                "label": "View Technical Details",
                "href": "https://example.com/technical-signal/btc"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Does this technical signal suggest holding, adding, or trimming?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-19395",
    "name": "81033:19395",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Ed's Picks for You",
            "title": "Trending Stocks"
          },
          "children": [
            "notice-text",
            "list",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Ed's Insight placeholder body textEd's placeholder body text Ed's Insight placeholder body text"
          },
          "children": []
        },
        "list": {
          "type": "AssetRecommendationList",
          "props": {
            "sectionLabel": "AI Ecosystem",
            "assets": [
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
                "assetSymbol": "NVDA",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 88,
                "assetScoreTotal": 100
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/68bdbd5e-f85e-4b45-9a5e-7bddaf3075b2",
                "assetSymbol": "TSLA",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 86,
                "assetScoreTotal": 100
              },
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/af2ee954-92ab-4c7b-8cc6-3ff9d15d944a",
                "assetSymbol": "APPL",
                "assetPriceUsd": "$171.23",
                "priceChange24h": "+0.61%",
                "reason": "Growth beats 95% of sector · 4 quarters",
                "assetScoreValue": 83,
                "assetScoreTotal": 100
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "Skip Picks"
              },
              {
                "actionType": "detail",
                "label": "View Trending List",
                "href": "https://example.com/asset/NVDA"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Which name in this trending set is best suited for a conservative portfolio?"
              }
            ]
          },
          "children": []
        }
      }
    }
  },
  {
    "id": "scene-81033-18043",
    "name": "81033:18043",
    "spec": {
      "root": "container",
      "elements": {
        "container": {
          "type": "NotificationCardContainer",
          "props": {
            "label": "Alpha Picks",
            "title": "My Pick This Week: TSM"
          },
          "children": [
            "notice-text",
            "title",
            "comparison",
            "table",
            "notice-actions"
          ]
        },
        "notice-text": {
          "type": "NotificationText",
          "props": {
            "text": "Revenue Growth +33% YoY — near the top of sector, driven by AI chip demand. Advanced Node revenue now 68% of total, strengthening pricing power in leading-edge process. Valuation 28/103, Growth 8/103 — growth far outpacing valuation, offering strong value."
          },
          "children": []
        },
        "title": {
          "type": "AssetHeader",
          "props": {
            "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
            "assetSymbol": "NVDA",
            "title": "NVIDIA Corporation",
            "assetScoreValue": 2,
            "assetScoreTotal": 100
          },
          "children": []
        },
        "comparison": {
          "type": "MultiAssetDimensionScoreComparisonTable",
          "props": {
            "sectionLabel": "AI Ecosystem Peer Comparison",
            "dimensions": [
              {
                "dimensionKey": "growth",
                "dimensionName": "Growth"
              },
              {
                "dimensionKey": "valuation",
                "dimensionName": "Valuation"
              },
              {
                "dimensionKey": "profitability",
                "dimensionName": "Profitability"
              }
            ],
            "assets": [
              {
                "assetLogo": "https://www.figma.com/api/mcp/asset/c25c9a9c-3737-42dd-a753-446c63e0d811",
                "assetSymbol": "NVDA",
                "assetName": "NVIDIA Corporation",
                "dimensionScores": [
                  {
                    "dimensionKey": "growth",
                    "scoreValue": 2,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "valuation",
                    "scoreValue": 2,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  },
                  {
                    "dimensionKey": "profitability",
                    "scoreValue": 2,
                    "scoreTotal": 100,
                    "rankValue": 2,
                    "rankTotalAssets": 100
                  }
                ]
              }
            ]
          },
          "children": []
        },
        "table": {
          "type": "AssetDimensionScoreTable",
          "props": {
            "sectionLabel": "AI Ecosystem Theme Score",
            "rows": [
              {
                "dimensionName": "Growth",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Profitability",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              },
              {
                "dimensionName": "Valuation",
                "scoreValue": 2,
                "scoreTotal": 100,
                "rankValue": 2,
                "rankTotalAssets": 100
              }
            ]
          },
          "children": []
        },
        "notice-actions": {
          "type": "NotificationButtonList",
          "props": {
            "actions": [
              {
                "actionType": "dislike",
                "label": "No Action Yet"
              },
              {
                "actionType": "detail",
                "label": "View Full Report",
                "href": "https://example.com/asset/TSM"
              },
              {
                "actionType": "askEd",
                "label": "Ask Ed",
                "question": "Given the current score and valuation, suggest a step-by-step action plan."
              }
            ]
          },
          "children": []
        }
      }
    }
  }
];

export function getSpecGroups() {
  return groups;
}
