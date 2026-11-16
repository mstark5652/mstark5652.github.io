const email = "michael@starktech.dev"

export default {
  name: "Michael Stark",
  company: { name: "Stark Tech", href: "https://starktech.dev" },
  hero: {
    eyebrow: "Founder, Stark Tech",
    title: "I help founders turn ideas into shipped products.",
    intro:
      "Product strategy, custom development, and hands-on technical leadership for startups. I've built and launched products across digital health, AI, sports, and live events, including my own.",
    primaryCta: "Work with me",
    secondaryCta: "See the work",
  },
  services: {
    title: "How I can help",
    items: [
      {
        title: "Product strategy",
        description:
          "Sharpen the idea, scope the first version, and decide what to build now and what can wait.",
      },
      {
        title: "Custom development",
        description:
          "Web, mobile, and AI features, designed and built end to end, then shipped to real users.",
      },
      {
        title: "Technical leadership",
        description:
          "Architecture, hiring, and team practices that keep a growing product moving quickly.",
      },
    ],
  },
  work: {
    title: "Work",
    intro: "Products I've founded, built, or led, from AI coaching to digital health.",
  },
  more: {
    toggle: "more projects",
  },
  contact: {
    title: "Have something to build?",
    body: "Tell me about your product and where you're stuck. I'll tell you honestly whether I can help.",
    cta: "Email me",
    mailto: `mailto:${email}?subject=${encodeURIComponent("Project inquiry")}`,
  },
  links: [
    { label: "GitHub", href: "https://github.com/mstark5652" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/michaelstark5652" },
    { label: "Email", href: `mailto:${email}` },
  ],
}
