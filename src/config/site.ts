import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const siteConfig = {
  name: "Lever AI",
  description: "Timeless engineering with modern intelligence.",
  productsTagline: "Made with love and care.",
  email: "leverai@leverai.tech",
  links: {
    github: "https://github.com/mhdmartini",
    twitter: "https://twitter.com/mhdmartini", // Assuming handle
    linkedin: "https://linkedin.com/in/mhdmartini", // Assuming handle
  },
  team: [
    {
      name: "Mohammad Martini",
      role: "Founder & Engineer",
      bio: "Founder of Lever AI. Building Guesstimate and other cool things.",
      avatar: "https://github.com/mhdmartini.png",
      links: {
        website: "https://mhdmartini.github.io/resume/latest/",
        github: "https://github.com/mhdmartini",
        linkedin: "https://linkedin.com/in/mhdmartini",
      },
      skills: ["AI/ML", "Software Eng.", "Product Design", "Cloud"],
    },
  ],
  products: [
    {
      name: "Guesstimate: Not Trivia!",
      description: "The Reasoning Trivia Game you've been waiting for.",
      icon: "/guesstimate/icon.png",
      link: "https://play.google.com/store/apps/details?id=tech.leverai.guesstimate",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=tech.leverai.guesstimate",
        appStore: "https://apps.apple.com/app/id6756033242",
      },
      status: "",
    },
  ],
};
