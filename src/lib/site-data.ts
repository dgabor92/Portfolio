export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const highlights = [
  { value: "6+", label: "years building production software" },
  { value: "React", label: "primary frontend craft" },
  { value: "Vercel", label: "deployment and delivery" },
] as const;

export const principles = [
  {
    title: "Clarity first",
    description:
      "Interfaces should explain themselves quickly. I structure pages so the core message, value, and next action are visible in seconds.",
  },
  {
    title: "Performance as polish",
    description:
      "Speed, accessibility, and clean implementation are part of the product experience, not optional extras.",
  },
  {
    title: "Ship-ready architecture",
    description:
      "I favor modular code, maintainable patterns, and deployment flows that feel calm from local dev to Vercel.",
  },
] as const;

export const projects = [
  {
    title: "D&DNew Kft.",
    category: "Corporate website",
    description:
      "A polished business presence with clear messaging, service highlights, and trust-building structure.",
    impact:
      "Balanced content hierarchy and a conversion-friendly layout for a more professional first impression.",
    image: "/images/dndnew_full.png",
    href: "https://dndnew.hu/",
    tags: ["Brand site", "Responsive UI", "SEO-friendly"],
  },
  {
    title: "Coaching",
    category: "Service landing page",
    description:
      "A focused service page that keeps the offer, proof points, and contact paths easy to scan.",
    impact:
      "Designed for quick comprehension and a stronger lead-gen experience on smaller screens too.",
    image: "/images/coaching.dndnew.hu_.jpg",
    href: "https://coaching.dndnew.hu/",
    tags: ["Landing page", "Lead capture", "Conversion"],
  },
  {
    title: "RegioTerv",
    category: "Corporate website",
    description:
      "A clean, structured website for a professional services brand with a more organized presentation.",
    impact:
      "Helps the business feel more established by keeping the layout focused, readable, and calm.",
    image: "/images/regio_terv.jpg",
    href: "https://www.regioterv.hu/",
    tags: ["Business site", "Structured UI", "Trust"],
  },
  {
    title: "SolarRegio",
    category: "Product website",
    description:
      "A clean visual system for an energy-related business, with cards, sections, and a more structured presentation.",
    impact:
      "Gives the brand more authority by keeping the visuals focused, airy, and easy to navigate.",
    image: "/images/solaregio.hu.png",
    href: "https://solaregio.hu/",
    tags: ["Product story", "Modern layout", "Brand presence"],
  },
] as const;

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Laravel", "MySQL", "Supabase"],
  },
  {
    title: "Platform",
    items: ["Vercel", "Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
] as const;

export const experience = [
  {
    role: "Front-End Developer",
    company: "star/trac GmbH",
    period: "2024 - Current",
    description:
      "Builds user-centric interfaces for a supply chain management system while collaborating with design, product, and backend teams.",
  },
  {
    role: "Full-Stack Developer",
    company: "SMAPP Támogató és Szolgáltató Kft.",
    period: "2023 - 2024",
    description:
      "Delivered web interfaces for municipal smart applications using Laravel, React, and MySQL.",
  },
  {
    role: "Full-Stack Developer",
    company: "D&DNew Kft.",
    period: "2023 - 2023",
    description:
      "Handled both frontend and backend work across the full application stack, helping keep product delivery cohesive.",
  },
  {
    role: "Full-Stack Developer",
    company: "DataExpert",
    period: "2021 - 2023",
    description:
      "Worked on market research platforms, dashboards, and data visualization tools, including Python-assisted improvements.",
  },
] as const;

export const education = [
  {
    role: "Junior System Operator course",
    company: "Vocational Education",
    period: "2024 - Current",
    description:
      "Ongoing technical training that strengthens systems thinking and operational awareness.",
    kind: "education",
  },
  {
    role: "Junior Software Developer",
    company: "Green Fox Academy",
    period: "2020 - 2021",
    description:
      "Formal software development training that established practical programming and teamwork foundations.",
    kind: "education",
  },
  {
    role: "Coaching",
    company: "University of Debrecen",
    period: "2019 - 2020",
    description:
      "A complementary discipline that adds perspective to mentoring, communication, and people-focused work.",
    kind: "education",
  },
  {
    role: "Technical Manager MSc",
    company: "University of Debrecen",
    period: "2016 - 2018",
    description:
      "Graduate-level studies focused on technical management and system-oriented problem solving.",
    kind: "education",
  },
  {
    role: "Technical Manager BSc",
    company: "University of Debrecen",
    period: "2012 - 2016",
    description:
      "Foundational engineering studies that shaped my analytical and technical base.",
    kind: "education",
  },
] as const;
