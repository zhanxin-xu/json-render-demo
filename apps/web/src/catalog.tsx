import { defineCatalog } from "@json-render/core";
import { defineRegistry } from "@json-render/react";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

const baseFontFamily = '"General Sans", "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const buttonFontFamily = '"Bricolage Grotesque", "General Sans", "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const accentColor = "#2d6b4f";

const assetRecommendationListItemSchema = z
  .object({
    assetLogo: z.string().optional().describe("Optional logo URL for the asset."),
    assetSymbol: z.string().describe("Ticker symbol of the asset."),
    assetPriceUsd: z.string().describe("Current asset price in USD as formatted text."),
    priceChange24h: z.string().describe("24-hour price change as formatted text."),
    reason: z.string().describe("Short recommendation reason shown below the symbol row."),
    assetScoreValue: z.number().describe("Current asset score value."),
    assetScoreTotal: z.number().describe("Maximum score denominator.")
  })
  .describe("One asset item rendered in the recommendation list.");

const assetDimensionTableRowSchema = z
  .object({
    dimensionName: z.string().describe("Display name of the scoring dimension."),
    scoreValue: z.number().describe("Score value for the dimension."),
    scoreTotal: z.number().describe("Score denominator for the dimension."),
    rankValue: z.number().describe("Current rank position."),
    rankTotalAssets: z.number().describe("Total number of ranked assets.")
  })
  .describe("One row in the single-asset dimension score table.");

const dimensionDefinitionSchema = z
  .object({
    dimensionKey: z.string().describe("Unique key used to match dimension scores."),
    dimensionName: z.string().describe("Human-readable label for the dimension.")
  })
  .describe("Definition of one dimension column.");

const dimensionScoreSchema = z
  .object({
    dimensionKey: z.string().describe("Dimension key that matches the dimension definition."),
    scoreValue: z.number().describe("Score value under this dimension."),
    scoreTotal: z.number().describe("Score denominator under this dimension."),
    rankValue: z.number().describe("Rank position under this dimension."),
    rankTotalAssets: z.number().describe("Total assets considered for ranking.")
  })
  .describe("Score and rank data for one dimension.");

const multiAssetDimensionItemSchema = z
  .object({
    assetLogo: z.string().optional().describe("Optional logo URL for the asset."),
    assetSymbol: z.string().describe("Ticker symbol of the compared asset."),
    assetName: z.string().describe("Full display name of the compared asset."),
    dimensionScores: z.array(dimensionScoreSchema).describe("Dimension score values keyed by dimensionKey.")
  })
  .describe("One asset entry in the multi-asset comparison table.");

const summaryMetricSchema = z
  .object({
    metricKey: z.string().describe("Stable key for the metric item."),
    metricName: z.string().describe("Metric label shown to users."),
    metricValue: z.string().describe("Main metric value text."),
    metricChange: z.string().describe("Change value text, usually positive or negative.")
  })
  .describe("One metric card in the key stats strip.");

const tableColumnSchema = z
  .object({
    columnKey: z.string().describe("Unique key for the table column."),
    columnTitle: z.string().describe("Header title for the table column.")
  })
  .describe("Definition of one data table column.");

const tableCellSchema = z
  .object({
    columnKey: z.string().describe("Column key that this cell belongs to."),
    cellValue: z.string().describe("Display value of the table cell.")
  })
  .describe("One cell value keyed by column.");

const tableRowSchema = z
  .object({
    rowKey: z.string().describe("Stable key for the row."),
    rowName: z.string().describe("Display name shown in the first column."),
    cells: z.array(tableCellSchema).describe("Cell values mapped by column keys."),
    resultTag: z.string().optional().describe("Optional badge text shown for row status."),
    rowChange: z.string().optional().describe("Optional change text associated with the row.")
  })
  .describe("One row in the generic data grid table.");

const highlightSchema = z
  .object({
    title: z.string().describe("Title of the narrative highlight."),
    description: z.string().describe("Supporting narrative text for the highlight.")
  })
  .describe("One narrative highlight item.");

const dimensionRankChangeSchema = z
  .object({
    dimensionKey: z.string().describe("Dimension key for row identity."),
    dimensionName: z.string().describe("Dimension name shown in the first column."),
    rankValue: z.number().describe("Current rank value."),
    rankTotalAssets: z.number().describe("Total assets used for ranking."),
    rankChange: z.number().describe("Rank delta compared with previous period.")
  })
  .describe("One row in the dimension rank change table.");

