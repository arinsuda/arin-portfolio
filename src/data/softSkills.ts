import type { SoftSkill } from "../types";

export const softSkills: SoftSkill[] = [
  {
    id: "system-thinking",
    name: {
      en: "System Thinking",
      th: "คิดอย่างเป็นระบบ (System Thinking)"
    },
    description: {
      en: "Understands how APIs, databases, infrastructure, and user-facing features connect as one system.",
      th: "มองเห็นความเชื่อมโยงระหว่าง API ฐานข้อมูล โครงสร้างพื้นฐาน และฟีเจอร์ที่ผู้ใช้งานสัมผัสในภาพรวมของระบบ"
    },
    icon: "layers" // we will map this to a standard base icon
  },
  {
    id: "problem-solving",
    name: {
      en: "Problem Solving",
      th: "การแก้ปัญหา (Problem Solving)"
    },
    description: {
      en: "Breaks complex technical problems into smaller, verifiable steps and evaluates solutions before implementation.",
      th: "แยกปัญหาทางเทคนิคที่ซับซ้อนออกเป็นขั้นตอนที่ตรวจสอบได้ และพิจารณาทางเลือกก่อนลงมือพัฒนา"
    },
    icon: "code"
  },
  {
    id: "ownership",
    name: {
      en: "Ownership",
      th: "ความรับผิดชอบในงาน (Ownership)"
    },
    description: {
      en: "Takes responsibility for technical decisions and follows work through from design to deployment.",
      th: "รับผิดชอบต่อการตัดสินใจทางเทคนิคและดูแลงานตั้งแต่การออกแบบ ไปจนถึงการนำระบบขึ้นใช้งาน"
    },
    icon: "check"
  },
  {
    id: "critical-thinking",
    name: {
      en: "Critical Thinking",
      th: "การคิดเชิงวิพากษ์ (Critical Thinking)",
    },
    description: {
      en: "Questions design choices, validates assumptions, and looks beyond whether a feature merely works.",
      th: "ตั้งคำถามกับแนวทางการออกแบบ ตรวจสอบสมมติฐาน และมองไกลกว่าการทำให้ฟีเจอร์เพียงแค่ใช้งานได้"
    },
    icon: "search" // search/eye icon
  },
  {
    id: "continuous-learning",
    name: {
      en: "Continuous Learning",
      th: "การเรียนรู้อย่างต่อเนื่อง (Continuous Learning)"
    },
    description: {
      en: "Builds deeper understanding of unfamiliar technologies before applying them to production work.",
      th: "ให้ความสำคัญกับการทำความเข้าใจเทคโนโลยีใหมอย่างลึกซึ้ง ก่อนนำไปใช้กับงานจริง"
    },
    icon: "terminal"
  },
  {
    id: "collaboration",
    name: {
      en: "Collaboration",
      th: "การทำงานร่วมกัน (Collaboration)"
    },
    description: {
      en: "Works with frontend developers, designers, and team members while keeping technical responsibilities and ownership clear.",
      th: "ทำงานร่วมกับ Frontend Developer นักออกแบบ และสมาชิกทีม โดยแบ่งขอบเขตความรับผิดชอบทางเทคนิคอย่างชัดเจน"
    },
    icon: "users"
  },
  {
    id: "attention-to-detail",
    name: {
      en: "Attention to Detail",
      th: "ความใส่ใจในรายละเอียด (Attention to Detail)"
    },
    description: {
      en: "Reviews data flow, validation, edge cases, and implementation details to reduce avoidable errors.",
      th: "ตรวจสอบการไหลของข้อมูล Validation กรณีพิเศษ และรายละเอียดการพัฒนาเพื่อลดข้อผิดพลาดที่ป้องกันได้"
    },
    icon: "shield"
  }
];
