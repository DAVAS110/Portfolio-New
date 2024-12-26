import Experian from "../img/Project/Experian.webp";
import AquaSync from "../img/Project/AquaSync.webp";
import Enova from "../img/Project/Enova.webp";
import Nexus from "../img/Project/Nexus.webp";

import Html from '../components/svg/html.svg'
import SvgReact from '../components/svg/react.svg'
import Figma from '../components/svg/figma.svg'
import Astro from '../components/svg/astro.svg'
import Python from '../components/svg/python.svg'
import Postman from '../components/svg/postman.svg'
import Tailwind from '../components/svg/tailwindcss.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { NavItem, Project, Tech } from '../types.ts';

export const projectsData: Project[] = [
  {
    name: "Leavers Offboarding",
    description:
      "The project involved automating the company’s offboarding process using the ServiceNow API in Automation anywhere.",
    img: Experian.src,
    href: "/leavers-offboarding",
    color: "#6c207a",
    index: 1,
  },
  {
    name: "Enova",
    description:
      "Mobile App focus on recycling detection for classification recycling materials.",
    img: Enova.src,
    href: "/enova",
    color: "#851b7e",
    index: 2,
  },
  {
    name: "AquaSync",
    description:
      "National Eaton Competition Web site to control and monitor PLC status.",
    img: AquaSync.src,
    href: "/aquasync",
    color: "#157CC4",
    index: 3,
  },
  {
    name: "Nexus",
    description: "Website for F1 in School Competition Costa Rica.",
    img: Nexus.src,
    href: "/nexus",
    color: "#CC0000",
    index: 4,
  },
];

export const navData: NavItem[] = [
  {
    name: "Home",
    id: "#home",
    index: 1,
  },
  {
    name: "About us",
    id: "#aboutUs",
    index: 2,
  },
  {
    name: "Projects",
    id: "#projects",
    index: 3,
  }
]

export const aboutMeTechData: Tech[] = [
  {
    name: "React",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 1,
  },
  {
    name: "Html",
    svg: Html.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 2,
  },
  {
    name: "React Native",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 3,
  },
  {
    name: "Postman",
    svg: Postman.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 4,
  },
  {
    name: "Tailwindcss",
    svg: Tailwind.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 5,
  },
  {
    name: "Automation Anywhere 360",
    svg: null,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 6,
  },
  {
    name: "Python",
    svg: Python.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 7,
  },
  {
    name: "Astro",
    svg: Astro.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 8,
  },
  {
    name: "Figma",
    svg: Figma.src,
    bgColor: "#f8fafc",
    textColor: "#000",
    index: 9,
  },
  {
    name: "JavaScript",
    svg: JavaScript.src,
    bgColor: "#665e24",
    textColor: "#fff",
    index: 10,
  },
]