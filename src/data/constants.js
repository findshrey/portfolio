import IconGithub from "./../components/icons/IconGithub"
import IconLinkedIn from "./../components/icons/IconLinkedIn"
import IconEmail from "./../components/icons/IconEmail"

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

export { NAV_LINKS, EXTERNAL_LINKS }
