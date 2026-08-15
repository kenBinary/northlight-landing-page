export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  perLabel: string;
  cta: string;
  ctaVariant: "primary" | "secondary";
  isFeatured: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For small teams getting their first dashboards up.",
    monthlyPrice: 29,
    annualPrice: 23,
    perLabel: "/month",
    cta: "Start free trial",
    ctaVariant: "secondary",
    isFeatured: false,
    features: [
      "Up to 100k events per month",
      "Unlimited dashboards and seats",
      "3 saved cohorts",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For product teams running weekly experiments.",
    monthlyPrice: 89,
    annualPrice: 71,
    perLabel: "/month",
    cta: "Start free trial",
    ctaVariant: "primary",
    isFeatured: true,
    features: [
      "Up to 1M events per month",
      "Everything in Starter",
      "Unlimited cohorts and funnels",
      "Slack and email alerts",
      "Priority support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description: "For organisations that need control and compliance.",
    monthlyPrice: 249,
    annualPrice: 199,
    perLabel: "/month",
    cta: "Talk to sales",
    ctaVariant: "secondary",
    isFeatured: false,
    features: [
      "Unlimited events",
      "Everything in Growth",
      "SSO and audit logs",
      "Regional data residency",
      "Dedicated success manager",
    ],
  },
];