const ratingChangeSchema = z
  .object({
    assetLogo: z.string().optional().describe("Optional logo URL for the asset."),
    assetSymbol: z.string().describe("Ticker symbol of the rated asset."),
    fromRating: z.string().describe("Previous rating label."),
    toRating: z.string().describe("Updated rating label.")
  })
  .describe("One item in the rating change comparison list.");

const notificationButtonActionSchema = z
  .object({
    actionType: z.enum(["dislike", "detail", "askEd"]).describe("Action type used to decide behavior and default label."),
    label: z.string().optional().describe("Optional custom button label."),
    href: z.string().optional().describe("Optional target URL used by the detail action."),
    question: z.string().optional().describe("Optional preset question used by the askEd action."),
    variant: z.enum(["primary", "secondary"]).optional().describe("Optional visual style variant of the action button.")
  })
  .describe("One action button configuration in the notification footer.");

const notificationButtonListSchema = z
  .object({
    actions: z.array(notificationButtonActionSchema).describe("Ordered button actions rendered in the footer.")
  })
  .describe("Props for the notification button list component.");

const assetHeaderSchema = z
  .object({
    assetLogo: z.string().optional().describe("Optional logo URL of the asset."),
    assetSymbol: z.string().describe("Ticker symbol of the asset."),
    title: z.string().describe("Asset display title or company name."),
    assetScoreValue: z.number().optional().describe("Optional score numerator for score mode."),
    assetScoreTotal: z.number().optional().describe("Optional score denominator for score mode.")
  })
  .refine((props) => (props.assetScoreValue === undefined) === (props.assetScoreTotal === undefined), {
    message: "assetScoreValue and assetScoreTotal must both exist or both be omitted"
  })
  .describe("Header props supporting both score and non-score layouts.");

const keyStatsStripSchema = z
  .object({
    items: z.array(summaryMetricSchema).describe("Metric items displayed in the key stats strip.")
  })
  .describe("Props for the key stats strip component.");

const dataGridTableSchema = z
  .object({
    tableColumns: z.array(tableColumnSchema).describe("Column definitions for the data table."),
    tableRows: z.array(tableRowSchema).describe("Row entries for the data table."),
    firstColumnHeader: z.string().optional().describe("Optional header for the first fixed column."),
    badgeColumnKeys: z.array(z.string()).optional().describe("Column keys rendered as badge chips."),
    accentColumnKeys: z.array(z.string()).optional().describe("Column keys rendered with accent color emphasis.")
  })
  .describe("Props for the reusable data grid table.");

const narrativeHighlightsListSchema = z
  .object({
    items: z.array(highlightSchema).describe("Narrative highlight items shown in the list.")
  })
  .describe("Props for the narrative highlights list.");

const dimensionRankChangeTableSchema = z
  .object({
    rows: z.array(dimensionRankChangeSchema).describe("Rank change rows by dimension."),
    dimensionLabel: z.string().optional().describe("Optional header label for the dimension column."),
    rankLabel: z.string().optional().describe("Optional header label for the rank column."),
    changeLabel: z.string().optional().describe("Optional header label for the change column.")
  })
  .describe("Props for the dimension rank change table.");

const notificationCardContainerPropsSchema = z
  .object({
    label: z.string().describe("Small category label displayed above the card title."),
    title: z.string().describe("Main headline title displayed at the top of the notification card.")
  })
  .describe("Props for the notification card container.");

const notificationTextPropsSchema = z
  .object({
    text: z.string().describe("Body text content displayed inside the notification card.")
  })
  .describe("Props for the notification text component.");

const assetRecommendationListPropsSchema = z
  .object({
    sectionLabel: z.string().optional().describe("Optional section heading shown above the asset list."),
    assets: z.array(assetRecommendationListItemSchema).describe("Asset recommendation entries.")
  })
  .describe("Props for the asset recommendation list component.");

const assetDimensionScoreTablePropsSchema = z
  .object({
    sectionLabel: z.string().optional().describe("Optional section heading shown above the dimension rows."),
    rows: z.array(assetDimensionTableRowSchema).describe("Dimension rows for a single asset.")
  })
  .describe("Props for the single asset dimension score table.");

