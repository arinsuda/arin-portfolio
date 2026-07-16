import type { Profile } from "../types"

export const profile: Profile = {
  name: "Arin Sudakijjathorn",
  title: {
    en: "Backend-Focused Full Stack Developer",
    th: "นักพัฒนาซอฟต์แวร์สาย Backend & Full-Stack",
  },
  avatar: "/images/profile/me-1.svg", // primary fallback
  profileImages: [
    {
      id: "me-1",
      src: "/images/profile/me-6.jpg",
      isPrimary: true,
      alt: {
        en: "Temporary primary profile image placeholder",
        th: "รูปโปรไฟล์ตัวอย่างหลักชั่วคราว",
      },
    },
    {
      id: "me-2",
      src: "/images/profile/me-4.JPG",
      alt: {
        en: "Temporary profile image placeholder 2",
        th: "รูปโปรไฟล์ตัวอย่างชั่วคราว 2",
      },
    },
    {
      id: "me-3",
      src: "/images/profile/me-5.jpg",
      alt: {
        en: "Temporary profile image placeholder 3",
        th: "รูปโปรไฟล์ตัวอย่างชั่วคราว 3",
      },
    },
    {
      id: "me-4",
      src: "/images/profile/me-3.JPG",
      alt: {
        en: "Temporary profile image placeholder 4",
        th: "รูปโปรไฟล์ตัวอย่างชั่วคราว 4",
      },
    },
    {
      id: "me-5",
      src: "/images/profile/me-1.JPG",
      alt: {
        en: "Temporary profile image placeholder 5",
        th: "รูปโปรไฟล์ตัวอย่างชั่วคราว 5",
      },
    },
  ],
  bio: {
    en: "Junior Backend-focused Full Stack Developer with hands-on experience building RESTful APIs, authentication systems, and relational database schemas.",
    th: "นักพัฒนาซอฟต์แวร์สาย Full-Stack ที่ให้ความสำคัญกับ Backend มีประสบการณ์จริงในการสร้าง RESTful API, ระบบยืนยันตัวตน และการออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์",
  },
  subBio: {
    en: "Specializing in Go Fiber, Java Spring Boot, GORM, MySQL, and PostgreSQL. Focused on building robust backend architectures, clean API integrations, and developer tooling.",
    th: "เชี่ยวชาญด้าน Go Fiber, Java Spring Boot, GORM, MySQL และ PostgreSQL มุ่งเน้นการสร้างสถาปัตยกรรม Backend ที่แข็งแกร่ง การเชื่อมต่อ API ที่สะอาด และเครื่องมือสำหรับนักพัฒนาซอฟต์แวร์",
  },
  email: "sixarin.thorn@gmail.com",
  phone: "+66 91 882 2292",
  socials: {
    github: "https://github.com/arinsuda",
    linkedin: "https://www.linkedin.com/in/arin-sudakijjathorn-936914325/",
  },
  availability: {
    enabled: true,
    en: "Open to Backend Developer and Full-Stack Developer opportunities",
    th: "เปิดรับโอกาสในตำแหน่ง Backend Developer และ Full-Stack Developer",
  },
}
