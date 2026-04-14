---
name: dynamic-push-ui-json-render
description: Generate or revise JSON Render push-notification UI specs by scenario. Use when mapping natural-language requests or business data into card-based UI payloads (Trending Stocks, Weekly Pick, Watchlist Comparison, Earnings Update, Rank Movement, Technical Signal), when producing valid `root/elements` renderer structures, or when validating and repairing payloads against component JSON Schemas.
---

# Dynamic Push UI JSON Render

## Overview
Convert scenario intent and business data into render-ready JSON Render `spec` objects. Reuse existing demo components and keep a stable `NotificationCardContainer`-based card structure.

## Workflow
1. Identify the scenario and select the matching reference file from `Scenario Routing`.
2. Apply the scene skeleton from `references/scenarios/*.md`.
3. Fill component props using only schema-approved fields.
4. Run consistency checks against `Syntax`, `Rules`, `Validation Order`, and `references/schemas/*.json`.
5. Output one final JSON object without additional explanation text.

## Syntax
Always use this top-level shape:

```json
{
  "root": "container",
  "elements": {
    "container": {
      "type": "NotificationCardContainer",
      "props": { "noticeTitle": "..." },
      "children": ["notice-text", "core-module", "notice-actions"]
    },
    "notice-text": {
      "type": "NotificationText",
      "props": { "text": "..." },
      "children": []
    },
    "core-module": {
      "type": "<scene-component>",
      "props": {},
      "children": []
    },
    "notice-actions": {
      "type": "NotificationButtonList",
      "props": { "actions": [] },
      "children": []
    }
  }
}
```

## Rules
- Point `root` to an existing key inside `elements`.
- Include `type`, `props`, and `children` for every element.
- Set `children` to `[]` for leaf nodes.
- Use kebab-case element keys such as `notice-actions` and `key-stats-strip`.
- Keep element keys semantic; avoid meaningless IDs such as `a1` or `x2`.
- Keep child order stable: narrative text first, business module in the middle, actions at the bottom.
- Use `NotificationCardContainer` for the container node.
- Use `NotificationText` for `notice-text`.
- Use `NotificationButtonList` for `notice-actions`.
- Provide `AssetHeader.assetScoreValue` and `assetScoreTotal` together, or omit both.
- Keep `MultiAssetDimensionScoreComparisonTable.dimensions[].dimensionKey` aligned with every asset's `dimensionScores[].dimensionKey`.
- Restrict `AssetDataGridTable.tableRows[].cells[].columnKey` to keys declared in `tableColumns[].columnKey`.
- Keep `AssetDimensionRankChangeTable.rows[].rankChange` as an integer: positive means improvement, negative means decline.
- Provide at least 2 action types in `NotificationButtonList.actions` from `dislike`, `detail`, `askEd` (3 is recommended).
- Restrict `NotificationButtonList.actions[].actionType` to `dislike`, `detail`, or `askEd`.
- Prefer including `href` for `detail` actions and `question` for `askEd` actions.

## Validation Order
1. Validate top-level `root/elements` structure.
2. Validate that every key referenced in `children` exists.
3. Validate props by matching component types to `references/schemas/*.json`.
4. Validate cross-field constraints (paired score fields, aligned dimension keys, etc.).

## Scenario Routing
- `Trending Stocks`: `references/scenarios/trending-stocks.md`
- `Weekly Pick / Health Check (single-asset scoring)`: `references/scenarios/weekly-pick-score.md`
- `Watchlist Comparison (multi-asset comparison)`: `references/scenarios/watchlist-comparison.md`
- `Earnings Update (stats strip + data grid)`: `references/scenarios/earnings-grid.md`
- `Earnings Update (narrative highlights)`: `references/scenarios/earnings-highlights.md`
- `Rating Rank Movement`: `references/scenarios/rank-movement.md`
- `Technical Signal Update`: `references/scenarios/technical-signal-rating-change.md`
- `Hybrid Deep Dive (score header + comparison + single-asset table)`: `references/scenarios/pick-hybrid.md`

## Scenario Docs
Read only the scenario file you need:

- [trending-stocks.md](references/scenarios/trending-stocks.md)
- [weekly-pick-score.md](references/scenarios/weekly-pick-score.md)
- [watchlist-comparison.md](references/scenarios/watchlist-comparison.md)
- [earnings-grid.md](references/scenarios/earnings-grid.md)
- [earnings-highlights.md](references/scenarios/earnings-highlights.md)
- [rank-movement.md](references/scenarios/rank-movement.md)
- [technical-signal-rating-change.md](references/scenarios/technical-signal-rating-change.md)
- [pick-hybrid.md](references/scenarios/pick-hybrid.md)

## Schema Resources
Use these schemas as the final source of truth:

- `references/schemas/NotificationCardContainer.schema.json`
- `references/schemas/NotificationText.schema.json`
- `references/schemas/NotificationButtonList.schema.json`
- `references/schemas/AssetRecommendationList.schema.json`
- `references/schemas/AssetHeader.schema.json`
- `references/schemas/AssetDimensionScoreTable.schema.json`
- `references/schemas/MultiAssetDimensionScoreComparisonTable.schema.json`
- `references/schemas/AssetKeyStatsStrip.schema.json`
- `references/schemas/AssetDataGridTable.schema.json`
- `references/schemas/AssetNarrativeHighlightsList.schema.json`
- `references/schemas/AssetDimensionRankChangeTable.schema.json`
- `references/schemas/AssetRatingChangeComparisonList.schema.json`

## Output Contract
- Output valid parseable JSON only.
- Do not output fields outside schema definitions.
- If input data is incomplete, prefer a structurally complete minimal renderable spec.