const multiAssetDimensionScoreComparisonTablePropsSchema = z
  .object({
    sectionLabel: z.string().optional().describe("Optional section heading shown above the comparison table."),
    dimensions: z.array(dimensionDefinitionSchema).describe("Dimension definitions used as table columns."),
    assets: z.array(multiAssetDimensionItemSchema).describe("Assets and their per-dimension scores.")
  })
  .describe("Props for the multi-asset dimension comparison table.");

const assetRatingChangeComparisonListPropsSchema = z
  .object({
    changes: z.array(ratingChangeSchema).describe("Rating change entries to compare old and new ratings.")
  })
  .describe("Props for the rating change comparison list.");

type AssetHeaderProps = {
  assetLogo?: string;
  assetSymbol: string;
  title: string;
  assetScoreValue?: number;
  assetScoreTotal?: number;
};

type NotificationButtonListProps = {
  actions: Array<{
    actionType: "dislike" | "detail" | "askEd";
    label?: string;
    href?: string;
    question?: string;
    variant?: "primary" | "secondary";
  }>;
};

type KeyStatsStripProps = {
  items: Array<{
    metricKey: string;
    metricName: string;
    metricValue: string;
    metricChange: string;
  }>;
};

type DataGridTableProps = {
  tableColumns: Array<{
    columnKey: string;
    columnTitle: string;
  }>;
  tableRows: Array<{
    rowKey: string;
    rowName: string;
    cells: Array<{
      columnKey: string;
      cellValue: string;
    }>;
  }>;
  firstColumnHeader?: string;
  badgeColumnKeys?: string[];
  accentColumnKeys?: string[];
};

type NarrativeHighlightsListProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

type DimensionRankChangeTableProps = {
  rows: Array<{
    dimensionKey: string;
    dimensionName: string;
    rankValue: number;
    rankTotalAssets: number;
    rankChange: number;
  }>;
  dimensionLabel?: string;
  rankLabel?: string;
  changeLabel?: string;
};

type AssetDimensionScoreTableProps = {
  sectionLabel?: string;
  rows: Array<{
    dimensionName: string;
    scoreValue: number;
    scoreTotal: number;
    rankValue: number;
    rankTotalAssets: number;
  }>;
};

type MultiAssetDimensionScoreComparisonTableProps = {
  sectionLabel?: string;
  dimensions: Array<{
    dimensionKey: string;
    dimensionName: string;
  }>;
  assets: Array<{
    assetLogo?: string;
    assetSymbol: string;
    assetName: string;
    dimensionScores: Array<{
      dimensionKey: string;
      scoreValue: number;
      scoreTotal: number;
      rankValue: number;
      rankTotalAssets: number;
    }>;
  }>;
};

const catalog = defineCatalog(schema, {
  components: {
    NotificationCardContainer: {
      description: "Notification card container mapped from Figma node 81033:18324",
      props: notificationCardContainerPropsSchema
    },
    NotificationText: {
      description: "Notification body text block rendered inside NotificationCardContainer",
      props: notificationTextPropsSchema
    },
    NotificationButtonList: {
      description: "Notification button list (dislike/detail/ask ED) rendered inside NotificationCardContainer",
      props: notificationButtonListSchema
    },
    AssetRecommendationList: {
      description: "Asset recommendation list mapped from Figma node 81033:18334",
      props: assetRecommendationListPropsSchema
    },
    AssetHeader: {
      description: "Unified asset header mapped from Figma nodes 81148:35902 (with score) and 81033:19293 (without score)",
      props: assetHeaderSchema
    },
    AssetDimensionScoreTable: {
      description: "Single asset score table mapped from Figma node 81148:35915",
      props: assetDimensionScoreTablePropsSchema
    },
    MultiAssetDimensionScoreComparisonTable: {
      description: "Multi-asset dimension score comparison table mapped from Figma node 81033:18607",
      props: multiAssetDimensionScoreComparisonTablePropsSchema
    },
    AssetKeyStatsStrip: {
      description: "Reusable key stats strip mapped from Figma node 81033:19200",
      props: keyStatsStripSchema
    },
    AssetDataGridTable: {
      description: "Reusable tabular data block mapped from Figma node 81033:19219",
      props: dataGridTableSchema
    },
    AssetNarrativeHighlightsList: {
      description: "Reusable narrative highlights list mapped from Figma node 81033:19297",
      props: narrativeHighlightsListSchema
    },
    AssetDimensionRankChangeTable: {
      description: "Reusable dimension rank change table mapped from Figma node 81174:35977",
      props: dimensionRankChangeTableSchema
    },
    AssetRatingChangeComparisonList: {
      description: "Rating change comparison list mapped from Figma node 81033:19165",
      props: assetRatingChangeComparisonListPropsSchema
    }
  },
  actions: {}
});

