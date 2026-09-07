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
      en: "Bachelor of Science in Applied Computer Science",
      th: "วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์"
    },
    period: {
      en: "2021 – 2025",
      th: "2564 – 2568"
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย"
    },
    description: {
      en: "Completed undergraduate degree with a rigorous foundation in algorithms, relational database architectures, software engineering methodologies, and distributed systems.",
      th: "สำเร็จการศึกษาระดับปริญญาตรี พร้อมรากฐานที่เข้มข้นด้านการออกแบบอัลกอริทึม สถาปัตยกรรมฐานข้อมูลเชิงสัมพันธ์ กระบวนการพัฒนาวิศวกรรมซอฟต์แวร์ และระบบแบบกระจาย"
    },
    coCurricular: [
      {
        en: "Head of Information and Media Team at Bangmod Camp",
        th: "หัวหน้าฝ่ายสารสนเทศและสื่อ โครงการค่ายบางมด"
      },
      {
        en: "Academic and Activities Staff for Computer Science Orientation Camp",
        th: "ทีมงานวิชาการและกิจกรรม ค่ายปฐมนิเทศสาขาวิทยาการคอมพิวเตอร์"
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
      en: "July 2025 – Present",
      th: "กรกฎาคม 2568 – ปัจจุบัน"
    },
    location: {
      en: "Rayong, Thailand",
      th: "ระยอง ประเทศไทย"
    },
    description: {
      en: "Developing and maintaining internal enterprise management systems, industrial production tracking services, and relational database workflows for manufacturing operations.",
      th: "พัฒนาและดูแลรักษาระบบซอฟต์แวร์บริหารจัดการภายในองค์กร ระบบติดตามกระบวนการผลิต และฐานข้อมูลเชิงสัมพันธ์เพื่อสนับสนุนการดำเนินงานในโรงงานอุตสาหกรรม"
    },
    highlights: [
      {
        text: {
          en: "Design and maintain internal enterprise web applications and operational services for industrial automation.",
          th: "ออกแบบและดูแลรักษาเว็บแอปพลิเคชันภายในองค์กรและระบบบริการสนับสนุนกระบวนการทำงานอัตโนมัติ"
        }
      },
      {
        text: {
          en: "Optimize database schemas, stored procedures, and query performance for heavy manufacturing tracking.",
          th: "ปรับแต่งโครงสร้างฐานข้อมูล และเพิ่มประสิทธิภาพการสืบค้นข้อมูลสำหรับระบบติดตามข้อมูลในสายการผลิต"
        }
      },
      {
        text: {
          en: "Collaborate with cross-departmental teams to streamline internal production reporting and operational tools.",
          th: "ประสานงานร่วมกับทีมข้ามสายงานเพื่อปรับปรุงระบบรายงานผลการผลิตและพัฒนาเครื่องมือสนับสนุนการทำงาน"
        }
      }
    ],
    technologies: [
      "C#",
      ".NET",
      "SQL Server",
      "TypeScript",
      "Vue.js",
      "RESTful API",
      "Docker"
    ],
    isConfidential: true,
    confidentialityNote: {
      en: "Internal industrial operational systems and proprietary manufacturing processes are confidential.",
      th: "ระบบปฏิบัติการภายในโรงงานอุตสาหกรรมและกระบวนการผลิตเฉพาะของบริษัทเป็นข้อมูลที่เป็นความลับ"
    },
    logo: withBase("images/organizations/lpn-plate-mill.png"),
    organizationUrl: "http://www.lpnpm.co.th/"
  }
];
