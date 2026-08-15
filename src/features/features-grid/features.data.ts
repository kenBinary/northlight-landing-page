export interface Feature {
  id: string;
  icon: "chart-line" | "funnel" | "users" | "bell" | "blocks" | "shield-check";
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    id: "live-dashboards",
    icon: "chart-line",
    title: "Live dashboards",
    description:
      "Metrics update as events arrive. Build a board once and watch it stay current without a scheduled refresh.",
  },
  {
    id: "funnel-analysis",
    icon: "funnel",
    title: "Funnel analysis",
    description:
      "Drop a funnel over any sequence of events and see which step is leaking users, broken down by segment.",
  },
  {
    id: "cohorts-that-stick",
    icon: "users",
    title: "Cohorts that stick",
    description:
      "Save any filter as a reusable cohort, then reuse it across every report your team builds.",
  },
  {
    id: "alerts-that-matter",
    icon: "bell",
    title: "Alerts that matter",
    description:
      "Set thresholds on any metric and hear about it in Slack before a regression becomes a support queue.",
  },
  {
    id: "connects-to-your-stack",
    icon: "blocks",
    title: "Connects to your stack",
    description:
      "Native integrations for the tools you already run, plus a REST API and webhooks for everything else.",
  },
  {
    id: "governed-by-default",
    icon: "shield-check",
    title: "Governed by default",
    description:
      "SSO, role-based access, audit logs and regional data residency come standard on every plan.",
  },
];
