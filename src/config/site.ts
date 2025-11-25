import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const siteConfig = {
  name: "Lever AI",
  description: "Timeless engineering with modern intelligence.",
  productsTagline: "Made with you in mind.",
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
      skills: ["Full Stack Dev", "AI/ML", "Product Design", "Mobile Dev"],
    },
  ],
  products: [
    {
      name: "Guesstimate",
      description: "The first Lever AI mobile app. Master the art of estimation.",
      icon: "Calculator", // We'll map this to a Lucide icon
      link: "#", // Add link if available
      status: "In Development",
    },
  ],
};
