const SITE = {
  author: "Kyle Rubenok",
  defaultImage: "/banner.jpg",
  description:
    "Written by Kyle Rubenok. Product manager, homelabber, and enthusiast for technology that earns its complexity.",
  email: "contact@rubenok.ca",
  locale: "en_US",
  navigation: [
    { href: "/blog", label: "Writing" },
    { href: "/about", label: "About" },
    { href: "/working-with-kyle", label: "Working with Kyle" },
  ],
  socials: [
    { href: "https://github.com/krubenok", label: "GitHub" },
    { href: "https://linkedin.com/in/krubenok", label: "LinkedIn" },
  ],
  title: "Nerd Ramblings",
  titleAlt: "Nerd Ramblings by Kyle Rubenok",
  url: "https://nerd-ramblings.com",
} as const;

export default SITE;
