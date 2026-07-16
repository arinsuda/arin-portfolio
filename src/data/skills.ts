import type { SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    tier: "core",
    label: {
      en: "Core Verified Skills",
      th: "ทักษะหลักที่ได้รับการรับรอง"
    },
    description: {
      en: "Technologies where Arin has demonstrated hands-on engineering proficiency across backend development, database schemas, and system operations.",
      th: "เทคโนโลยีที่อรินทร์ได้พิสูจน์ให้เห็นถึงความเชี่ยวชาญในเชิงปฏิบัติงานจริง ทั้งด้านการพัฒนาระบบ Backend การออกแบบฐานข้อมูล และระบบโครงสร้างพื้นฐาน"
    },
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
    label: {
      en: "Technologies Used in Projects",
      th: "เทคโนโลยีที่เคยใช้งานในโปรเจกต์"
    },
    description: {
      en: "Frameworks, SDKs, and libraries integrated into projects to deliver specific functionalities.",
      th: "เฟรมเวิร์ก ไลบรารี และชุดพัฒนาซอฟต์แวร์ (SDK) ที่นำมารวมเข้ากับโปรเจกต์ต่างๆ เพื่อเพิ่มความสามารถเฉพาะด้าน"
    },
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
    label: {
      en: "Familiarity / Exposure",
      th: "ความคุ้นเคยและประสบการณ์การใช้งาน"
    },
    description: {
      en: "Additional tools and configuration libraries present in codebases or development processes.",
      th: "เครื่องมือเพิ่มเติมและไลบรารีการกำหนดค่าที่มีอยู่ในโค้ดเบสหรือกระบวนการพัฒนาซอฟต์แวร์ต่างๆ"
    },
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
