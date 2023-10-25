import air from "../../../../../public/what-we-do-air-image.jpg"
import land from "../../../../../public/what-we-do-land-image.jpg"
import sea from "../../../../../public/what-we-do-sea-image.jpg"

import { CardOptions, FieldImages, Fields } from "./_types"

const cardOptions: CardOptions[] = [
  {
    direction: "Direction #1",
    title: "Cyber",
    description: "More advanced technology than IT or fixed asset OT cybersecurity",
    background: "bg-cyber sm:bg-cyber-mobile",
  },
  {
    direction: "Direction #2",
    title: "Counter-Drone",
    description: "Affordable Military Level Counter-Drone Capabilities",
    background: "bg-counter-drone sm:bg-counter-drone-mobile",
  },
]

const cyberOptions: Fields[] = [
  { title: "Sea", text: "Securing Maritime Infrastructure", styles: "peer/sea", link: "/cybersecurity" },
  { title: "Land", text: "Vehicular Protection", styles: "peer/land", link: "/cybersecurity" },
  { title: "Air", text: "Cybersecurity for technology in the sky", styles: "peer/air", link: "/cybersecurity" },
]

const counterDroneOptions: Fields[] = [
  {
    title: "Sea",
    text: "Protecting maritime infrastructure against drone threats",
    styles: "peer/sea",
    link: "/counter-drone",
  },
  { title: "Land", text: "Drone protection for land-based assets.", styles: "peer/land", link: "/counter-drone" },
  { title: "Air", text: "Cybersecurity for technology in the sky", styles: "peer/air", link: "/counter-drone" },
]

const fieldImages: FieldImages[] = [
  { title: "Sea", image: sea, styles: "peer-hover/sea:visible peer-hover/sea:opacity-100" },
  { title: "Land", image: land, styles: "peer-hover/land:visible peer-hover/land:opacity-100" },
  { title: "Air", image: air, styles: "peer-hover/air:visible peer-hover/air:opacity-100" },
]

export { cardOptions, counterDroneOptions, cyberOptions, fieldImages }