function renderAssetLogo(logo: string | undefined, symbol: string, size = 24) {
  if (logo) {
    return <img src={logo} alt={`${symbol} logo`} style={{ width: size, height: size, borderRadius: 999, objectFit: "cover" }} />;
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: accentColor,
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size >= 32 ? 12 : 11,
        fontWeight: 700
      }}
    >
      {symbol.slice(0, 2)}
    </div>
  );
}

function getPriceChangeColor(value: string) {
  const normalized = value.trim();
  if (normalized.startsWith("-")) {
    return "#e04f5f";
  }
  return "#15a46d";
}

function renderScoreBadge(score: number, total: number, label = "Score") {
  const safeTotal = total <= 0 ? 100 : total;
  const ratio = Math.max(0, Math.min(1, score / safeTotal));
  const degree = ratio * 360;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: `conic-gradient(${accentColor} ${degree}deg, rgba(10,10,10,0.18) ${degree}deg 360deg)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            background: "#f3f3f3",
            color: accentColor,
            fontSize: 15,
            lineHeight: "20px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {score}
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 10, lineHeight: "12px", color: "rgba(10,10,10,0.4)" }}>{label}</p>
    </div>
  );
}

function renderFooterButton(
  label: string,
  variant: "primary" | "secondary",
  options?: { href?: string; onClick?: () => void; title?: string }
) {
  const style = {
    minHeight: 28,
    minWidth: 80,
    boxSizing: "border-box" as const,
    borderRadius: 6,
    border: variant === "primary" ? `1px solid ${accentColor}` : "1px solid rgba(10,10,10,0.2)",
    background: variant === "primary" ? accentColor : "#fff",
    padding: "6px 8px",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 700,
    letterSpacing: 0,
    fontFamily: buttonFontFamily,
    color: variant === "primary" ? "#fff" : "#1f1f1f",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    whiteSpace: "nowrap" as const,
    textDecoration: "none",
    overflow: "hidden" as const,
    opacity: 1
  };

  const handleClick = () => {
    if (options?.href) {
      window.location.assign(options.href);
      return;
    }

    options?.onClick?.();
  };

  return (
    <button type="button" onClick={handleClick} title={options?.title} style={{ ...style, cursor: "pointer" }}>
      {label + " \u2192"}
    </button>
  );
}

function renderNotificationButtonList(props: NotificationButtonListProps) {
  const actions = props.actions.length
    ? props.actions
    : [
        { actionType: "dislike" as const },
        { actionType: "detail" as const },
        { actionType: "askEd" as const }
      ];

  const getDefaultLabel = (actionType: "dislike" | "detail" | "askEd") => {
    if (actionType === "detail") return "View Details";
    if (actionType === "askEd") return "Ask Ed";
    return "Dislike";
  };

  const getDefaultVariant = (actionType: "dislike" | "detail" | "askEd"): "primary" | "secondary" => {
    if (actionType === "askEd") return "primary";
    return "secondary";
  };

  const handleAskEd = (question: string | undefined) => {
    if (!question) return;
    window.dispatchEvent(
      new CustomEvent("ask-ed", {
        detail: {
          question
        }
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12
      }}
    >
      {actions.map((action, index) => {
        const actionType = action.actionType;
        const label = action.label ?? getDefaultLabel(actionType);
        const variant = action.variant ?? getDefaultVariant(actionType);
        const options: { href?: string; onClick?: () => void; title?: string } = {};

        if (actionType === "detail") {
          options.href = action.href;
        }

        if (actionType === "askEd") {
          options.onClick = () => handleAskEd(action.question);
          options.title = action.question;
        }

        return (
          <span key={`${actionType}-${index}`} style={{ display: "inline-flex" }}>
            {renderFooterButton(label, variant, options)}
          </span>
        );
      })}
    </div>
  );
}

function renderAssetHeader(props: AssetHeaderProps) {
  if (props.assetScoreValue !== undefined && props.assetScoreTotal !== undefined) {
    const scoreValue = props.assetScoreValue;
    const scoreTotal = props.assetScoreTotal;
    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          {renderAssetLogo(props.assetLogo, props.assetSymbol, 32)}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.assetSymbol}</p>
            <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.42)" }}>{props.title}</p>
          </div>
        </div>
        {renderScoreBadge(scoreValue, scoreTotal)}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {renderAssetLogo(props.assetLogo, props.assetSymbol, 20)}
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.assetSymbol}</p>
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.title}</p>
    </div>
  );
}

function renderKeyStatsStrip(props: KeyStatsStripProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.max(1, props.items.length)}, minmax(0, 1fr))`, gap: 12, borderRadius: 10, background: "rgba(10,10,10,0.04)", padding: "10px 12px" }}>
      {props.items.map((metric) => (
        <div key={metric.metricKey} style={{ padding: 0 }}>
          <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>{metric.metricName}</p>
          <p style={{ margin: "2px 0 0 0", fontSize: 16, lineHeight: "24px", fontWeight: 700 }}>{metric.metricValue}</p>
          <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: getPriceChangeColor(metric.metricChange), fontWeight: 600 }}>{metric.metricChange}</p>
        </div>
      ))}
    </div>
  );
}

