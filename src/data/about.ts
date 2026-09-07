import type { LocalizedString } from "../types";

export interface AboutStoryItem {
  id: string;
  icon: string;
  text: LocalizedString;
}

export interface ArchitectureFocusItem {
  id: string;
  icon: string;
  title: LocalizedString;
  desc: LocalizedString;
}

export interface UsageItem {
  label: LocalizedString;
  val: string;
}

export interface UsageCategory {
  id: string;
  icon: string;
  title: LocalizedString;
  items: UsageItem[];
}

export const aboutStory: AboutStoryItem[] = [
  {
    id: "intro",
    icon: "pi pi-user",
    text: {
      en: "Hello, my name is Arin Sudakijjathorn. I studied Information Technology (IT) at the School of Information Technology (SIT), King Mongkut’s University of Technology Thonburi (KMUTT), with a strong dedication to backend architectures, relational databases, and scalable web services.",
      th: "สวัสดีครับ ผมชื่อ อรินทร์ สุดากิจจาทร สำเร็จการศึกษาด้านเทคโนโลยีสารสนเทศ (IT) จากคณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT) โดยมุ่งมั่นและเชี่ยวชาญด้านสถาปัตยกรรม Backend, ระบบฐานข้อมูลเชิงสัมพันธ์ และการพัฒนาระบบที่มีประสิทธิภาพสูง",
    },
  },
  {
    id: "internship",
    icon: "pi pi-building",
    text: {
      en: "During my software engineering internship at Stream I.T. Consulting, I contributed to enterprise web applications, building and refactoring RESTful services, implementing database migrations, and collaborating within an Agile team to deliver reliable software components.",
      th: "ในช่วงฝึกงานตำแหน่ง Software Engineer ที่ Stream I.T. Consulting ผมได้ร่วมพัฒนาและดูแลระบบซอฟต์แวร์ระดับองค์กร สร้างและปรับปรุง RESTful API, จัดการ Database Migration และทำงานร่วมกับทีมในรูปแบบ Agile เพื่อส่งมอบงานที่มีคุณภาพและเสถียรภาพสูง",
    },
  },
  {
    id: "current",
    icon: "pi pi-desktop",
    text: {
      en: "Currently, I work as a Programmer at LPN Plate Mill Public Co., Ltd., focusing primarily on MySQL Server to write, design, and maintain internal business systems and database operations.",
      th: "ปัจจุบัน ผมทำงานในตำแหน่งโปรแกรมเมอร์ (Programmer) ที่บริษัท แอล พี เอ็น เพลทมิล จำกัด (มหาชน) โดยหลักๆ ใช้ MySQL Server ในการเขียน ออกแบบ และดูแลปรับปรุงระบบต่างๆ ภายในองค์กร",
    },
  },
  {
    id: "stack",
    icon: "pi pi-cog",
    text: {
      en: "My core development stack centers on Go (Fiber) and Java (Spring Boot) for performant backends, PostgreSQL and MySQL for structured data persistence, Redis for high-speed caching, and Docker for containerized deployment. On the frontend, I create modern, responsive interfaces using Vue 3, TypeScript, and PrimeVue.",
      th: "เครื่องมือหลักที่ผมใช้งานประกอบด้วย Go (Fiber) และ Java (Spring Boot) สำหรับ Backend ประสิทธิภาพสูง, PostgreSQL และ MySQL สำหรับการจัดเก็บข้อมูล, Redis สำหรับ Caching และ Docker สำหรับ Containerization ส่วนฝั่ง Frontend ผมพัฒนาด้วย Vue 3, TypeScript และ PrimeVue",
    },
  },
  {
    id: "philosophy",
    icon: "pi pi-bolt",
    text: {
      en: "I believe in understanding the full lifecycle of a system—from query indexing and API throughput to authentication security and deployment infrastructure. I approach engineering with curiosity and rigor, focusing on maintainable, clean code that stands the test of time.",
      th: "ผมให้ความสำคัญกับการทำความเข้าใจภาพรวมของระบบทั้งหมด ตั้งแต่การทำ Query Indexing ไปจนถึงระบบความปลอดภัยของ Authentication และการ Deploy โครงสร้างพื้นฐาน โดยมุ่งมั่นสร้างซอฟต์แวร์ที่อ่านง่าย ดูแลรักษาสะดวก และทำงานได้อย่างมีประสิทธิภาพในระยะยาว",
    },
  },
];

