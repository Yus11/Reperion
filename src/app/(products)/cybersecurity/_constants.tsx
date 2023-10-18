import { AlertScreen, Communication, Crane, Eye, Loading, Microscheme, Shield, Statistic } from "@/icons"

import { ProductOptions } from "../_types"

export const cyberSecurityOptions: ProductOptions[] = [
  {
    title: "Sea",
    subtitle: "Securing Maritime Infrastructure",
    description:
      "An operationally resilient maritime industry is vital to global supply chains and local economies. Cyber attacks could provoke widespread disruption with grave safety implications. Our products and services improve the cybersecurity posture and operational resilience of vessels, ports, terminals, and offshore infrastructure.",
    childrenTabs: [
      {
        tabTitle: "Vessels",
        tabImage: ["/cybersecurity-sea-vessels.jpg", "/cybersecurity-sea-vessels-tablet.jpg"],
        tabContent: [
          {
            icon: <Eye />,
            contentTitle: "Scanner",
            contentDescription: "Identify vulnerabilities in Vessel Satellite Communication Infrastructure.",
          },
          {
            icon: <Microscheme />,
            contentTitle: "Firmware Scanner",
            contentDescription: "Ensure firmware of vessel operational components is up to date and cybersecure.",
          },
          {
            icon: <AlertScreen />,
            contentTitle: "IDS",
            contentDescription:
              "Protect vessels from threats and attacks by identifying anomalies in vessel IT/OT networks.",
          },
          {
            icon: <Statistic />,
            contentTitle: "Threat Intelligence",
            contentDescription: "Analyze hacker activity targeting vessels leveraging a system of honeypots and AI.",
          },
        ],
      },
      {
        tabTitle: "Offshore Structures",
        tabImage: ["/cybersecurity-sea-offshore-structure.jpg", "/cybersecurity-sea-offshore-structure-tablet.jpg"],
        tabContent: [
          {
            icon: <Eye />,
            contentTitle: "Scanner",
            contentDescription: "Identify vulnerabilities in Satellite Communication Infrastructure.",
          },
          {
            icon: <Microscheme />,
            contentTitle: "SIEM and Analytics Suite",
            contentDescription:
              "Power a Security Operations Center with a Management, Detection, and Response capability before threats crystallize into attacks",
          },
          {
            icon: <AlertScreen />,
            contentTitle: "IDS",
            contentDescription:
              "Monitor and analyze IT and OT networks of offshore structures to detect anomalies and potential threats",
          },
        ],
      },
      {
        tabTitle: "Ports",
        tabImage: ["/cybersecurity-sea-ports.jpg", "/cybersecurity-sea-ports-tablet.jpg"],
        tabContent: [
          {
            icon: <Eye />,
            contentTitle: "Vulnerability Scanner",
            contentDescription:
              "Ensure that any vessel entering a port does not introduce new cybersecurity risks to a port's networks through wi-fi connections.",
          },
          {
            icon: <AlertScreen />,
            contentTitle: "Vehicular IDS",
            contentDescription:
              "Protect straddle carriers, autonomous vehicles, and other vehicles from cyber threats and attacks.",
          },
          {
            icon: <Crane />,
            contentTitle: "Crane Protection",
            contentDescription:
              "Protect cranes from cyber threats and attacks. Our products can be connected to a Port’s overall cybersecurity platform.",
          },
          {
            icon: <Statistic />,
            contentTitle: "Maritime Threat intelligence",
            contentDescription: "Identify local and regional cybersecurity threats to vessels",
          },
        ],
      },
    ],
  },
  {
    title: "Land",
    subtitle: "Vehicular Protection",
    description:
      "Land-based vehicles are increasingly connected, creating a new dimension of risk for vehicle manufacturers, owners, and operators. From logistics vehicles in industrial settings to cars and e-scooters on city streets, cyberattacks could cause widespread disruption and fear and harm people and assets.",
    childrenTabs: [
      {
        tabTitle: "Cars",
        tabImage: ["/cybersecurity-land-cars.jpg", "/cybersecurity-land-cars-tablet.jpg"],
        tabContent: [
          {
            icon: <Shield />,
            contentTitle: "Aftermarket Cybersecurity Platform",
            contentDescription:
              "After market devices are a major attack vector for vehicles. Reperion's platform scans the vehicle to ensure that devices plugged into the vehicle are approved and certified by the OEM for cybersecure use.",
          },
          {
            icon: <Microscheme />,
            contentTitle: "Firmware Scanner",
            contentDescription:
              "Ensure that firmware within operating components of vehicles is up to date and cybersecure assembly line firmware scanning facilitates compliance with ISO/SAE 21434.",
          },
        ],
      },
      {
        tabTitle: "Motorbikes",
        tabImage: ["/cybersecurity-land-motorbikes.jpg", "/cybersecurity-land-motorbikes-tablet.jpg"],
        tabContent: [
          {
            icon: <Shield />,
            contentTitle: "Road safety",
            contentDescription:
              "Combining cybersecurity and road safety, to regulate rider behavior, increase asset life, and reduce need for emergency services",
          },
          {
            icon: <Communication />,
            contentTitle: "Communication Protection",
            contentDescription: "Cybersecurity for communication between motorbikes and city infrastructure.",
          },
        ],
      },
      {
        tabTitle: "E-Scooters",
        tabImage: ["/cybersecurity-land-e-scooters.jpg", "/cybersecurity-land-e-scooters-tablet.jpg"],
        tabContent: [
          {
            icon: <Shield />,
            contentTitle: "Road safety",
            contentDescription:
              "Combining cybersecurity and road safety, to regulate rider behavior in order to reduce the risk of accidents",
          },
          {
            icon: <Communication />,
            contentTitle: "Communication Protection",
            contentDescription:
              "Cybersecurity for communication/transactions between e-scooters and users/shared service corporate servers.",
          },
        ],
      },
    ],
  },
  {
    title: "Air",
    subtitle: "Cybersecurity for Technology in the Sky",
    description:
      "The consequences of a successful cyberattack on an airborne vehicle can often be more devastating than an attack on mobile operating assets at sea or on land. Our products prevent airborne assets from becoming targets or tools of cyberattacks.",
    childrenTabs: [
      {
        tabTitle: "VTOLS/Helicopters",
        tabImage: ["/cybersecurity-air-helicopters.jpg", "/cybersecurity-air-helicopters-tablet.jpg"],
        tabContent: [
          {
            icon: <AlertScreen />,
            contentTitle: "IDS",
            contentDescription:
              "Monitoring the network to prevent cyber interception mid-flight, protecting the pilot and other passengers onboard.",
          },
          {
            icon: <Loading />,
            contentTitle: "Coming in 2024",
            contentDescription: "",
          },
        ],
      },
      {
        tabTitle: "Drones",
        tabImage: ["/cybersecurity-air-drones.jpg", "/cybersecurity-air-drones-tablet.jpg"],
        tabContent: [
          {
            icon: <Loading />,
            contentTitle: "Coming in 2024",
            contentDescription: "",
          },
        ],
      },
    ],
  },
]
