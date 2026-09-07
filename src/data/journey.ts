import type { JourneyWaypoint } from "../types";
import { withBase } from "../utils/assets";

export const journeyWaypoints: JourneyWaypoint[] = [
  {
    id: "kmutt",
    code: "WP-01",
    category: "academic",
    status: "completed",
    organization: "King Mongkut's University of Technology Thonburi (KMUTT)",
    shortName: "KMUTT",
    role: {
      en: "Bachelor of Science in Information Technology (IT)",
      th: "วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (IT)"
    },
    period: {
      en: "2022 – 2026",
      th: "2565 – 2569"
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย"
    },
    description: {
      en: "Studied at the School of Information Technology (SIT), KMUTT, building a rigorous foundation in backend architectures, relational database systems, software engineering methodologies, and distributed services.",
      th: "การศึกษาระดับปริญญาตรี คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี พร้อมรากฐานที่เข้มข้นด้านสถาปัตยกรรม Backend, ระบบฐานข้อมูลเชิงสัมพันธ์, กระบวนการพัฒนาวิศวกรรมซอฟต์แวร์ และระบบแบบกระจาย"
    },
    coCurricular: [
      {
        en: "SIT Photoclub Member",
        th: "สมาชิกชมรมถ่ายภาพ SIT Photoclub"
      },
      {
        en: "Staff in KMUTT Startup Playground 2024",
        th: "ทีมงานจัดกิจกรรม KMUTT Startup Playground 2024"
      },
      {
        en: "Staff in IT#29 and IT#30 Starterpack Camp",
        th: "ทีมงานพี่เลี้ยงค่าย IT#29 และ IT#30 Starterpack Camp"
      },
      {
        en: "Staff in SIT Helloworld Goose camp",
        th: "ทีมงานค่ายกิจกรรม SIT Helloworld Goose"
      }
    ],
    technologies: [
      "Java",
      "SQL",
      "Database Systems",
      "Software Engineering",
      "Algorithms",
      "C++"
    ],
    logo: withBase("images/organizations/kmutt.png"),
    organizationUrl: "https://www.kmutt.ac.th/"
  },
  {
    id: "stream-it",
    code: "WP-02",
    category: "internship",
    status: "completed",
    organization: "Stream I.T. Consulting Ltd.",
    shortName: "Stream I.T.",
    role: {
      en: "Software Engineer Intern",
      th: "นักศึกษาฝึกงานตำแหน่งวิศวกรซอฟต์แวร์"
    },
    period: {
      en: "January 2025 – July 2025",
      th: "มกราคม 2568 – กรกฎาคม 2568"
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย"
    },
    description: {
      en: "Contributed to ONE PLATFORM, an enterprise management system in the construction industry, as a member of a cross-functional Agile/Scrum team delivering production modules and API integrations.",
      th: "ร่วมพัฒนาโครงการ ONE PLATFORM ซึ่งเป็นระบบการจัดการธุรกิจระดับองค์กรในอุตสาหกรรมก่อสร้าง โดยทำงานในทีม Agile/Scrum ส่งมอบโมดูลส่วนต่อประสานผู้ใช้และการเชื่อมต่อ API จริง"
    },
    highlights: [
      {
        text: {
          en: "Created the user interface and frontend CRUD flows for table-based payment management integrated with backend APIs.",
          th: "สร้างส่วนติดต่อผู้ใช้ (UI) และระบบจัดการข้อมูล (CRUD) สำหรับการจัดการการชำระเงินในรูปแบบตาราง เชื่อมโยงเข้ากับระบบ backend API"
        }
      },
      {
        text: {
          en: "Developed a CSV file import flow accepting Jira timeline data, created the timeline visualization, and resolved milestone modal issues.",
          th: "พัฒนาระบบนำเข้าข้อมูลไฟล์ CSV จาก Jira Timeline เพื่อนำเสนอภาพจำลองตารางเวลา และแก้ไขจุดบกพร่องของหน้าต่างข้อความเตือน Milestones"
        }
      },
      {
        text: {
          en: "Built Ticket list and creation screens based on Figma specs, integrating them with Ticket Service APIs and managing state with Pinia.",
          th: "พัฒนาหน้าจอรายการและฟอร์มสร้างตั๋วงาน (Tickets) ตามที่ออกแบบไว้ใน Figma เชื่อมเข้ากับระบบ Ticket Service API และบริหารจัดการสถานะข้อมูลด้วย Pinia"
        }
      },
      {
        text: {
          en: "Built executive dashboards and business data visualizations using Vue-ECharts.",
          th: "สร้างหน้าสรุปข้อมูลสำหรับผู้บริหาร (Executive Dashboards) และการนำเสนอข้อมูลธุรกิจในรูปแบบแผนภูมิโดยใช้ Vue-ECharts"
        }
      },
      {
        text: {
          en: "Implemented live approval alerts utilizing Socket.IO.",
          th: "พัฒนาระบบแจ้งเตือนแบบเรียลไทม์เพื่อแจ้งเตือนคำขอการอนุมัติต่างๆ โดยใช้ระบบ Socket.IO"
        }
      }
    ],
    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vue-ECharts",
      "Socket.IO",
      "Tailwind CSS",
      "Decimal.js"
    ],
    isConfidential: true,
    confidentialityNote: {
      en: "This project is proprietary enterprise software. Codebases, repository links, internal screenshots, client data, and Figma designs are confidential.",
      th: "โปรเจกต์นี้เป็นซอฟต์แวร์เฉพาะขององค์กร โค้ด ลิงก์จัดเก็บโค้ด ภาพหน้าจอภายในระบบ ข้อมูลลูกค้า และการออกแบบบน Figma เป็นข้อมูลความลับ"
    },
    logo: withBase("images/organizations/stream-it.png"),
    organizationUrl: "https://www.stream.co.th/"
  },
  {
    id: "lpn-plate-mill",
    code: "WP-03",
    category: "professional",
    status: "active",
    organization: "LPN Plate Mill Public Company Limited",
    shortName: "LPN Plate Mill",
    role: {
      en: "Programmer",
      th: "โปรแกรมเมอร์ (Programmer)"
    },
    period: {
      en: "September 2026 – Present",
      th: "กันยายน 2569 – ปัจจุบัน"
    },
    location: {
      en: "Samut Prakan, Thailand",
      th: "สมุทรปราการ ประเทศไทย"
    },
    description: {
      en: "Currently working as a Programmer, primarily utilizing MySQL Server to write, design, and maintain internal business systems and relational database operations.",
      th: "ปัจจุบันทำงานในตำแหน่งโปรแกรมเมอร์ โดยเน้นการใช้งาน MySQL Server เป็นหลักในการเขียน ออกแบบ และดูแลปรับปรุงระบบต่างๆ ภายในองค์กร"
    },
    highlights: [
      {
        text: {
          en: "Design, write, and maintain internal business systems with a primary focus on MySQL Server database architecture.",
          th: "ออกแบบ เขียน และดูแลรักษาระบบการทำงานภายในองค์กร โดยเน้นการจัดการฐานข้อมูลด้วย MySQL Server เป็นหลัก"
        }
      }
    ],
    technologies: [
      "MySQL Server",
      "SQL",
      "Database Design"
    ],
    isConfidential: true,
    confidentialityNote: {
      en: "Internal business systems and company operational workflows are confidential.",
      th: "ระบบบริหารจัดการและกระบวนการทำงานภายในบริษัทเป็นข้อมูลความลับ"
    },
    logo: withBase("images/organizations/lpn-plate-mill.png"),
    organizationUrl: "http://www.lpnpm.co.th/"
  }
];
