import { Drone, Eye, Microscheme } from "@/icons"

import { ProductOptions } from "../_types"

export const counterDroneOptions: ProductOptions[] = [
  {
    title: "Sea",
    subtitle: "Protecting maritime infrastructure against drone threats",
    description:
      "Maritime assets, whether fixed or mobile, are vulnerable to drone attacks, especially when situated offshore far away from land-based counter-measures and support. Our products prevent drone attacks against maritime assets, by identifying intruder drones and, where permitted, by neutralising them as well.",
    childrenTabs: [
      {
        tabTitle: "Vessels",
        tabImage: ["/cybersecurity-sea-vessels.jpg", "/cybersecurity-sea-vessels-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Detect intruder drones that could be in an asset's airspace for espionage, surveillance or attack. Reperion's technology can handle drone swarms.",
          },
          {
            icon: <Eye />,
            contentTitle: "C-UAS Non-Destructive Neutralisation",
            contentDescription:
              "Regulatory environment permitting eliminate drone threats against vessels or facilities to protect people, assets, and the environment.",
          },
        ],
      },
      {
        tabTitle: "Offshore Structures",
        tabImage: ["/cybersecurity-sea-offshore-structure.jpg", "/cybersecurity-sea-offshore-structure-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Protect sensitive facilities against corporate espionage, surveillance, or attacks. Reperion's technology can handle drone swarms.",
          },
          {
            icon: <Eye />,
            contentTitle: "C-UAS Non-Destructive Neutralisation",
            contentDescription:
              "Regulatory environment permitting eliminate drone threats against vessels or facilities to protect people, assets, and the environment.",
          },
        ],
      },
      {
        tabTitle: "Ports",
        tabImage: ["/cybersecurity-sea-ports.jpg", "/cybersecurity-sea-ports-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone detection",
            contentDescription:
              "With the increasing use of drones for shore-vessel logistics, it is important to distinguish between white listed and intruder drones as a feature of any UTM system",
          },
        ],
      },
    ],
  },
  {
    title: "Land",
    subtitle: "Drone protection for land-based assets",
    description:
      "Drones pose a significant threat to land-based assets, as they can easily be used for corporate espionage, surveillance, or physical attacks on sensitive infrastructure. Our products protect critical infrastructure and other facilities that require a secure perimeter.",
    childrenTabs: [
      {
        tabTitle: "Industrial Facilities",
        tabImage: [
          "/counter-drone-land-industrial-facilities.jpg",
          "/counter-drone-land-industrial-facilities-tablet.jpg",
        ],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Protect sensitive facilities against corporate espionage, surveillance, or attacks. Reperion's technology can handle drone swarms.",
          },
        ],
      },
      {
        tabTitle: "Borders",
        tabImage: ["/counter-drone-land-borders.jpg", "/counter-drone-land-borders-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Protect borders and other government-controlled space from contraband activities, espionage, and unauthorized surveillance activities.",
          },
          {
            icon: <Microscheme />,
            contentTitle: "C-UAS Neutralisation product",
            contentDescription:
              "Regulatory environment permitting eliminate drone threats against vessels or facilities to protect people, assets, and the environment.",
          },
        ],
      },
      {
        tabTitle: "Cities",
        tabImage: ["/counter-drone-land-cities.jpg", "counter-drone-land-cities-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Protect airspaces near sensitive buildings or structures and high-density urban locations where a successful attack could harm bystanders",
          },
        ],
      },
    ],
  },
  {
    title: "Controlled Airspace",
    description:
      "Our technology can secure a controlled airspace to prevent both intrusions and attacks that could disrupt other aerial vehicles.",
    childrenTabs: [
      {
        tabImage: ["/counter-drone-air-controlled-airspace.jpg", "/counter-drone-air-controlled-airspace-tablet.jpg"],
        tabContent: [
          {
            icon: <Drone />,
            contentTitle: "Drone Detection",
            contentDescription:
              "Identifying drone threats before they can interrupt planes landing and taking off from airports.",
          },
        ],
      },
    ],
  },
]