function renderDataGridTable(props: DataGridTableProps) {
  const tableGridTemplateColumns = `minmax(110px,1.25fr) repeat(${props.tableColumns.length}, minmax(0, 1fr))`;
  const badgeKeys = new Set(props.badgeColumnKeys ?? []);
  const accentKeys = new Set(props.accentColumnKeys ?? []);

  return (
    <div style={{ border: "none", borderRadius: 0, overflow: "hidden" }}>
      <div style={{ minWidth: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: tableGridTemplateColumns,
            borderBottom: "1px solid rgba(10,10,10,0.08)"
          }}
        >
          <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.38)" }}>{props.firstColumnHeader ?? ""}</p>
          {props.tableColumns.map((column) => (
            <p key={column.columnKey} style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.38)", textAlign: "center" }}>
              {column.columnTitle}
            </p>
          ))}
        </div>
        {props.tableRows.map((row, index) => {
          const rowMap = new Map(row.cells.map((cell) => [cell.columnKey, cell.cellValue]));
          return (
            <div
              key={row.rowKey}
              style={{
                display: "grid",
                gridTemplateColumns: tableGridTemplateColumns,
                borderBottom: index === props.tableRows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
              }}
            >
              <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.72)" }}>{row.rowName}</p>
              {props.tableColumns.map((column) => {
                const value = rowMap.get(column.columnKey) ?? "-";

                if (badgeKeys.has(column.columnKey) && value !== "-") {
                  return (
                    <p key={`${row.rowKey}-${column.columnKey}`} style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", textAlign: "center" }}>
                      <span style={{ display: "inline-flex", padding: "1px 6px", borderRadius: 6, background: "rgba(45,107,79,0.2)", color: accentColor, fontSize: 12, lineHeight: "18px" }}>
                        {value}
                      </span>
                    </p>
                  );
                }

                return (
                  <p
                    key={`${row.rowKey}-${column.columnKey}`}
                    style={{
                      margin: 0,
                      padding: "12px 8px",
                      fontSize: 14,
                      lineHeight: "20px",
                      textAlign: "center",
                      color: accentKeys.has(column.columnKey) ? accentColor : "inherit",
                      fontWeight: accentKeys.has(column.columnKey) ? 700 : 600
                    }}
                  >
                    {value}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function renderNarrativeHighlightsList(props: NarrativeHighlightsListProps) {
  return (
    <div style={{ borderRadius: 8, background: "rgba(10,10,10,0.04)", padding: "10px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
      {props.items.map((highlight, index) => (
        <div key={`${highlight.title}-${index}`} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{highlight.title}</p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.68)" }}>{highlight.description}</p>
        </div>
      ))}
    </div>
  );
}

function renderDimensionRankChangeTable(props: DimensionRankChangeTableProps) {
  return (
    <div style={{ border: "1px solid rgba(10,10,10,0.08)", borderRadius: 8, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(120px,1.2fr) 1fr 1fr", borderBottom: "1px solid rgba(10,10,10,0.08)", background: "rgba(10,10,10,0.04)" }}>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>{props.dimensionLabel ?? "Dimension"}</p>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>{props.rankLabel ?? "Rank"}</p>
        <p style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>{props.changeLabel ?? "Change"}</p>
      </div>
      {props.rows.map((row, index) => (
        <div
          key={`${row.dimensionKey}-${index}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px,1.2fr) 1fr 1fr",
            borderBottom: index === props.rows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
          }}
        >
          <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.72)" }}>{row.dimensionName}</p>
          <p style={{ margin: 0, padding: "12px 8px", fontSize: 14, lineHeight: "20px", textAlign: "center" }}>
            {row.rankValue}/{row.rankTotalAssets}
          </p>
          <p
            style={{
              margin: 0,
              padding: "12px 8px",
              fontSize: 14,
              lineHeight: "20px",
              textAlign: "center",
              color: row.rankChange > 0 ? "#e04f5f" : row.rankChange < 0 ? "#15a46d" : "rgba(10,10,10,0.52)",
              fontWeight: 600
            }}
          >
            {row.rankChange > 0 ? `+${row.rankChange}` : row.rankChange}
          </p>
        </div>
      ))}
    </div>
  );
}

const { registry } = defineRegistry(catalog, {
  components: {
    NotificationText: ({ props }) => (
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 400, color: "rgba(10,10,10,0.8)" }}>{props.text}</p>
    ),

    NotificationCardContainer: ({ props, children }) => {
      const allChildren = Array.isArray(children) ? children : children ? [children] : [];
      const hasFooter = allChildren.length >= 2;
      const footerNode = hasFooter ? allChildren[allChildren.length - 1] : null;
      const contentNodes = hasFooter ? allChildren.slice(0, -1) : allChildren;
      const noticeTextNode = contentNodes.length ? contentNodes[0] : null;
      const coreNodes = contentNodes.length > 1 ? contentNodes.slice(1) : [];

      return (
        <section
          style={{
            borderRadius: 12,
            border: "1px solid rgba(10,10,10,0.1)",
            background: "#FEFDFC",
            color: "#0a0a0a",
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontFamily: baseFontFamily
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", fontWeight: 500, letterSpacing: "0.1px", color: "rgba(10,10,10,0.62)" }}>{props.label}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{props.title}</p>
                {noticeTextNode}
              </div>
              {coreNodes.length ? <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{coreNodes}</div> : null}
            </div>
          </div>
          {footerNode}
        </section>
      );
    },

    NotificationButtonList: ({ props }) => renderNotificationButtonList(props),

    AssetRecommendationList: ({ props }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {props.sectionLabel ? <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.sectionLabel}</p> : null}
        {props.assets.map((asset, index) => (
          <div key={`${asset.assetSymbol}-${index}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0, flex: "1 1 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {renderAssetLogo(asset.assetLogo, asset.assetSymbol)}
                <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", fontWeight: 600 }}>{asset.assetSymbol}</p>
                <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.6)" }}>{asset.assetPriceUsd}</p>
                <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: getPriceChangeColor(asset.priceChange24h), fontWeight: 600 }}>{asset.priceChange24h}</p>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.82)" }}>{asset.reason}</p>
            </div>
            {renderScoreBadge(asset.assetScoreValue, asset.assetScoreTotal)}
          </div>
        ))}
      </div>
    ),

    AssetHeader: ({ props }) => renderAssetHeader(props),

    AssetDimensionScoreTable: ({ props }: { props: AssetDimensionScoreTableProps }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {props.sectionLabel ? <p style={{ margin: "0 8px 2px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.sectionLabel}</p> : null}
        {props.rows.map((row, index) => {
          const isHighlighted = index === 0;
          return (
            <div key={`${row.dimensionName}-${index}`} style={{ padding: "0 8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 8px",
                  background: isHighlighted ? "rgba(10,10,10,0.04)" : "transparent",
                  borderRadius: isHighlighted ? 8 : 0,
                  borderBottom: isHighlighted || index === props.rows.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
                }}
              >
                <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{row.dimensionName}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: accentColor, fontWeight: 700 }}>{row.scoreValue}</p>
                  <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.4)", fontWeight: 500 }}>
                    {row.rankValue}/{row.rankTotalAssets}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),

    MultiAssetDimensionScoreComparisonTable: ({ props }: { props: MultiAssetDimensionScoreComparisonTableProps }) => {
      const gridTemplateColumns = `minmax(110px, 1.25fr) repeat(${props.dimensions.length}, minmax(0, 1fr))`;

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {props.sectionLabel ? <p style={{ margin: "0 8px 2px 8px", fontSize: 14, lineHeight: "20px", color: "rgba(10,10,10,0.62)" }}>{props.sectionLabel}</p> : null}
          <div style={{ border: "none", borderRadius: 0, overflow: "hidden" }}>
          <div style={{ minWidth: "auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns,
                background: "transparent",
                borderBottom: "1px solid rgba(10,10,10,0.08)"
              }}
            >
            <p style={{ margin: 0, padding: "8px 10px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)" }}>Asset</p>
            {props.dimensions.map((dimension) => (
              <p key={dimension.dimensionKey} style={{ margin: 0, padding: "8px", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textAlign: "center" }}>
                {dimension.dimensionName}
              </p>
            ))}
          </div>
          {props.assets.map((asset, index) => {
            const scoreMap = new Map(asset.dimensionScores.map((item) => [item.dimensionKey, item]));
            return (
              <div
                key={`${asset.assetSymbol}-${index}`}
                style={{
                  display: "grid",
                  gridTemplateColumns,
                  borderBottom: index === props.assets.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
                }}
              >
                <div style={{ padding: "12px 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  {renderAssetLogo(asset.assetLogo, asset.assetSymbol)}
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{asset.assetSymbol}</p>
                    <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.52)", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {asset.assetName}
                    </p>
                  </div>
                </div>
                {props.dimensions.map((dimension) => {
                  const score = scoreMap.get(dimension.dimensionKey);
                  return (
                    <div key={`${asset.assetSymbol}-${dimension.dimensionKey}`} style={{ padding: "12px 8px", textAlign: "center" }}>
                      {score ? (
                        <>
                          <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: accentColor, fontWeight: 700 }}>{score.scoreValue}</p>
                          <p style={{ margin: 0, fontSize: 10, lineHeight: "14px", color: "rgba(10,10,10,0.5)" }}>
                            {score.rankValue}/{score.rankTotalAssets}
                          </p>
                        </>
                      ) : (
                        <p style={{ margin: 0, fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.32)" }}>-</p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
        </div>
      );
    },

    AssetKeyStatsStrip: ({ props }) => renderKeyStatsStrip(props),

    AssetDataGridTable: ({ props }) => renderDataGridTable(props),

    AssetNarrativeHighlightsList: ({ props }) => renderNarrativeHighlightsList(props),

    AssetDimensionRankChangeTable: ({ props }) => renderDimensionRankChangeTable(props),

    AssetRatingChangeComparisonList: ({ props }) => (
      <div style={{ border: "1px solid rgba(10,10,10,0.08)", borderRadius: 8, overflow: "hidden" }}>
        {props.changes.map((change, index) => (
          <div
            key={`${change.assetSymbol}-${index}`}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(120px,1fr) 1fr 1fr",
              alignItems: "center",
              borderBottom: index === props.changes.length - 1 ? "none" : "1px solid rgba(10,10,10,0.08)"
            }}
          >
            <div style={{ padding: "12px 8px", display: "flex", alignItems: "center", gap: 8 }}>
              {renderAssetLogo(change.assetLogo, change.assetSymbol)}
              <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", fontWeight: 600 }}>{change.assetSymbol}</p>
            </div>
            <p style={{ margin: 0, padding: "12px 8px", textAlign: "center", fontSize: 12, lineHeight: "16px", color: "rgba(10,10,10,0.62)" }}>{change.fromRating}</p>
            <p style={{ margin: 0, padding: "12px 8px", textAlign: "center", fontSize: 12, lineHeight: "16px", color: accentColor, fontWeight: 700 }}>{change.toRating}</p>
          </div>
        ))}
      </div>
    )
  }
});

export { catalog, registry };
