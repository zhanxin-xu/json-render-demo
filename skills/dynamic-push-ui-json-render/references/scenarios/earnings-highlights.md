# Earnings Highlights

## Scenario Description
Summarize earnings insights as concise narrative bullet points instead of a numeric grid.

## Components
- `NotificationCardContainer`
- `NotificationText`
- `AssetHeader`
- `AssetNarrativeHighlightsList`
- `NotificationButtonList`

## Schema Paths
- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetNarrativeHighlightsList.schema.json`
- `references/schemas/NotificationButtonList.schema.json`

## Example Spec
### Example: `earnings-highlights-v1`
```json
{
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
            "type": "negative",
            "attributes": {
              "label": "Skip Highlights"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "View Call Notes",
              "link": "https://example.com/management-call/nvda"
            }
          },
          {
            "type": "positive",
            "attributes": {
              "label": "Ask Ed",
              "link": "ask-ed:From the management call, what guidance matters most for next quarter?"
            }
          }
        ]
      },
      "children": []
    }
  }
}
```

## Rules
- Recommend 2-5 items in `items`.
- Keep `title` concise and keep `description` explanatory.
