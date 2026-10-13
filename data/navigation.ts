export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Product", href: "#product" },
  { label: "Preview", href: "#dashboard-video" },
  { label: "Architecture", href: "#architecture" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Modules", href: "#product-modules" },
  { label: "Status", href: "#pricing" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "Dashboard video", href: "#dashboard-video" },
      { label: "Architecture", href: "#architecture" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Platform modules", href: "#product-modules" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Phone orders", href: "#product-modules" },
      { label: "Refund complaints", href: "#product-modules" },
      { label: "Outbound sales", href: "#product-modules" },
      { label: "Customer support", href: "#product-modules" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Launch status", href: "#pricing" },
      { label: "LinkedIn", href: "https://linkedin.com/company/108078956/" },
      { label: "YouTube Demo", href: "https://youtu.be/iLz3c5lJIIw?si=PPCBiO3yXpusgOCd" },
      { label: "Email Support", href: "mailto:support@sonrat.com" },
    ],
  },
];
