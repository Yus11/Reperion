import { ReactElement } from "react"

import { AlertScreen, Eye, Microscheme, Statistic } from "@/icons"

type ProductContent = {
  title: string
  tabTitle: string
  items: { icon: ReactElement; itemTitle: string; itemDescription: string }[]
}
export const productionContent: ProductContent[] = [
  {
    title: "Advanced Technology to Protect IT and OT Systems.",
    tabTitle: "Cybersecurity",
    items: [
      {
        icon: <Eye className="h-[96px] w-[96px]" />,
        itemTitle: "Scanning Tools",
        itemDescription:
          "Scanning tools will vary by asset type and network configuration. Scan hardware components and devices for vulnerabilities using AI-driven technology and patching vulnerabilities wherever possible. Identify firmware vulnerabilities of connected devices. Scan ports on communication infrastructure and patch vulnerabilities wherever possible",
      },
      {
        icon: <Microscheme className="h-[96px] w-[96px]" />,
        itemTitle: "Firmware Management",
        itemDescription:
          "Protect hardware components of operational systems from attacks or unforced errors with firmware updates and patches when cyber vulnerabilities are identified",
      },
      {
        icon: <AlertScreen className="h-[96px] w-[96px]" />,
        itemTitle: "Intrusion Detection System (IDS)",
        itemDescription:
          "Detect anomalies and unauthorised connections on a mobile operating asset's network in order to identify threats and prevent attacks. Depending on the asset type and use case, the intrusion detection system may apply to both IT and OT systems.",
      },
      {
        icon: <Statistic className="h-[96px] w-[96px]" />,
        itemTitle: "Threat Intelligence",
        itemDescription:
          "Reperion is building the world's first cybersecurity platform for transportation assets across sea, land and air. The cross-pollination and correlation of threat data across these segments forms the basis for forensics and threat intelligence to identify and predict emerging threats.",
      },
    ],
  },
  {
    title: "Affordable Military Level Counter-Drone Capabilities",
    tabTitle: "Counter-Drone",
    items: [
      {
        icon: <Eye className="h-[96px] w-[96px]" />,
        itemTitle: "Drone Detection Tools",
        itemDescription:
          "A hardware/software complex to detect unauthorised and potentially malicious drones within a specified perimeter. Reperion uses a sensor fusion approach to detection which includes RF direction finding, electro-optical, and infrared to pinpoint both intruder drones and the operator locations, without any dependence on signal libraries.",
      },
      {
        icon: <Microscheme className="h-[96px] w-[96px]" />,
        itemTitle: "Drone Neutralization",
        itemDescription:
          "Drone neutralization prevents a drone from approaching an asset or controlled airspace using electronic warfare countermeasures including GPS spoofing and jamming. Long-range and short-range C-UAS non-destructive neutralization is implemented along with directed UAV landing. Neutralization is only available in permitted jurisdictions and areas.",
      },
    ],
  },
]
