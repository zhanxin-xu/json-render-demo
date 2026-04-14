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
```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "label": "Ed's Picks for You", "title": "Earnings Update" },
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

## Rules
- Recommend 2-5 items in `items`.
- Keep `title` concise and keep `description` explanatory.
