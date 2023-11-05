type FooterNav = {
  title: string
  link?: string | object
}
const mainPageLinks: FooterNav[] = [
  {
    title: "About Company",
  },
  {
    title: "About Us",
    link: "/#what-we-do",
  },
  {
    title: "Why Reperion?",
    link: "/#why-reperion",
  },
  {
    title: "Partners",
    link: "/#partners",
  },
  {
    title: "Products",
    link: "/#our-products",
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
    link: "/cybersecurity",
  },
  {
    title: "Counter-Drone",
    link: "/counter-drone",
  },
]

const resources: FooterNav[] = [
  {
    title: "Resources",
  },
  {
    title: "Medium Blog",
    link: { pathname: "resources", query: { category: 1 } },
  },
  {
    title: "Academic Publications",
    link: { pathname: "resources", query: { category: 2 } },
  },
  {
    title: "Events",
    link: { pathname: "resources", query: { category: 3 } },
  },
  {
    title: "Articles",
    link: { pathname: "resources", query: { category: 4 } },
  },
]

const emailPattern: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export { emailPattern, mainPageLinks, products, resources }
