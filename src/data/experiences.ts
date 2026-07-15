import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "Stream I.T. Consulting Ltd. | Bangkok, Thailand",
    role: "Software Engineer Intern",
    position: "Frontend Developer",
    duration: "January 2025 – July 2025",
    location: "Bangkok, Thailand",
    description: "Contributed to ONE PLATFORM, an enterprise management system, as a member of a cross-functional Agile/Scrum team.",
    highlights: [
      { text: "Created the user interface and frontend CRUD flows for table-based payment management integrated with backend APIs." },
      { text: "Developed a CSV file import flow accepting Jira timeline data, created the timeline visualization, and resolved milestone modal issues." },
      { text: "Built Ticket list and creation screens based on Figma specs, integrating them with Ticket Service APIs and managing state with a Pinia store." },
      { text: "Coded the chatroom UI with dynamic behavior depending on user type, connecting it to backend APIs and adding ticket detail page navigation." },
      { text: "Corrected Cost Sheet calculation behavior using Decimal.js for precise numeric data handling across tabs and payloads." },
      { text: "Updated job access rules to support role-based permissions and refactored the role verification module." },
      { text: "Upgraded electronic signature flows supporting both image uploads and dynamic drawing canvas (Vue3 Signature Pad)." },
      { text: "Built executive dashboards and business data visualizations using Vue-ECharts." },
      { text: "Implemented live approval alerts utilizing Socket.IO." }
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
    confidentialityNote: "This project is proprietary enterprise software. Codebases, repository links, internal screenshots, client data, and Figma designs are confidential and not publicly available."
  }
];
