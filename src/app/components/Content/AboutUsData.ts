export interface IAboutUsData {
  heading: string;
  description: string | string[];
  img: StaticImageData;
}
export interface IFutureData {
  heading: string;
  description: string[];
    img: StaticImageData;
    right?:boolean
}
import { StaticImageData } from 'next/image'
import img from '../../assets/images/about1.png'
import img2 from "../../assets/images/about2.png";
import img3 from "../../assets/images/about3.png";
import img4 from "../../assets/images/about4.png";
import adv from "../../assets/images/adv1.png";
import adv2 from "../../assets/images/adv2.png";
import adv3 from "../../assets/images/adv3.png";
import adv4 from "../../assets/images/adv4.png";
import future from "../../assets/images/ai-intregration.svg";
import future2 from "../../assets/images/grade-security.svg";
import future3 from "../../assets/images/blockchain-powered.svg";
export const AboutUsData: IAboutUsData[] = [
  {
    img: img,
    heading: "Manual & Fragmented Support",
   
    description:
      "Traditional systems are labor-intensive, riddled with manual workflows, and scattered across multiple channels, creating delays and inconsistent customer experiences.",
  },
  {
    img: img2,
    heading: "No Predictive Intelligence",
    description:
      "Businesses struggle without AI-driven tools to automate FAQs, deliver personalized interactions, and provide effective multi-language support for global audiences.",
  },
  {
    img: img3,
    heading: "Vulnerable Data Systems",
    description:
      "Centralized support systems are susceptible to data breaches and unauthorized access, lacking transparency in managing sensitive customer information.",
  },

  {
    img: img4,
    heading: "One-Size-Fits-None",
    description:
      "Current platforms offer minimal customization for business-specific needs and lack seamless integration with existing tools and performance analytics.",
  },
];
export const AdvantagesData: IAboutUsData[] = [
  {
    img: adv,
    heading: "Intelligent Multi-Channel Support",

    description: [
      "AI-powered chatbots and voice assistants",
      "Natural Language Processing for multiple languages",
      "Pre-configured AI-driven FAQ system",
      "Real-time response automation",
    ],
  },
  {
    img: adv2,
    heading: "Secure & Transparent",
    description: [
      "Tamper-proof data storage",
      "Automated blockchain workflows",
      "Secure payment processing",
      "Transparent transaction records",
    ],
  },
  {
    img: adv3,
    heading: "Tailored to Your Business",
    description: [
      "Custom business dashboards",
      "Actionable analytics",
      "Web SDK integration",
      "Branded experience",
    ],
  },

  {
    img: adv4,
    heading: "Token-Powered Features",
    description: [
      "Access premium capabilities",
      "Governance participation",
      "Incentivized engagement",
      "Revenue sharing opportunities",
    ],
  },
];
export const FutureData: IFutureData[] = [
  {
    img: future,
    heading: "Intelligent Multi-Channel Support",

    description: [
      "AI-powered chatbots and voice assistants",
      "Natural Language Processing for multiple languages",
      "Pre-configured AI-driven FAQ system",
      "Real-time response automation",
    ],
  },
  {
    img: future2,
    heading: "Secure & Transparent",
    description: [
      "Tamper-proof data storage",
      "Automated blockchain workflows",
      "Secure payment processing",
      "Transparent transaction records",
    ],
    right: true,
  },
  {
    img: future3,
    heading: "Tailored to Your Business",
    description: [
      "Access premium capabilities",
      "Governance participation",
      "Incentivized engagement",
      "Revenue sharing opportunities",
    ],
  },
];