import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "Stream I.T. Consulting Ltd. | Bangkok, Thailand",
    role: {
      en: "Software Engineer Intern",
      th: "นักศึกษาฝึกงานตำแหน่งวิศวกรซอฟต์แวร์"
    },
    position: "Frontend Developer", // Keep company names and titles standard, or we can use LocalizedString if we want but position is simple. Wait, the interface expects position to be string, but let's see: we defined position as string in index.ts. Let's make sure it matches. Yes, "Frontend Developer" is fine.
    duration: {
      en: "January 2025 – July 2025",
      th: "มกราคม 2568 – กรกฎาคม 2568"
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร ประเทศไทย"
    },
    description: {
      en: "Contributed to ONE PLATFORM, an enterprise management system in the construction industry, as a member of a cross-functional Agile/Scrum team.",
      th: "ร่วมพัฒนาโครงการ ONE PLATFORM ซึ่งเป็นระบบการจัดการธุรกิจระดับองค์กรในอุตสาหกรรมก่อสร้าง โดยทำงานในฐานะทีมงานพัฒนาสายข้ามสายงาน (Cross-functional) ตามกรอบการทำงานแบบ Agile/Scrum"
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
          en: "Built Ticket list and creation screens based on Figma specs, integrating them with Ticket Service APIs and managing state with a Pinia store.",
          th: "พัฒนาหน้าจอรายการและฟอร์มสร้างตั๋วงาน (Tickets) ตามที่ออกแบบไว้ใน Figma เชื่อมเข้ากับระบบ Ticket Service API และบริหารจัดการสถานะข้อมูลด้วย Pinia"
        }
      },
      {
        text: {
          en: "Coded the chatroom UI with dynamic behavior depending on user type, connecting it to backend APIs and adding ticket detail page navigation.",
          th: "พัฒนาส่วนหน้าจอห้องแชทที่มีการตอบสนองที่ยืดหยุ่นตามประเภทผู้ใช้งาน เชื่อมข้อมูลกับ backend API และเพิ่มการลิงก์ไปหน้าข้อมูลรายละเอียดของตั๋วงาน"
        }
      },
      {
        text: {
          en: "Corrected Cost Sheet calculation behavior using Decimal.js for precise numeric data handling across tabs and payloads.",
          th: "แก้ไขความถูกต้องในการคำนวณเงินในเอกสารงบประมาณ (Cost Sheet) โดยใช้ไลบรารี Decimal.js เพื่อความแม่นยำสูงสุดในการจัดการข้อมูลตัวเลขข้ามหน้าและ Payloads"
        }
      },
      {
        text: {
          en: "Updated job access rules to support role-based permissions and refactored the role verification module.",
          th: "ปรับปรุงสิทธิ์การเข้าถึงงานต่างๆ เพื่อรองรับการจัดการสิทธิ์ตามบทบาทผู้ใช้งาน (RBAC) และปรับโครงสร้างโมดูลตรวจสอบสิทธิ์ผู้ใช้งานใหม่"
        }
      },
      {
        text: {
          en: "Upgraded electronic signature flows supporting both image uploads and dynamic drawing canvas (Vue3 Signature Pad).",
          th: "พัฒนาประสิทธิภาพระบบลายเซ็นอิเล็กทรอนิกส์ รองรับทั้งการอัปโหลดไฟล์รูปภาพและการเซ็นแบบวาดเส้นสดบนหน้าจอ (Vue3 Signature Pad)"
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
      "Naive UI",
      "Axios",
      "Decimal.js"
    ],
    isConfidential: true,
    confidentialityNote: {
      en: "This project is proprietary enterprise software. Codebases, repository links, internal screenshots, client data, and Figma designs are confidential and not publicly available.",
      th: "โปรเจกต์นี้เป็นซอฟต์แวร์เฉพาะขององค์กร โค้ด ลิงก์จัดเก็บโค้ด ภาพหน้าจอภายในระบบ ข้อมูลลูกค้า และการออกแบบบน Figma จะไม่ถูกเปิดเผยต่อสาธารณะ"
    }
  }
];
