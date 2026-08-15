export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  heading: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "product",
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    id: "company",
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    id: "resources",
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API reference", href: "#api" },
      { label: "Guides", href: "#guides" },
      { label: "Status", href: "#status" },
    ],
  },
  {
    id: "legal",
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "DPA", href: "#dpa" },
      { label: "Security", href: "#security" },
    ],
  },
];
