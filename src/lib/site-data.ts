const dndnewImage = new URL("../../images/dndnew_full.png", import.meta.url)
  .href;
const coachingImage = new URL(
  "../../images/coaching.dndnew.hu_.jpg",
  import.meta.url,
).href;
const ragDemoImage = new URL(
  "../../images/rag-fastapi-demo.png",
  import.meta.url,
).href;
const llmEvalImage = new URL(
  "../../images/llm-eval-studio.png",
  import.meta.url,
).href;
// const regioTervImage = new URL("../../images/regio_terv.jpg", import.meta.url)
//   .href;
// const solarRegioImage = new URL(
//   "../../images/solaregio.hu.png",
//   import.meta.url,
// ).href;

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
    image: dndnewImage,
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
    image: coachingImage,
    href: "https://coaching.dndnew.hu/",
    tags: ["Landing page", "Lead capture", "Conversion"],
  },
  {
    title: "LLM Eval Studio",
    category: "AI engineering project",
    description:
      "A web-based evaluation framework for comparing LLM performance across models and prompt strategies. Run structured test cases, score responses, and analyze latency and token costs side by side.",
    impact:
      "Enables systematic prompt engineering decisions with real data instead of gut feel. Built with Next.js, Prisma, and the Claude API.",
    image: llmEvalImage,
    href: "https://github.com/dgabor92/llm-eval-studio",
    tags: ["Next.js", "TypeScript", "Prisma", "Claude API", "LLM Evaluation"],
  },
  {
    title: "RAG FastAPI Demo",
    category: "AI engineering project",
    description:
      "A full-stack RAG pipeline: ingest text, store as vector embeddings in PostgreSQL, and query with semantic or hybrid search. Claude Haiku generates answers grounded only in the ingested context.",
    impact:
      "Demonstrates the complete RAG workflow from chunking and embedding (Ollama) to retrieval and LLM-grounded response generation.",
    image: ragDemoImage,
    href: "https://github.com/dgabor92/rag-fastapi-demo",
    tags: ["RAG", "Python", "FastAPI", "pgvector", "Claude API", "Docker"],
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
  {
    title: "AI & LLM",
    items: [
      "Python",
      "FastAPI",
      "pgvector",
      "RAG pipelines",
      "Prompt Engineering",
      "Claude API",
    ],
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
    role: "Ethical Hacker course",
    company: "Vocational Education",
    period: "2025",
    description:
      "Completed training focused on security fundamentals, responsible testing, and practical defensive thinking.",
    kind: "education",
  },
  {
    role: "Junior System Operator course",
    company: "Vocational Education",
    period: "2024 - 2025",
    description:
      "Completed technical training that strengthened systems thinking and operational awareness.",
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