export const architectureFocusList: ArchitectureFocusItem[] = [
  {
    id: "backend-focus",
    icon: "pi pi-server",
    title: {
      en: "Backend & System Focus",
      th: "สถาปัตยกรรม Backend & ฐานข้อมูล",
    },
    desc: {
      en: "Designing normalized schemas, query indexing, and high-performance RESTful APIs with Go Fiber and Java Spring Boot.",
      th: "ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (PostgreSQL/MySQL) และพัฒนา High-Performance REST APIs ด้วย Go Fiber และ Java Spring Boot",
    },
  },
  {
    id: "system-wide",
    icon: "pi pi-sitemap",
    title: {
      en: "System-Wide Understanding",
      th: "ความเข้าใจในภาพรวมทั้งระบบ",
    },
    desc: {
      en: "Connecting APIs, relational schemas, Redis caching, JWT security, and Dockerized Linux deployments.",
      th: "เชื่อมต่อ API, ฐานข้อมูล, ความปลอดภัย, การจัดเก็บไฟล์, Caching ด้วย Redis และการ Deploy บน Docker/Linux",
    },
  },
];

export const usageCategories: UsageCategory[] = [
  {
    id: "programming",
    icon: "pi pi-code",
    title: {
      en: "Programming & Development",
      th: "ภาษาและการพัฒนาซอฟต์แวร์",
    },
    items: [
      {
        label: { en: "Languages", th: "ภาษาโปรแกรม" },
        val: "Go, Java, TypeScript, JavaScript, SQL, Python, Dart, HTML5/CSS3",
      },
      {
        label: { en: "Frameworks", th: "เฟรมเวิร์ก" },
        val: "Go Fiber, Spring Boot, Vue 3, Nuxt, Express, TailwindCSS, PrimeVue",
      },
      {
        label: { en: "Databases & Cache", th: "ฐานข้อมูลและแคช" },
        val: "PostgreSQL, MySQL, Redis, GORM, JPA / Hibernate, MinIO",
      },
      {
        label: { en: "Architecture & APIs", th: "สถาปัตยกรรมและ API" },
        val: "RESTful APIs, JWT Auth, Microservices, WebSocket, OpenAPI / Swagger",
      },
    ],
  },
  {
    id: "devops",
    icon: "pi pi-cloud",
    title: {
      en: "Infrastructure & DevOps",
      th: "ระบบโครงสร้างพื้นฐาน & DevOps",
    },
    items: [
      {
        label: { en: "Containers", th: "คอนเทนเนอร์" },
        val: "Docker, Docker Compose, Container Networking",
      },
      {
        label: { en: "Web Servers", th: "เว็บเซิร์ฟเวอร์" },
        val: "Nginx Reverse Proxy, SSL / TLS Security",
      },
      {
        label: { en: "Version Control", th: "การควบคุมเวอร์ชัน" },
        val: "Git, GitHub, GitHub Actions (CI/CD Pipelines)",
      },
      {
        label: { en: "Deployments", th: "การติดตั้งระบบ" },
        val: "Linux (Ubuntu/Debian) Virtual Machines, Cloud VPS",
      },
    ],
  },
  {
    id: "environment",
    icon: "pi pi-desktop",
    title: {
      en: "Development Environment",
      th: "สภาพแวดล้อมการทำงาน",
    },
    items: [
      {
        label: { en: "Operating System", th: "ระบบปฏิบัติการ" },
        val: "macOS (MacBook), Linux",
      },
      {
        label: { en: "IDEs & Editors", th: "โปรแกรมเขียนโค้ด" },
        val: "VS Code, GoLand, IntelliJ IDEA",
      },
      {
        label: { en: "Terminal & Shell", th: "เทอร์มินัลและเชลล์" },
        val: "Warp, iTerm2, zsh, Starship",
      },
      {
        label: { en: "API Testing", th: "เครื่องมือทดสอบ API" },
        val: "Postman, Bruno, curl, HTTPie",
      },
    ],
  },
  {
    id: "philosophy",
    icon: "pi pi-check-circle",
    title: {
      en: "Engineering Philosophy",
      th: "หลักการและแนวคิดทางวิศวกรรม",
    },
    items: [
      {
        label: { en: "Clean Architecture", th: "สถาปัตยกรรมที่สะอาด" },
        val: "Separation of concerns, handler-service-repository patterns",
      },
      {
        label: { en: "Data Integrity", th: "ความสมบูรณ์ของข้อมูล" },
        val: "Strict foreign key constraints, migration scripts, index tuning",
      },
      {
        label: { en: "Code Quality", th: "คุณภาพของโค้ด" },
        val: "Self-documenting code, meaningful commit messages, explicit error handling",
      },
      {
        label: { en: "Maintainability", th: "ความสามารถในการดูแลรักษา" },
        val: "Building software that can be read, debugged, and maintained long-term",
      },
    ],
  },
];
