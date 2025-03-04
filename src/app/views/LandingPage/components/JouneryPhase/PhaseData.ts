import { StaticImageData } from "next/image";
import phase from "../../../../assets/images/phase1.png";
import phase2 from "../../../../assets/images/phase2.png";
import phase3 from "../../../../assets/images/phase3.png";
import phase4 from "../../../../assets/images/phase4.png";
import phase5 from "../../../../assets/images/phase5.png";
export interface IPhaseData {
  heading: string;
  description:string[];
  img: StaticImageData;
}
export const PhaseData: IPhaseData[] = [
  {
    img: phase,
    heading: "Launch",

    description: [
      "Telegram AI Chatbot Development",
      "Blockchain-Based User Logging",
      "IPFS Data Storage Integration",
    ],
  },
  {
    img: phase2,
    heading: "Expansion",
    description: [
      "SMS Notification System",
      "Real-Time Alerts",
      "Transaction Updates",
    ],
  },
  {
    img: phase3,
    heading: "Token Launch",
    description: [
      "$OMNI Token Deployment",
      "WalletConnect Integration",
      "Token Utility Implementation",
    ],
  },

  {
    img: phase4,
    heading: "Payments",
    description: [
      "Multi-Gateway Integration",
      "Subscription System",
      "Token Payment Processing",
    ],
  },
  {
    img: phase5,
    heading: "Developer Tools",
    description: [
      " SDK Release",
      "API Documentation",
      "Third-Party Integration Tools",
    ],
  },
];
