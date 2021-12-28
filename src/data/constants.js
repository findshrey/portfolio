import IconEmail from "../icons/IconEmail"
import IconGithub from "../icons/IconGithub"
import IconLinkedIn from "../icons/IconLinkedIn"

const NAV_LINKS = [
   {
      name: "Home",
      url: "#home",
   },
   {
      name: "Projects",
      url: "#projects",
   },
   {
      name: "About",
      url: "#about",
   },
   {
      name: "Experience",
      url: "#experience",
   },
   {
      name: "Contact",
      url: "#contact",
   },
]

const EXTERNAL_LINKS = [
   {
      name: "Github",
      url: "https://github.com/findshrey",
      icon: <IconGithub />,
   },
   {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/findshrey",
      icon: <IconLinkedIn />,
   },
   {
      name: "Email",
      url: "mailto:findshrey@outlook.com",
      icon: <IconEmail />,
   },
]

const SKILL_SET = [
   "HTML & (S)CSS",
   "JavaScript (ES6+)",
   "React (Hooks)",
   "Redux (RTK)",
   "Next.js",
   "Firebase",
]

export { NAV_LINKS, EXTERNAL_LINKS, SKILL_SET }
