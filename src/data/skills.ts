import type { SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    tier: "core",
    label: "Core Verified Skills",
    description: "Technologies where Arin has demonstrated hands-on engineering proficiency across backend development, database schemas, and system operations.",
    items: [
      "Go",
      "Java",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Vue 3",
      "Go Fiber",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "GORM",
      "JPA / Hibernate",
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Docker",
      "Git",
      "Linux VM Deployment"
    ]
  },
  {
    tier: "project",
    label: "Technologies Used in Projects",
    description: "Frameworks, SDKs, and libraries integrated into projects to deliver specific functionalities.",
    items: [
      "Dart",
      "Python",
      "Pinia",
      "Vite",
      "Tailwind CSS",
      "PrimeVue",
      "TanStack Vue Query",
      "Naive UI",
      "Axios",
      "Vue-ECharts",
      "Tiptap",
      "Socket.IO",
      "decimal.js",
      "WebSocket",
      "Redis",
      "MinIO",
      "Omise SDK",
      "SMTP Mailers",
      "Flutter",
      "Riverpod",
      "Nginx",
      "EasyOCR (current)",
      "PaddleOCR (previous)"
    ]
  },
  {
    tier: "familiarity",
    label: "Familiarity / Exposure",
    description: "Additional tools and configuration libraries present in codebases or development processes.",
    items: [
      "Radix-Vue",
      "DaisyUI",
      "Quill",
      "Maven",
      "CASL",
      "Vue3 Signature Pad"
    ]
  }
];
