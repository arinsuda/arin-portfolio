import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "one-platform",
    title: "ONE PLATFORM",
    shortDescription: {
      en: "An enterprise resource planning and management system for the construction industry developed during my software engineer internship.",
      th: "ระบบบริหารจัดการและวางแผนทรัพยากรระดับองค์กรสำหรับอุตสาหกรรมก่อสร้าง พัฒนาในช่วงฝึกงานตำแหน่งวิศวกรซอฟต์แวร์"
    },
    description: {
      en: "ONE PLATFORM is a proprietary enterprise management system built for the construction industry. During my Software Engineer Internship, I contributed as a Frontend Developer, collaborating with a cross-functional Scrum team. I was responsible for building complex workflows, interactive executive dashboards, dynamic gantt chart timeline representations, role-based access control, digital signature features, and real-time notification alerts.",
      th: "ONE PLATFORM เป็นระบบการจัดการธุรกิจระดับองค์กรในอุตสาหกรรมก่อสร้าง ในช่วงฝึกงานในตำแหน่งวิศวกรซอฟต์แวร์ ผมได้ร่วมพัฒนาในฐานะ Frontend Developer ทำงานร่วมกับทีมพัฒนาแบบข้ามสายงาน (Cross-functional) ตามกรอบการทำงาน Agile/Scrum โดยรับผิดชอบการสร้างระบบการชำระเงิน นำเสนอภาพจำลองตารางเวลาจาก Jira สร้างหน้าสรุปข้อมูลผู้บริหาร (Executive Dashboards) จัดการสิทธิ์การเข้าถึง และระบบแจ้งเตือนแบบเรียลไทม์"
    },
    thumbnail: "/images/projects/one-platform-cover.svg",
    category: "featured",
    tags: ["Vue 3", "TypeScript", "Pinia", "Socket.IO", "Vue-ECharts"],
    role: {
      en: "Frontend Developer (Software Engineer Intern)",
      th: "นักพัฒนา Frontend (นักศึกษาฝึกงานวิศวกรซอฟต์แวร์)"
    },
    ownership: {
      en: "Contributed as a Frontend Developer in a cross-functional team, specializing in core dashboards, interactive visualization features, and real-time services.",
      th: "ร่วมพัฒนาในตำแหน่ง Frontend Developer ในทีมพัฒนาข้ามสายงาน รับผิดชอบโดยเฉพาะในส่วนแดชบอร์ด หน้าตาจำลองข้อมูล และการเชื่อมต่อบริการเรียลไทม์"
    },
    period: {
      en: "January 2025 – July 2025",
      th: "มกราคม 2568 – กรกฎาคม 2568"
    },
    status: {
      en: "Completed Internship Project",
      th: "โครงการฝึกงานเสร็จสิ้นสมบูรณ์"
    },
    contributions: [
      {
        area: {
          en: "Interactive Visualizations & Data Dashboards",
          th: "การแสดงภาพข้อมูลแบบโต้ตอบและแดชบอร์ด"
        },
        details: [
          {
            en: "Built executive dashboards and business data visualizations using Vue-ECharts.",
            th: "สร้างหน้าสรุปข้อมูลสำหรับผู้บริหาร (Executive Dashboards) และการนำเสนอข้อมูลธุรกิจในรูปแบบแผนภูมิโดยใช้ Vue-ECharts"
          },
          {
            en: "Developed a CSV file import flow accepting Jira timeline data, created the timeline visualization, and resolved milestone modal issues.",
            th: "พัฒนาระบบนำเข้าข้อมูลไฟล์ CSV จาก Jira Timeline เพื่อนำเสนอภาพจำลองตารางเวลา และแก้ไขจุดบกพร่องของหน้าต่างข้อความเตือน Milestones"
          }
        ]
      },
      {
        area: {
          en: "Core Frontend Features & Workflows",
          th: "ฟีเจอร์ฝั่งหน้าบ้านหลักและขั้นตอนการทำงาน"
        },
        details: [
          {
            en: "Created the user interface and frontend CRUD flows for table-based payment management integrated with backend APIs.",
            th: "สร้างส่วนติดต่อผู้ใช้ (UI) และระบบจัดการข้อมูล (CRUD) สำหรับการจัดการการชำระเงินในรูปแบบตาราง เชื่อมโยงเข้ากับระบบ backend API"
          },
          {
            en: "Built Ticket list and creation screens based on Figma specs, integrating them with Ticket Service APIs and managing state with a Pinia store.",
            th: "พัฒนาหน้าจอรายการและฟอร์มสร้างตั๋วงาน (Tickets) ตามที่ออกแบบไว้ใน Figma เชื่อมเข้ากับระบบ Ticket Service API และบริหารจัดการสถานะข้อมูลด้วย Pinia"
          },
          {
            en: "Upgraded electronic signature flows supporting both image uploads and dynamic drawing canvas (Vue3 Signature Pad).",
            th: "พัฒนาประสิทธิภาพระบบลายเซ็นอิเล็กทรอนิกส์ รองรับทั้งการอัปโหลดไฟล์รูปภาพและการเซ็นแบบวาดเส้นสดบนหน้าจอ (Vue3 Signature Pad)"
          }
        ]
      },
      {
        area: {
          en: "System Integrations & Security Control",
          th: "การรวมระบบและการควบคุมความปลอดภัย"
        },
        details: [
          {
            en: "Implemented live approval alerts utilizing Socket.IO.",
            th: "พัฒนาระบบแจ้งเตือนแบบเรียลไทม์เพื่อแจ้งเตือนคำขอการอนุมัติต่างๆ โดยใช้ระบบ Socket.IO"
          },
          {
            en: "Coded the chatroom UI with dynamic behavior depending on user type, connecting it to backend APIs and adding ticket detail page navigation.",
            th: "พัฒนาส่วนหน้าจอห้องแชทที่มีการตอบสนองที่ยืดหยุ่นตามประเภทผู้ใช้งาน เชื่อมข้อมูลกับ backend API และเพิ่มการลิงก์ไปหน้าข้อมูลรายละเอียดของตั๋วงาน"
          },
          {
            en: "Corrected Cost Sheet calculation behavior using Decimal.js for precise numeric data handling across tabs and payloads.",
            th: "แก้ไขความถูกต้องในการคำนวณเงินในเอกสารงบประมาณ (Cost Sheet) โดยใช้ไลบรารี Decimal.js เพื่อความแม่นยำสูงสุดในการจัดการข้อมูลตัวเลขข้ามหน้าและ Payloads"
          },
          {
            en: "Updated job access rules to support role-based permissions and refactored the role verification module.",
            th: "ปรับปรุงสิทธิ์การเข้าถึงงานต่างๆ เพื่อรองรับการจัดการสิทธิ์ตามบทบาทผู้ใช้งาน (RBAC) และปรับโครงสร้างโมดูลตรวจสอบสิทธิ์ผู้ใช้งานใหม่"
          }
        ]
      }
    ],
    features: [
      {
        text: {
          en: "Executive business dashboards with Vue-ECharts widgets",
          th: "ระบบแดชบอร์ดสรุปข้อมูลธุรกิจสำหรับผู้บริหารด้วย Vue-ECharts"
        }
      },
      {
        text: {
          en: "Import workflow for Jira CSV and timeline schedule visualizations",
          th: "ระบบนำเข้าไฟล์ CSV ของ Jira พร้อมภาพจำลองไทม์ไลน์และตารางเวลา"
        }
      },
      {
        text: {
          en: "Role-Based Access Control (RBAC) rule evaluation and management",
          th: "ระบบจัดการและควบคุมสิทธิ์เข้าถึงตามบทบาทผู้ใช้งาน (RBAC)"
        }
      },
      {
        text: {
          en: "Dual-mode electronic signature support with image upload and live canvas rendering",
          th: "ระบบรองรับลายเซ็นอิเล็กทรอนิกส์สองระบบ (อัปโหลดรูปภาพ / วาดบนหน้าจอ)"
        }
      },
      {
        text: {
          en: "Live real-time alerts for system approvals using Socket.IO",
          th: "ระบบแจ้งเตือนแบบเรียลไทม์เพื่ออนุมัติงานผ่าน Socket.IO"
        }
      }
    ],
    links: [],
    confidentialityNote: {
      en: "This project is proprietary enterprise software. Codebases, repository links, internal screenshots, client data, and Figma designs are confidential and not publicly available.",
      th: "โปรเจกต์นี้เป็นซอฟต์แวร์เฉพาะขององค์กร โค้ด ลิงก์จัดเก็บโค้ด ภาพหน้าจอภายในระบบ ข้อมูลลูกค้า และการออกแบบบน Figma จะไม่ถูกเปิดเผยต่อสาธารณะ"
    },
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
    gallery: []
  },
  {
    slug: "changsure",
    title: "ChangSure",
    shortDescription: {
      en: "A senior capstone home-service booking platform connecting customers with technicians. Built with a Go backend and microservices.",
      th: "แพลตฟอร์มจองช่างซ่อมแซมบ้านในระดับชุมชนสำหรับโปรเจกต์จบการศึกษา เชื่อมโยงลูกค้ากับช่างในท้องถิ่น พัฒนาด้วย Go backend และไมโครเซอร์วิส"
    },
    description: {
      en: "ChangSure is a year 4 senior capstone home-service booking platform that connects customers with local technicians. The system supports the complete service workflow including technician registration, document verification, service discovery, schedule bookings, WebSocket chat, background email notifications, and Omise payments. As the sole Backend, Database, and Infrastructure Developer on this team project, I designed and built the entire core backend services, relational schema database, and VM deployment network.",
      th: "ChangSure เป็นแพลตฟอร์มจองช่างซ่อมแซมบ้านสำหรับโครงงานวิจัยจบปีที่ 4 ที่เชื่อมโยงลูกค้ากับช่างเทคนิคในพื้นที่ ระบบรองรับขั้นตอนการบริการที่ครบวงจร ได้แก่ การลงทะเบียนช่าง การยืนยันเอกสาร การค้นหาบริการ การจองเวลาทำงาน ระบบแชทเรียลไทม์ผ่าน WebSocket การแจ้งเตือนอีเมลพื้นหลัง และการชำระเงินผ่าน Omise ในฐานะนักพัฒนา Backend, Database และ Infrastructure เพียงคนเดียวในโปรเจกต์กลุ่มนี้ ผมออกแบบและสร้างบริการหลังบ้านหลักทั้งหมด โครงสร้างฐานข้อมูลเชิงสัมพันธ์ และเครือข่ายการนำระบบขึ้นใช้งานบน Virtual Machine"
    },
    thumbnail: "/images/projects/changsure-cover.svg",
    category: "featured",
    tags: ["Go", "GORM", "MySQL", "Docker", "REST API"],
    role: {
      en: "Backend, Database & Infrastructure Developer",
      th: "นักพัฒนา Backend, ฐานข้อมูล และระบบโครงสร้างพื้นฐาน"
    },
    ownership: {
      en: "Solely responsible for the backend architecture, REST API design, database design, deployment infrastructure, and container network configuration.",
      th: "รับผิดชอบคนเดียวในส่วนของสถาปัตยกรรม backend, การออกแบบ REST API, การออกแบบฐานข้อมูล, ระบบสำหรับ deploy และการกำหนดค่าเครือข่ายคอนเทนเนอร์"
    },
    period: {
      en: "October 2025 – May 2026",
      th: "ตุลาคม 2568 – พฤษภาคม 2569"
    },
    status: {
      en: "Completed Year 4 Senior Capstone Project",
      th: "โปรเจกต์จบการศึกษาปีที่ 4 เสร็จสิ้นสมบูรณ์"
    },
    contributions: [
      {
        area: {
          en: "Backend Architecture & REST APIs",
          th: "สถาปัตยกรรม Backend และ REST API"
        },
        details: [
          {
            en: "Developed modular REST APIs using Go, Fiber v3, and GORM to handle core workflows.",
            th: "พัฒนาโครงสร้างโมดูล REST API โดยใช้ภาษา Go, Fiber v3 และ GORM เพื่อจัดการขั้นตอนการทำงานหลัก"
          },
          {
            en: "Implemented JWT authentication, account verification, and secure password-reset routes.",
            th: "พัฒนาระบบยืนยันตัวตนด้วย JWT, การยืนยันบัญชีผู้ใช้ และการจัดการเส้นทางรีเซ็ตรหัสผ่านอย่างปลอดภัย"
          },
          {
            en: "Coded booking lifecycle state transitions enforcing PENDING, ACCEPTED, IN_PROGRESS, WAITING_PAYMENT, COMPLETED, REJECTED, and CANCELLED states.",
            th: "พัฒนาตรรกะสถานะวงจรชีวิตการจอง บังคับใช้สถานะ PENDING, ACCEPTED, IN_PROGRESS, WAITING_PAYMENT, COMPLETED, REJECTED และ CANCELLED"
          }
        ]
      },
      {
        area: {
          en: "Database Analysis & Design",
          th: "การวิเคราะห์และการออกแบบฐานข้อมูล"
        },
        details: [
          {
            en: "Designed a normalized MySQL relational database schema containing 32 tables in 3rd Normal Form (3NF).",
            th: "ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ MySQL ที่ผ่านการ Normalize ในรูปแบบบรรทัดฐานขั้นที่ 3 (3NF) ประกอบด้วย 32 ตาราง"
          },
          {
            en: "Supported database migrations, environment configurations, and GORM relational persistences.",
            th: "จัดการระบบการปรับเปลี่ยนฐานข้อมูล (Migration), การตั้งค่าสภาพแวดล้อม และความเชื่อมโยงของข้อมูลผ่าน GORM"
          }
        ]
      },
      {
        area: {
          en: "Systems & Service Integrations",
          th: "การรวมระบบและไมโครเซอร์วิส"
        },
        details: [
          {
            en: "Integrated Omise Payment SDK for billing, WebSocket for real-time messages, and background mailer workers.",
            th: "เชื่อมต่อ Omise Payment SDK สำหรับระบบชำระเงิน, เชื่อมต่อ WebSocket สำหรับการส่งข้อความเรียลไทม์ และระบบเบื้องหลังสำหรับจัดส่งอีเมล"
          },
          {
            en: "Integrated MinIO object storage for document and technician uploads.",
            th: "เชื่อมต่อ MinIO object storage สำหรับการจัดเก็บไฟล์เอกสารและการอัปโหลดรูปภาพของช่าง"
          },
          {
            en: "Integrated Python-based OCR microservice for technician document verification, initially using PaddleOCR and later migrating to EasyOCR (the current codebase implementation).",
            th: "เชื่อมโยงบริการไมโครเซอร์วิส OCR ที่เขียนด้วย Python สำหรับตรวจสอบเอกสารช่าง โดยเริ่มแรกใช้ PaddleOCR และต่อมาได้ย้ายไปใช้ EasyOCR (ซึ่งเป็นเวอร์ชันปัจจุบันในโค้ดเบส)"
          }
        ]
      },
      {
        area: {
          en: "Infrastructure & Networking",
          th: "ระบบโครงสร้างพื้นฐานและเครือข่าย"
        },
        details: [
          {
            en: "Configured multi-container builds using Docker and Docker Compose.",
            th: "กำหนดค่าระบบรวมคอนเทนเนอร์ (Multi-container build) โดยใช้ Docker และ Docker Compose"
          },
          {
            en: "Deployed services to a Linux Virtual Machine, configuring a reverse proxy and HTTPS/TLS configuration.",
            th: "นำระบบขึ้นใช้งานบน Linux Virtual Machine โดยกำหนดค่าตัวแทนพร็อกซีย้อนกลับ (Reverse proxy) และระบบความปลอดภัย HTTPS/TLS"
          }
        ]
      }
    ],
    features: [
      {
        text: {
          en: "Technician calendar availability and time-slot scheduling",
          th: "ตารางเวลาที่พร้อมทำงานของช่างเทคนิคและการจองคิวตามสล็อตเวลา"
        }
      },
      {
        text: {
          en: "Geographic search and matching of home-service technicians",
          th: "การค้นหาตามตำแหน่งภูมิศาสตร์และการจับคู่ช่างซ่อมแซมกับลูกค้า"
        }
      },
      {
        text: {
          en: "OMISE payment gateway integration with booking state integration",
          th: "การรวมระบบชำระเงิน OMISE เข้ากับสถานะการจองงานซ่อมแซม"
        }
      },
      {
        text: {
          en: "MinIO-based file uploads linked with verification workflows",
          th: "การอัปโหลดไฟล์ในระบบ MinIO เชื่อมโยงเข้ากับขั้นตอนการตรวจสอบความถูกต้อง"
        }
      },
      {
        text: {
          en: "Real-time client-technician chat and notifications via WebSocket",
          th: "ระบบแชทสดเรียลไทม์ระหว่างลูกค้ากับช่างและการแจ้งเตือนผ่าน WebSocket"
        }
      }
    ],
    exclusions: [
      {
        en: "I was responsible for the backend, database, infrastructure, and network configuration. The Flutter client and Next.js administrative interface were developed by other team members.",
        th: "ผมรับผิดชอบเฉพาะส่วน backend, ฐานข้อมูล, โครงสร้างพื้นฐาน และเครือข่ายคอนเทนเนอร์ ส่วนตัวแอปพลิเคชันฝั่งมือถือที่เขียนด้วย Flutter และส่วนเว็บผู้ดูแลระบบที่เขียนด้วย Next.js ถูกพัฒนาโดยสมาชิกคนอื่นในทีม"
      }
    ],
    links: [
      {
        type: "repository",
        label: {
          en: "View Repository",
          th: "ดูคลังเก็บโค้ด"
        },
        url: "https://github.com/arinsuda/INT371-Capstone",
        isExternal: true
      },
      {
        type: "showcase",
        label: {
          en: "View Project Showcase",
          th: "ดูหน้าแสดงผลงานโปรเจกต์"
        },
        url: "https://seniorproject.sit.kmutt.ac.th/showproject/IT65-BU42",
        isExternal: true
      }
    ],
    technologies: [
      "Go",
      "Fiber v3",
      "GORM",
      "MySQL 8",
      "Redis",
      "MinIO",
      "Docker",
      "Docker Compose",
      "EasyOCR (current)",
      "PaddleOCR (previous)",
      "Omise SDK",
      "WebSocket"
    ],
    gallery: [
      {
        id: "changsure-1",
        src: "/images/projects/changsure/gallery/changsure-1.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary ChangSure project image placeholder 1",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ ChangSure 1"
        },
        caption: {
          en: "System architecture block diagram visualization placeholder",
          th: "แผนภาพแสดงโครงสร้างสถาปัตยกรรมของระบบ ChangSure"
        }
      },
      {
        id: "changsure-2",
        src: "/images/projects/changsure/gallery/changsure-2.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary ChangSure project image placeholder 2",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ ChangSure 2"
        },
        caption: {
          en: "Database ER diagram containing 32 relational tables layout",
          th: "โครงสร้างฐานข้อมูลเชิงสัมพันธ์แสดงความสัมพันธ์ทั้ง 32 ตาราง"
        }
      },
      {
        id: "changsure-3",
        src: "/images/projects/changsure/gallery/changsure-3.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary ChangSure project image placeholder 3",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ ChangSure 3"
        },
        caption: {
          en: "RESTful API request-response schema documentation overview",
          th: "เอกสารสรุปรายการและการกำหนดค่าของ RESTful API ในระบบ"
        }
      },
      {
        id: "changsure-4",
        src: "/images/projects/changsure/gallery/changsure-4.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary ChangSure project image placeholder 4",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ ChangSure 4"
        },
        caption: {
          en: "Technician document verification flow using Python OCR service",
          th: "ลำดับการทำงานของการตรวจเอกสารผ่านไมโครเซอร์วิส OCR"
        }
      },
      {
        id: "changsure-5",
        src: "/images/projects/changsure/gallery/changsure-5.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary ChangSure project image placeholder 5",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ ChangSure 5"
        },
        caption: {
          en: "Docker containers network configuration topology layout",
          th: "การเชื่อมโยงระบบคอนเทนเนอร์และพร็อกซีบน Virtual Machine"
        }
      }
    ]
  },
  {
    slug: "remov",
    title: "REMOV",
    shortDescription: {
      en: "A solo personal movie and TV community review discovery platform built with Vue 3, Go Fiber, and GORM.",
      th: "แพลตฟอร์มชุมชนรีวิวและค้นพบภาพยนตร์/ซีรีส์แบบเดี่ยว พัฒนาด้วย Vue 3, Go Fiber และ GORM"
    },
    description: {
      en: "REMOV is a solo personal project designed as a community hub for movie and TV enthusiasts to publish media reviews, track personal libraries, and connect. The prototype utilizes a Go Fiber backend service alongside GORM, PostgreSQL, and MinIO object storage, with a Vue 3 Composition API client. It is under active, ongoing development.",
      th: "REMOV เป็นโปรเจกต์ส่วนตัวที่ทำขึ้นคนเดียว ออกแบบมาเป็นศูนย์กลางชุมชนสำหรับผู้ชื่นชอบภาพยนตร์และรายการทีวีเพื่อแบ่งปันความคิดเห็น ติดตามรายการรับชม และสร้างปฏิสัมพันธ์ร่วมกัน ตัวระบบต้นแบบพัฒนาโดยใช้ Go Fiber และ GORM ในส่วนของ backend ร่วมกับ PostgreSQL และ MinIO ในขณะที่ฝั่งผู้ใช้งานพัฒนาด้วย Vue 3 Composition API ปัจจุบันระบบยังอยู่ภายใต้กระบวนการพัฒนาอย่างต่อเนื่อง"
    },
    thumbnail: "/images/projects/remov-cover.svg",
    category: "featured",
    tags: ["Vue 3", "Go", "PostgreSQL", "Vite", "REST API"],
    role: {
      en: "Product Owner & Full-Stack Developer",
      th: "เจ้าของผลิตภัณฑ์และนักพัฒนา Full-Stack"
    },
    ownership: {
      en: "Responsible for the complete product idea, requirements and feature planning, frontend client, backend APIs, relational database design, authentication, infrastructure configuration, and ongoing maintenance.",
      th: "รับผิดชอบทั้งหมดตั้งแต่แนวคิดผลิตภัณฑ์ การวางแผนฟีเจอร์ ส่วนติดต่อผู้ใช้งาน ฝั่งระบบ API โครงสร้างฐานข้อมูลเชิงสัมพันธ์ ระบบตรวจสอบสิทธิ์ การตั้งค่าระบบ และการดูแลรักษาต่อเนื่อง"
    },
    period: {
      en: "Active Development",
      th: "อยู่ระหว่างการพัฒนา"
    },
    status: {
      en: "Working Prototype — Active Development",
      th: "ระบบต้นแบบที่พร้อมใช้งาน — อยู่ระหว่างพัฒนาเพิ่มเติม"
    },
    contributions: [
      {
        area: {
          en: "Product & Architecture Design",
          th: "การออกแบบผลิตภัณฑ์และสถาปัตยกรรม"
        },
        details: [
          {
            en: "Conceptualized features, mapped database entities, and developed clean modular Go Fiber backend APIs.",
            th: "คิดค้นแนวทางการทำงาน วางรูปแบบเอนทิตีฐานข้อมูล และพัฒนาโครงสร้าง API หลังบ้านด้วย Go Fiber ที่เป็นระเบียบเรียบร้อย"
          },
          {
            en: "Coded reactive client interface views using Vue 3 Composition API and Pinia state management.",
            th: "พัฒนาส่วนหน้าจอแอปพลิเคชันแบบตอบสนองสูงโดยใช้ Vue 3 Composition API และจัดการสถานะด้วย Pinia"
          },
          {
            en: "Dockerized the client and server databases for unified local orchestration.",
            th: "จัดทำคอนเทนเนอร์ Docker สำหรับไคลเอนต์ เซิร์ฟเวอร์ และฐานข้อมูลเพื่อความสะดวกในการรันบนระบบจำลองโลคอล"
          }
        ]
      }
    ],
    features: [
      {
        text: {
          en: "Core movie and TV review workflow (writing and publishing reviews)",
          th: "ระบบหลักสำหรับการเขียนและเผยแพร่ความคิดเห็นต่อภาพยนตร์และรายการทีวี"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "User credentials authentication, password recovery, and email verification",
          th: "ระบบลงทะเบียนผู้ใช้งาน การกู้คืนรหัสผ่าน และการยืนยันตัวตนผ่านอีเมล"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Movie and TV browsing integrated with TMDB API",
          th: "การค้นหาข้อมูลรายละเอียดภาพยนตร์และรายการทีวีเชื่อมโยงกับ TMDB API"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Personal library management (Watchlist, Watched list)",
          th: "การจัดการคลังข้อมูลส่วนตัว (รายการที่วางแผนจะดู และรายการที่รับชมแล้ว)"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Likes on reviews and media details",
          th: "ระบบการกดไลก์ให้กับโพสต์รีวิวและรายละเอียดรายการภาพยนตร์"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Follow/Unfollow user connection system",
          th: "ระบบสร้างการติดตามระหว่างผู้ใช้งานในแพลตฟอร์ม"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Achievement unlocks system and notification records",
          th: "ระบบปลดล็อกความสำเร็จและบันทึกข้อมูลประวัติการแจ้งเตือน"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Analytical user and media stats modules",
          th: "ระบบวิเคราะห์ข้อมูลและแสดงสถิติประวัติการชมของผู้ใช้"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "MinIO file uploading for profile media",
          th: "การใช้ระบบเก็บข้อมูลไฟล์ MinIO สำหรับรูปโปรไฟล์และภาพมีเดียต่างๆ"
        },
        status: "confirmed"
      },
      {
        text: {
          en: "Review experience improvements and content discovery UI adjustments",
          th: "การปรับปรุงประสบการณ์การเขียนรีวิวและรูปแบบการค้นพบเนื้อหาในหน้า UI"
        },
        status: "in-development"
      },
      {
        text: {
          en: "Social activity feeds and activity privacy controls",
          th: "ฟีดกิจกรรมโซเชียลและการปรับแต่งความเป็นส่วนตัวของกิจกรรมส่วนบุคคล"
        },
        status: "in-development"
      },
      {
        text: {
          en: "Custom watch order paths (Movie Routes) that users can save and fork",
          th: "ฟังก์ชันเส้นทางการรับชมภาพยนตร์ตามใจชอบ (Movie Routes) เพื่อให้ผู้ใช้เซฟและคัดลอกไปปรับแต่งได้"
        },
        status: "planned"
      },
      {
        text: {
          en: "Episode discussions for TV shows, comment voting, and gamified badges",
          th: "หัวข้อพูดคุยเจาะลึกเฉพาะเอพพิโซดของทีวีโชว์ ระบบโหวตความคิดเห็น และเหรียญรางวัลแบบเกม"
        },
        status: "planned"
      }
    ],
    links: [
      {
        type: "repository",
        label: {
          en: "View Repository",
          th: "ดูคลังเก็บโค้ด"
        },
        url: "https://github.com/arinsuda/movie-hub-official",
        isExternal: true
      }
    ],
    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vite",
      "Go Fiber v3",
      "GORM",
      "PostgreSQL",
      "MinIO",
      "Docker Compose",
      "TMDB API",
      "Socket.IO"
    ],
    gallery: [
      {
        id: "remov-1",
        src: "/images/projects/remov/gallery/remov-1.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary REMOV project image placeholder 1",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ REMOV 1"
        },
        caption: {
          en: "User dashboard and movie library tracking view wireframe layout",
          th: "แผนผังหน้าแรกและการติดตามคลังภาพยนตร์ส่วนตัวของผู้ใช้"
        }
      },
      {
        id: "remov-2",
        src: "/images/projects/remov/gallery/remov-2.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary REMOV project image placeholder 2",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ REMOV 2"
        },
        caption: {
          en: "Social activity feed and user interactions structure placeholder",
          th: "โครงสร้างสำหรับฟีดข้อมูลและกิจกรรมการเชื่อมโยงกับเพื่อน"
        }
      },
      {
        id: "remov-3",
        src: "/images/projects/remov/gallery/remov-3.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary REMOV project image placeholder 3",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ REMOV 3"
        },
        caption: {
          en: "Movie Routes watch order creation wireframe editor layout",
          th: "แบบร่างโครงสร้างเครื่องมือจัดทัวร์เส้นทางดูหนังด้วยตนเอง"
        }
      },
      {
        id: "remov-4",
        src: "/images/projects/remov/gallery/remov-4.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary REMOV project image placeholder 4",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ REMOV 4"
        },
        caption: {
          en: "Achievement badges list and stats analytics interface placeholder",
          th: "หน้ารวมเหรียญรางวัลเกียรติยศและข้อมูลสถิติประวัติการรับชม"
        }
      },
      {
        id: "remov-5",
        src: "/images/projects/remov/gallery/remov-5.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary REMOV project image placeholder 5",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ REMOV 5"
        },
        caption: {
          en: "Go Fiber backend modular package architecture structure layout",
          th: "การวางโครงสร้างโมดูลาร์หลังบ้านด้วยภาษา Go และ GORM"
        }
      }
    ]
  },
  {
    slug: "kradan-kanban",
    title: "Kradan Kanban",
    shortDescription: {
      en: "A task-board management application for developer teams. Developed with Java Spring Boot and Spring Security.",
      th: "แอปพลิเคชันบริหารจัดการบอร์ดงานทีมพัฒนาซอฟต์แวร์ พัฒนาโดยใช้ Java Spring Boot และ Spring Security"
    },
    description: {
      en: "Kradan Kanban is a year 3 academic team project delivering a task management web application. It supports collaborator boards, columns ordering, task creations, and permission controls. My individual work was centered on the backend services layers, relational mappings, and Spring Security integration.",
      th: "Kradan Kanban เป็นโครงการแบบกลุ่มวิชาเรียนปี 3 ในการสร้างเว็บแอปพลิเคชันจัดการงานแบบคัมบัง รองรับการเชิญสมาชิกเข้าบอร์ดงาน การจัดระเบียบลำดับคอลัมน์ การสร้างงาน และการกำหนดระดับสิทธิ์ควบคุมการแก้ไขงาน ผลงานส่วนบุคคลของผมเน้นไปที่การสร้างบริการระบบฝั่งหลังบ้าน การเชื่อมความสัมพันธ์ตารางข้อมูลเชิงวัตถุ และการรวมระบบความปลอดภัยด้วย Spring Security"
    },
    thumbnail: "/images/projects/kradan-kanban-cover.svg",
    category: "additional",
    tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JPA"],
    role: {
      en: "Backend Developer",
      th: "นักพัฒนา Backend"
    },
    ownership: {
      en: "Responsible for backend architectures, MySQL relational database design, and Spring Security authorization middleware.",
      th: "รับผิดชอบในส่วนโครงสร้าง backend, การออกแบบฐานข้อมูลเชิงสัมพันธ์ MySQL และซอฟต์แวร์กรองข้อมูลระดับสิทธิ์ Spring Security"
    },
    period: {
      en: "Year 3 Academic Project",
      th: "โปรเจกต์วิชาเรียนปีที่ 3"
    },
    status: {
      en: "Completed Academic Project",
      th: "โปรเจกต์วิชาเรียนเสร็จสมบูรณ์"
    },
    contributions: [
      {
        area: {
          en: "Backend APIs & Security",
          th: "ความปลอดภัยและ API หลังบ้าน"
        },
        details: [
          {
            en: "Architected backend REST APIs using Java 17 and Spring Boot.",
            th: "สถาปัตยกรรม REST API ฝั่งเซิร์ฟเวอร์โดยใช้ Java 17 และ Spring Boot"
          },
          {
            en: "Configured Spring Security and implemented JWT authentication filters.",
            th: "กำหนดสิทธิ์ความปลอดภัย Spring Security และใช้ตัวกรองสำหรับการตรวจสอบด้วย JWT"
          },
          {
            en: "Coded database CRUD actions, query validations, structured exceptions handling, and transaction management.",
            th: "เขียนตรรกะสำหรับการทำ CRUD บนฐานข้อมูล การดึงข้อมูลที่มีการตรวจสอบ ข้อผิดพลาดที่เป็นระบบ และระบบจัดการธุรกรรม"
          }
        ]
      },
      {
        area: {
          en: "Database Mappings",
          th: "การแมปโครงสร้างฐานข้อมูล"
        },
        details: [
          {
            en: "Mapped database relational tables using Spring Data JPA and Hibernate.",
            th: "ทำ Object Relational Mapping (ORM) เพื่อเชื่อมโยงฐานข้อมูลโดยใช้ Spring Data JPA และ Hibernate"
          },
          {
            en: "Supported frontend integration and API endpoint alignments.",
            th: "สนับสนุนทีมพัฒนาฝั่งไคลเอนต์ในการรวบรวมระบบและปรับพารามิเตอร์ของ endpoint"
          }
        ]
      }
    ],
    features: [
      {
        text: {
          en: "Board sharing permissions and workspace collaborators management",
          th: "การแชร์สิทธิ์การเข้าถึงบอร์ดคัมบังและการจัดการสมาชิกในบอร์ดงาน"
        }
      },
      {
        text: {
          en: "Column status progression and card order constraints",
          th: "ระบบแสดงลำดับขั้นตอนคอลัมน์การทำงานและการลากการ์ดงานตามสิทธิ์การจอง"
        }
      },
      {
        text: {
          en: "Task details CRUD, validation, and subtask timelines mapping",
          th: "การจัดการข้อมูลการ์ดรายละเอียดของงาน ข้อผิดพลาดและการนำเสนอบอร์ดงานตามช่วงเวลา"
        }
      }
    ],
    exclusions: [
      {
        en: "I worked primarily on the backend. The Vue frontend and proxy configuration were team contributions and are not presented as my individual work.",
        th: "ผมเน้นรับผิดชอบฝั่งระบบหลังบ้านเป็นหลัก ส่วนของระบบหน้าบ้านที่เขียนด้วย Vue และการตั้งค่าตัวพร็อกซีการเดินเส้นทางเป็นการทำงานร่วมกันของทีม ไม่ได้นำเสนอเป็นผลงานเดี่ยวของผม"
      }
    ],
    links: [
      {
        type: "team-repository",
        label: {
          en: "View Team Repository",
          th: "ดูคลังเก็บโค้ดทีมงาน"
        },
        url: "https://github.com/ssarunyu/INT221-SSA3-Integrated",
        isExternal: true,
        ownershipNote: {
          en: "Public team repository maintained under a teammate’s GitHub account.",
          th: "คลังจัดเก็บโค้ดสาธารณะของกลุ่ม พัฒนาและดูแลภายใต้สิทธิ์บัญชีของสมาชิกในทีม"
        }
      }
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "JWT",
      "Docker"
    ],
    gallery: [
      {
        id: "kradan-kanban-1",
        src: "/images/projects/kradan-kanban/gallery/kradan-kanban-1.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary Kradan Kanban project image placeholder 1",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ Kradan Kanban 1"
        },
        caption: {
          en: "Kanban board layout and tasks cards visualization placeholder",
          th: "ภาพโครงสร้างคอลัมน์และการ์ดจัดการกระบวนการทำงาน"
        }
      },
      {
        id: "kradan-kanban-2",
        src: "/images/projects/kradan-kanban/gallery/kradan-kanban-2.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary Kradan Kanban project image placeholder 2",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ Kradan Kanban 2"
        },
        caption: {
          en: "Spring Boot Controller-Service-Repository layered flow structure placeholder",
          th: "แผนภูมิแสดงลำดับชั้นข้อมูลจาก Controller ไประดับฐานข้อมูลด้วย JPA"
        }
      },
      {
        id: "kradan-kanban-3",
        src: "/images/projects/kradan-kanban/gallery/kradan-kanban-3.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary Kradan Kanban project image placeholder 3",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ Kradan Kanban 3"
        },
        caption: {
          en: "Spring Security filter chain pipeline architecture placeholder",
          th: "แผนผังการไหลของระบบตรวจสอบสิทธิ์ผ่านด่านตรวจ JWT Security"
        }
      },
      {
        id: "kradan-kanban-4",
        src: "/images/projects/kradan-kanban/gallery/kradan-kanban-4.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary Kradan Kanban project image placeholder 4",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ Kradan Kanban 4"
        },
        caption: {
          en: "MySQL database tables layout schema mapping configuration placeholder",
          th: "ความสัมพันธ์ระหว่างตารางงาน ตารางบอร์ด และระดับสิทธิ์ของกลุ่มผู้ร่วมงาน"
        }
      },
      {
        id: "kradan-kanban-5",
        src: "/images/projects/kradan-kanban/gallery/kradan-kanban-5.svg",
        isPlaceholder: true,
        alt: {
          en: "Temporary Kradan Kanban project image placeholder 5",
          th: "รูปตัวอย่างชั่วคราวของโปรเจกต์ Kradan Kanban 5"
        },
        caption: {
          en: "API endpoint lists validation and exception responses overview",
          th: "แบบร่างเอกสารการทดสอบระบบส่งกลับข้อผิดพลาดที่มีการควบคุมรูปแบบ"
        }
      }
    ]
  },
  {
    slug: "landeklen",
    title: "LANDEKLEN",
    shortDescription: {
      en: "A client-side virtual pet browser game utilizing Vue 3 reactive states, timers, and local browser storage.",
      th: "เกมเลี้ยงสัตว์จำลองรันบนเบราว์เซอร์ฝั่งไคลเอนต์ พัฒนาด้วย Vue 3 ตัวนับเวลา และพื้นที่จัดเก็บโลคอล"
    },
    description: {
      en: "LANDEKLEN is a year 2 academic team project creating a client-side virtual pet game. It simulates pet state reductions, level progress, responsive status loaders, and volume configurations. My contribution focused on the core play mechanisms, reactivity layout, and local client utilities.",
      th: "LANDEKLEN เป็นโปรเจกต์กลุ่มงานวิชาเรียนชั้นปีที่ 2 ในการสร้างเกมจำลองเลี้ยงสัตว์แบบเสมือนจริงฝั่งไคลเอนต์ ตัวเกมจำลองอัตราการลดสถานะของสัตว์เลี้ยง การเก็บเลเวลแถบแถบความคืบหน้า รวมถึงแผงควบคุมระดับเสียง ผลงานที่รับผิดชอบของผมเน้นไปที่กลไกการเล่นหลัก แผนผังความตอบสนอง และฟังก์ชันเสริมการเก็บข้อมูลลงเบราว์เซอร์"
    },
    thumbnail: "/images/projects/landeklen-cover.svg",
    category: "additional",
    tags: ["Vue 3", "JavaScript", "HTML5", "CSS3", "Client-side"],
    role: {
      en: "Frontend Developer",
      th: "นักพัฒนา Frontend"
    },
    ownership: {
      en: "Designed and implemented interactive pet play states, status timers, level progression logic, and audio controller components.",
      th: "ออกแบบและนำไปใช้จริงในเรื่องปุ่มโต้ตอบสัตว์เลี้ยง วงจรเวลาจับสถานะ ตรรกะเลเวลความก้าวหน้า และโมดูลสำหรับปรับเล่นเสียง"
    },
    period: {
      en: "2024",
      th: "2567"
    },
    status: {
      en: "Completed Academic Project",
      th: "โปรเจกต์วิชาเรียนเสร็จสมบูรณ์"
    },
    contributions: [
      {
        area: {
          en: "Reactivity & Local Storage Logic",
          th: "ความตอบสนองและตรรกะคลังข้อมูลเบราว์เซอร์"
        },
        details: [
          {
            en: "Built randomized value shifts for hunger, energy, and experience display bounds capped at 100%.",
            th: "สร้างระบบสุ่มการเปลี่ยนค่าของความหิว พลังงาน และการเก็บคะแนนเลเวลสูงสุดไม่เกิน 100%"
          },
          {
            en: "Programmed state progression logic reading local JSON configurations.",
            th: "เขียนสคริปต์ระบบประมวลความคืบหน้าของตัวเกมโดยการโหลดการตั้งค่าไฟล์ JSON จากในเครื่อง"
          },
          {
            en: "Created a reusable activity log timeline listing pet events sequentially.",
            th: "พัฒนาแถบล็อกรายการกิจกรรมแบบใช้ซ้ำได้เพื่อแจกแจงพฤติกรรมสัตว์เลี้ยงตามช่วงเวลา"
          }
        ]
      },
      {
        area: {
          en: "Audio Interface Widgets",
          th: "เครื่องมือโต้ตอบส่วนควบคุมเสียง"
        },
        details: [
          {
            en: "Programmed background audio loop playbacks, mute toggles, and customized slider volume level controls using browser Audio APIs.",
            th: "พัฒนาฟังก์ชันการเล่นเพลงวนรอบ ปิดเสียงชั่วขณะ และระดับแถบความเข้มเสียงโดยใช้เบราว์เซอร์ Audio API"
          }
        ]
      }
    ],
    features: [
      {
        text: {
          en: "Client-side pet status timers and reactive variables tracking hunger and energy",
          th: "ตัวนับเวลาความเปลี่ยนแปลงของสัตว์เลี้ยง และการตอบสนองแถบความหิวและพลังงาน"
        }
      },
      {
        text: {
          en: "Level progressions utilizing locally stored JSON configurations",
          th: "การประมวลเลเวลระดับพัฒนาการโดยใช้การตั้งค่าไฟล์ JSON จากไคลเอนต์"
        }
      },
      {
        text: {
          en: "Custom looping music player with volume slider and mute controls",
          th: "ตัวเล่นดนตรีพื้นหลังแบบวนซ้ำพร้อมสวิตช์ปิดเสียงและแถบเลื่อนความดัง"
        }
      }
    ],
    exclusions: [
      {
        en: "Food selection, Sleep functionality, Username Setup, and other team features are not presented as my individual work.",
        th: "ส่วนของทางเลือกประเภทอาหาร การกดส่งสัตว์หลับ ฟังก์ชันตั้งชื่อผู้ใช้ และความสามารถอื่นๆ เป็นผลงานของเพื่อนร่วมทีม ไม่ใช่งานของผมโดยตรง"
      }
    ],
    links: [
      {
        type: "live-demo",
        label: {
          en: "Play Live Demo",
          th: "ทดลองเล่นตัวเกม"
        },
        url: "https://deft-cascaron-50c897.netlify.app/",
        isExternal: true
      }
    ],
    confidentialityNote: {
      en: "Team repository is not publicly accessible.",
      th: "คลังรวบรวมโค้ดกลุ่มของวิชานี้ถูกจำกัดเป็นความลับส่วนบุคคล"
    },
    technologies: [
      "Vue 3",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Local JSON configuration",
      "Browser Audio APIs"
    ],
    gallery: [
    ]
  }
];
