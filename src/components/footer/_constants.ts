type FooterNav = {
  title: string
  link?: string
}
const mainPageLinks: FooterNav[] = [
  {
    title: "About Company",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Why Reperion?",
    link: "/#whyReperion",
  },
  {
    title: "Partners",
    link: "/#partners",
  },
  {
    title: "Products",
    link: "/#products",
  },
  {
    title: "Team",
    link: "/#team",
  },
  {
    title: "Resources",
    link: "/#resources",
  },
]

const products: FooterNav[] = [
  {
    title: "Products",
  },
  {
    title: "Cybersecurity",
    link: "products/#cybersecurity",
  },
  {
    title: "Counter-Drone",
    link: "products/#counter-drone",
  },
]

const resources: FooterNav[] = [
  {
    title: "Resources",
  },
  {
    title: "Medium Blog",
    link: "resources/#medium-blog",
  },
  {
    title: "Academic Publications",
    link: "resources/#academic-publications",
  },
  {
    title: "Events",
    link: "resources/#events",
  },
  {
    title: "Articles",
    link: "resources/#articles",
  },
]
export { mainPageLinks, products, resources }
