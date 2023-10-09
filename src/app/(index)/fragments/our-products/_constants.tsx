import { ReactElement } from "react"

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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g clipPath="url(#clip0_1355_19575)">
              <path
                d="M13.4752 30.8879L13.4751 30.8879C5.805 38.6236 1.73452 46.3133 1.58026 46.6073L0.850184 48L1.58026 49.3927C1.73452 49.6867 5.805 57.3764 13.475 65.1123C18.0189 69.6952 22.8909 73.3471 27.9522 75.975C34.3809 79.3128 41.1241 81 48 81C54.8759 81 61.6191 79.3128 68.0478 75.9746L68.3934 76.6402L68.0478 75.9746C73.1091 73.3468 77.9811 69.695 82.525 65.1119L83.0576 65.64L82.525 65.1119C90.1932 57.3782 94.2636 49.6905 94.4198 49.3927C94.4198 49.3926 94.4199 49.3926 94.4199 49.3925L95.15 47.9998L94.42 46.6073L13.4752 30.8879ZM13.4752 30.8879C18.019 26.3048 22.8911 22.653 27.9524 20.0252L27.9524 20.0252M13.4752 30.8879L27.9524 20.0252M27.9524 20.0252C34.3809 16.6872 41.1241 15 48 15M27.9524 20.0252L48 15M48 15C54.8759 15 61.6191 16.6872 68.0478 20.025M48 15L68.0478 20.025M68.0478 20.025C73.1091 22.6529 77.9811 26.3048 82.525 30.8877M68.0478 20.025L82.525 30.8877M82.525 30.8877C90.1918 38.6202 94.2621 46.3066 94.4198 46.6069L82.525 30.8877ZM89.25 88.5V72.375H95.25V95.25H72.375V89.25H88.5H89.25V88.5ZM7.5 89.25H23.625V95.25H0.75V72.375H6.75V88.5V89.25H7.5ZM7.93129 47.6083L7.69175 47.9997L7.93121 48.3912C9.5151 50.9805 12.8996 56.0422 17.8828 61.0355C21.9622 65.1233 26.3143 68.3793 30.8217 70.704C36.3411 73.5507 42.1222 75 48 75C59.0983 75 68.1874 69.8537 74.9431 63.9863C81.6987 58.1191 86.175 51.4859 88.0687 48.3917L88.3083 48.0003L88.0688 47.6088C86.4849 45.0195 83.1004 39.9578 78.1172 34.9645C74.0378 30.8767 69.6857 27.6207 65.1783 25.296C59.6589 22.4493 53.8778 21 48 21C36.9017 21 27.8126 26.1463 21.0569 32.0137C14.3013 37.8809 9.82495 44.5141 7.93129 47.6083ZM88.5 6.75H72.375V0.75H95.25V23.625H89.25V7.5V6.75H88.5ZM6.75 7.5V23.625H0.75V0.75H23.625V6.75H7.5H6.75V7.5ZM48 66C38.0753 66 30 57.9245 30 48C30 38.0755 38.0753 30 48 30C57.9247 30 66 38.0755 66 48C66 57.9245 57.9247 66 48 66ZM48 36C41.3825 36 36 41.3825 36 48C36 54.6175 41.3825 60 48 60C54.6175 60 60 54.6175 60 48C60 41.3825 54.6175 36 48 36ZM45 51V45H51V51H45Z"
                stroke="#787878"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1355_19575">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        itemTitle: "Scanning Tools",
        itemDescription:
          "Scanning tools will vary by asset type and network configuration. Scan hardware components and devices for vulnerabilities using AI-driven technology and patching vulnerabilities wherever possible. Identify firmware vulnerabilities of connected devices. Scan ports on communication infrastructure and patch vulnerabilities wherever possible",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g clipPath="url(#clip0_1355_19577)">
              <path
                d="M36.7468 42.375H37.4968V41.625V36.7474C37.4968 31.0751 42.1957 26.4375 47.9968 26.4375C53.798 26.4375 58.4968 31.0751 58.4968 36.7474V41.625V42.375H59.2468H66.75V69.5625H29.25V42.375H36.7468ZM51.7468 42.375H52.4968V41.625V36.7474C52.4968 34.3339 50.4415 32.4375 47.9968 32.4375C45.5521 32.4375 43.4968 34.3339 43.4968 36.7474V41.625V42.375H44.2468H51.7468ZM60 63.5625H60.75V62.8125V49.125V48.375H60H36H35.25V49.125V62.8125V63.5625H36H60ZM84.5579 21.7624L84.5701 22.5H85.3078H95.25V28.5H85.3125H84.5625V29.25V36.75V37.5H85.3125H95.25V43.5H85.3125H84.5625V44.25V51.75V52.5H85.3125H95.25V58.5H85.3125H84.5625V59.25V66.75V67.5H85.3125H95.25V73.5H85.3078H84.5701L84.5579 74.2376C84.4647 79.8873 79.8873 84.4648 74.2376 84.5579L73.5 84.5701V85.3078V95.25H67.5V85.3125V84.5625H66.75H59.25H58.5V85.3125V95.25H52.5V85.3125V84.5625H51.75H44.25H43.5V85.3125V95.25H37.5V85.3125V84.5625H36.75H29.25H28.5V85.3125V95.25H22.5V85.3078V84.5701L21.7624 84.5579C16.1127 84.4647 11.5353 79.8873 11.4421 74.2376L11.4299 73.5H10.6922H0.75V67.5H10.6875H11.4375V66.75V59.25V58.5H10.6875H0.75V52.5H10.6875H11.4375V51.75V44.25V43.5H10.6875H0.75V37.5H10.6875H11.4375V36.75V29.25V28.5H10.6875H0.75V22.5H10.6922H11.4299L11.4421 21.7624C11.5353 16.1127 16.1127 11.5353 21.7624 11.4421L22.5 11.4299V10.6922V0.75H28.5V10.6875V11.4375H29.25H36.75H37.5V10.6875V0.75H43.5V10.6875V11.4375H44.25H51.75H52.5V10.6875V0.75H58.5V10.6875V11.4375H59.25H66.75H67.5V10.6875V0.75H73.5V10.6922V11.4299L74.2376 11.4421C79.8873 11.5353 84.4647 16.1127 84.5579 21.7624ZM74.0625 78.5625C76.5445 78.5625 78.5625 76.5445 78.5625 74.0625V21.9375C78.5625 19.4555 76.5445 17.4375 74.0625 17.4375H21.9375C19.4555 17.4375 17.4375 19.4555 17.4375 21.9375V74.0625C17.4375 76.5445 19.4555 78.5625 21.9375 78.5625H74.0625Z"
                stroke="#787878"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1355_19577">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        itemTitle: "Firmware Management",
        itemDescription:
          "Protect hardware components of operational systems from attacks or unforced errors with firmware updates and patches when cyber vulnerabilities are identified",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <path
              d="M63.8466 48.5759L63.3915 48.1208L62.8726 48.5016C58.806 51.4855 53.7936 53.25 48.375 53.25C34.8319 53.25 23.8125 42.2306 23.8125 28.6875C23.8125 15.1444 34.8319 4.125 48.375 4.125C61.9181 4.125 72.9375 15.1444 72.9375 28.6875C72.9375 34.1928 71.1174 39.2796 68.0462 43.3804L67.6566 43.9007L68.1162 44.3603L80.7225 56.9666L76.4799 61.2092L63.8466 48.5759ZM51 76.875V77.625V85.125V85.875H51.75H70.5V91.875H25.5V85.875H44.25H45V85.125V77.625V76.875H44.25H11.25C5.46096 76.875 0.75 72.164 0.75 66.375V21.375C0.75 15.586 5.46096 10.875 11.25 10.875H19.9418C18.7581 12.7578 17.756 14.766 16.9604 16.875H11.25C8.76804 16.875 6.75 18.893 6.75 21.375V66.375C6.75 68.857 8.76804 70.875 11.25 70.875H84.75C87.232 70.875 89.25 68.857 89.25 66.375V21.375C89.25 18.893 87.232 16.875 84.75 16.875H79.7896C78.9939 14.766 77.9918 12.7578 76.8082 10.875H84.75C90.539 10.875 95.25 15.586 95.25 21.375V66.375C95.25 72.164 90.539 76.875 84.75 76.875H51.75H51ZM66.9375 28.6875C66.9375 18.4515 58.611 10.125 48.375 10.125C38.139 10.125 29.8125 18.4515 29.8125 28.6875C29.8125 38.9235 38.139 47.25 48.375 47.25C58.611 47.25 66.9375 38.9235 66.9375 28.6875ZM45.375 28.3125V16.5H51.375V28.3125H45.375ZM45.375 40.875V34.875H51.375V40.875H45.375Z"
              stroke="#787878"
              strokeWidth="1.5"
            />
          </svg>
        ),
        itemTitle: "Intrusion Detection System (IDS)",
        itemDescription:
          "Detect anomalies and unauthorised connections on a mobile operating asset's network in order to identify threats and prevent attacks. Depending on the asset type and use case, the intrusion detection system may apply to both IT and OT systems.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g clipPath="url(#clip0_1355_19581)">
              <path
                d="M72.9891 17.9314L73.3077 17.5065L73.0128 17.0648C71.8998 15.3985 71.25 13.3997 71.25 11.25C71.25 5.46096 75.961 0.75 81.75 0.75C87.539 0.75 92.25 5.46096 92.25 11.25C92.25 17.039 87.539 21.75 81.75 21.75C80.656 21.75 79.6019 21.5814 78.6106 21.2701L78.1043 21.1111L77.7859 21.5357L68.0109 34.5686L67.6923 34.9935L67.9873 35.4352C69.1002 37.1015 69.75 39.1003 69.75 41.25C69.75 47.039 65.039 51.75 59.25 51.75C53.461 51.75 48.75 47.039 48.75 41.25C48.75 39.6305 49.1188 38.097 49.7756 36.727L50.0052 36.248L49.6296 35.8724L42.1276 28.3704L41.752 27.9948L41.273 28.2244C39.903 28.8812 38.3695 29.25 36.75 29.25C35.656 29.25 34.6018 29.0814 33.6106 28.7701L33.1043 28.6111L32.7859 29.0357L23.0109 42.0686L22.6923 42.4935L22.9873 42.9352C24.1002 44.6015 24.75 46.6003 24.75 48.75C24.75 54.539 20.039 59.25 14.25 59.25C8.46096 59.25 3.75 54.539 3.75 48.75C3.75 42.961 8.46096 38.25 14.25 38.25C15.344 38.25 16.3982 38.4186 17.3894 38.7299L17.8957 38.8889L18.2141 38.4643L27.9891 25.4314L28.3077 25.0065L28.0127 24.5648C26.8998 22.8985 26.25 20.8997 26.25 18.75C26.25 12.961 30.961 8.25 36.75 8.25C42.539 8.25 47.25 12.961 47.25 18.75C47.25 20.3697 46.8812 21.9029 46.2242 23.273L45.9946 23.752L46.3702 24.1276L53.8724 31.6298L54.248 32.0054L54.727 31.7758C56.0971 31.1188 57.6305 30.75 59.25 30.75C60.344 30.75 61.3982 30.9186 62.3894 31.2299L62.8957 31.3889L63.2141 30.9643L72.9891 17.9314ZM17.25 68.25V95.25H11.25V68.25H17.25ZM39.75 42V95.25H33.75V42H39.75ZM62.25 60.75V95.25H56.25V60.75H62.25ZM9.75 48.75C9.75 51.232 11.768 53.25 14.25 53.25C16.732 53.25 18.75 51.232 18.75 48.75C18.75 46.268 16.732 44.25 14.25 44.25C11.768 44.25 9.75 46.268 9.75 48.75ZM32.25 18.75C32.25 21.232 34.268 23.25 36.75 23.25C39.232 23.25 41.25 21.232 41.25 18.75C41.25 16.268 39.232 14.25 36.75 14.25C34.268 14.25 32.25 16.268 32.25 18.75ZM54.75 41.25C54.75 43.732 56.768 45.75 59.25 45.75C61.732 45.75 63.75 43.732 63.75 41.25C63.75 38.768 61.732 36.75 59.25 36.75C56.768 36.75 54.75 38.768 54.75 41.25ZM77.25 11.25C77.25 13.732 79.268 15.75 81.75 15.75C84.232 15.75 86.25 13.732 86.25 11.25C86.25 8.76804 84.232 6.75 81.75 6.75C79.268 6.75 77.25 8.76804 77.25 11.25ZM84.75 34.5V95.25H78.75V34.5H84.75Z"
                stroke="#787878"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1355_19581">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g clipPath="url(#clip0_1725_1608)">
              <path
                d="M13.4752 30.8879L13.4751 30.8879C5.805 38.6236 1.73452 46.3133 1.58026 46.6073L0.850184 48L1.58026 49.3927C1.73452 49.6867 5.805 57.3764 13.475 65.1123C18.0189 69.6952 22.8909 73.3471 27.9522 75.975C34.3809 79.3128 41.1241 81 48 81C54.8759 81 61.6191 79.3128 68.0478 75.9746L68.3934 76.6402L68.0478 75.9746C73.1091 73.3468 77.9811 69.695 82.525 65.1119L83.0576 65.64L82.525 65.1119C90.1932 57.3782 94.2636 49.6905 94.4198 49.3927C94.4198 49.3926 94.4199 49.3926 94.4199 49.3925L95.15 47.9998L94.42 46.6073L13.4752 30.8879ZM13.4752 30.8879C18.019 26.3048 22.8911 22.653 27.9524 20.0252L27.9524 20.0252M13.4752 30.8879L27.9524 20.0252M27.9524 20.0252C34.3809 16.6872 41.1241 15 48 15M27.9524 20.0252L48 15M48 15C54.8759 15 61.6191 16.6872 68.0478 20.025M48 15L68.0478 20.025M68.0478 20.025C73.1091 22.6529 77.9811 26.3048 82.525 30.8877M68.0478 20.025L82.525 30.8877M82.525 30.8877C90.1918 38.6202 94.2621 46.3066 94.4198 46.6069L82.525 30.8877ZM89.25 88.5V72.375H95.25V95.25H72.375V89.25H88.5H89.25V88.5ZM7.5 89.25H23.625V95.25H0.75V72.375H6.75V88.5V89.25H7.5ZM7.93129 47.6083L7.69175 47.9997L7.93121 48.3912C9.5151 50.9805 12.8996 56.0422 17.8828 61.0355C21.9622 65.1233 26.3143 68.3793 30.8217 70.704C36.3411 73.5507 42.1222 75 48 75C59.0983 75 68.1874 69.8537 74.9431 63.9863C81.6987 58.1191 86.175 51.4859 88.0687 48.3917L88.3083 48.0003L88.0688 47.6088C86.4849 45.0195 83.1004 39.9578 78.1172 34.9645C74.0378 30.8767 69.6857 27.6207 65.1783 25.296C59.6589 22.4493 53.8778 21 48 21C36.9017 21 27.8126 26.1463 21.0569 32.0137C14.3013 37.8809 9.82495 44.5141 7.93129 47.6083ZM88.5 6.75H72.375V0.75H95.25V23.625H89.25V7.5V6.75H88.5ZM6.75 7.5V23.625H0.75V0.75H23.625V6.75H7.5H6.75V7.5ZM48 66C38.0753 66 30 57.9245 30 48C30 38.0755 38.0753 30 48 30C57.9247 30 66 38.0755 66 48C66 57.9245 57.9247 66 48 66ZM48 36C41.3825 36 36 41.3825 36 48C36 54.6175 41.3825 60 48 60C54.6175 60 60 54.6175 60 48C60 41.3825 54.6175 36 48 36ZM45 51V45H51V51H45Z"
                stroke="#787878"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1725_1608">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        itemTitle: "Drone Detection Tools",
        itemDescription:
          "A hardware/software complex to detect unauthorised and potentially malicious drones within a specified perimeter. Reperion uses a sensor fusion approach to detection which includes RF direction finding, electro-optical, and infrared to pinpoint both intruder drones and the operator locations, without any dependence on signal libraries.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <g clipPath="url(#clip0_1725_1614)">
              <path
                d="M36.7468 42.375H37.4968V41.625V36.7474C37.4968 31.0751 42.1957 26.4375 47.9968 26.4375C53.798 26.4375 58.4968 31.0751 58.4968 36.7474V41.625V42.375H59.2468H66.75V69.5625H29.25V42.375H36.7468ZM51.7468 42.375H52.4968V41.625V36.7474C52.4968 34.3339 50.4415 32.4375 47.9968 32.4375C45.5521 32.4375 43.4968 34.3339 43.4968 36.7474V41.625V42.375H44.2468H51.7468ZM60 63.5625H60.75V62.8125V49.125V48.375H60H36H35.25V49.125V62.8125V63.5625H36H60ZM84.5579 21.7624L84.5701 22.5H85.3078H95.25V28.5H85.3125H84.5625V29.25V36.75V37.5H85.3125H95.25V43.5H85.3125H84.5625V44.25V51.75V52.5H85.3125H95.25V58.5H85.3125H84.5625V59.25V66.75V67.5H85.3125H95.25V73.5H85.3078H84.5701L84.5579 74.2376C84.4647 79.8873 79.8873 84.4648 74.2376 84.5579L73.5 84.5701V85.3078V95.25H67.5V85.3125V84.5625H66.75H59.25H58.5V85.3125V95.25H52.5V85.3125V84.5625H51.75H44.25H43.5V85.3125V95.25H37.5V85.3125V84.5625H36.75H29.25H28.5V85.3125V95.25H22.5V85.3078V84.5701L21.7624 84.5579C16.1127 84.4647 11.5353 79.8873 11.4421 74.2376L11.4299 73.5H10.6922H0.75V67.5H10.6875H11.4375V66.75V59.25V58.5H10.6875H0.75V52.5H10.6875H11.4375V51.75V44.25V43.5H10.6875H0.75V37.5H10.6875H11.4375V36.75V29.25V28.5H10.6875H0.75V22.5H10.6922H11.4299L11.4421 21.7624C11.5353 16.1127 16.1127 11.5353 21.7624 11.4421L22.5 11.4299V10.6922V0.75H28.5V10.6875V11.4375H29.25H36.75H37.5V10.6875V0.75H43.5V10.6875V11.4375H44.25H51.75H52.5V10.6875V0.75H58.5V10.6875V11.4375H59.25H66.75H67.5V10.6875V0.75H73.5V10.6922V11.4299L74.2376 11.4421C79.8873 11.5353 84.4647 16.1127 84.5579 21.7624ZM74.0625 78.5625C76.5445 78.5625 78.5625 76.5445 78.5625 74.0625V21.9375C78.5625 19.4555 76.5445 17.4375 74.0625 17.4375H21.9375C19.4555 17.4375 17.4375 19.4555 17.4375 21.9375V74.0625C17.4375 76.5445 19.4555 78.5625 21.9375 78.5625H74.0625Z"
                stroke="#787878"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1725_1614">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        itemTitle: "Drone Neutralization",
        itemDescription:
          "Drone neutralization prevents a drone from approaching an asset or controlled airspace using electronic warfare countermeasures including GPS spoofing and jamming. Long-range and short-range C-UAS non-destructive neutralization is implemented along with directed UAV landing. Neutralization is only available in permitted jurisdictions and areas.",
      },
    ],
  },
]
