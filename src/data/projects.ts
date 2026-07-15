import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "changsure",
    title: "ChangSure",
    shortDescription: "A senior capstone home-service booking platform connecting customers with technicians. Built with a Go backend and microservices.",
    description: "ChangSure is a multi-service platform designed to streamline home-service bookings. It handles the complete workflow including technician registration, document verification, geographic matching, schedule bookings, WebSocket chat, background mail alerts, reviews, and Omise payments. As the sole Backend, Database, and Infrastructure Developer, I was responsible for the modular Go backend application, 32-table database schema design, containerized deployment, and secure networking.",
    thumbnail: "/images/projects/changsure-cover.svg",
    category: "featured",
    tags: ["Go", "GORM", "MySQL", "Docker", "REST API"],
    role: "Backend, Database & Infrastructure Developer",
    ownership: "Solely responsible for the backend architecture, database design, deployment infrastructure, and container network configuration.",
    period: "October 2025 – May 2026",
    status: "Completed Year 4 Senior Capstone Project",
    contributions: [
      {
        area: "Backend Core Service & APIs",
        details: [
          "Developed modular REST APIs using Go Fiber v3 and GORM for core business flows.",
          "Implemented JWT authentication, password resets, email verification, and authorization middleware.",
          "Coded booking workflow state transitions handling PENDING, ACCEPTED, IN_PROGRESS, WAITING_PAYMENT, COMPLETED, REJECTED, and CANCELLED states."
        ]
      },
      {
        area: "Database Architecture",
        details: [
          "Designed a 3rd Normal Form (3NF) relational database schema containing 32 tables in MySQL.",
          "Defined integrity constraints, indexing strategies, and relational entity mappings with GORM."
        ]
      },
      {
        area: "Service Integrations",
        details: [
          "Integrated Omise Payment SDK for transactional flows, WebSocket for real-time messaging, and background mail queue workers.",
          "Integrated MinIO object storage for document and profile uploads.",
          "Integrated Python-based OCR microservice for technician document verification, initially using PaddleOCR and later migrating to EasyOCR."
        ]
      },
      {
        area: "Infrastructure & Networking",
        details: [
          "Configured multi-container development and production builds using Docker and Docker Compose.",
          "Deployed the system on a Linux virtual machine and configured reverse proxy and HTTPS/TLS configuration."
        ]
      }
    ],
    features: [
      { text: "Technician calendar availability and time-slot scheduling" },
      { text: "Geographic search and matching of home-service technicians" },
      { text: "OMISE payment gateway integration with booking state integration" },
      { text: "MinIO-based file uploads linked with verification workflows" },
      { text: "Real-time client-technician chat and notifications via WebSocket" }
    ],
    exclusions: [
      "Did not implement the Flutter mobile client application.",
      "Did not implement the Next.js React administrative frontend panel."
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arinsuda/INT371-Capstone",
        type: "github"
      }
    ],
    technologies: [
      "Go",
      "Fiber v3",
      "GORM",
      "MySQL",
      "Redis",
      "MinIO",
      "Docker",
      "Docker Compose",
      "EasyOCR (current)",
      "PaddleOCR (previous)",
      "Omise SDK",
      "WebSocket"
    ]
  },
  {
    slug: "remov",
    title: "REMOV",
    shortDescription: "A solo personal movie and TV community review discovery platform built with Vue 3, Go Fiber, and GORM.",
    description: "REMOV is a personal social platform for movie and TV enthusiasts to publish reviews, construct personalized watching routes, and discover media. It consists of a Go Fiber backend service utilizing GORM and PostgreSQL, combined with a Vue 3 Composition API client, deployed in a containerized environment.",
    thumbnail: "/images/projects/remov-cover.svg",
    category: "featured",
    tags: ["Vue 3", "Go", "PostgreSQL", "Vite", "REST API"],
    role: "Product Owner & Full-Stack Developer",
    ownership: "Complete product planning, database schema modeling, backend and frontend development.",
    period: "Active Development",
    status: "Working Prototype — Active Development",
    contributions: [
      {
        area: "Full-Stack Development",
        details: [
          "Developed backend REST APIs using Go, Fiber, and GORM with a PostgreSQL database.",
          "Coded reactive client-side interfaces using Vue 3 Composition API and Pinia state management.",
          "Configured environment properties and multi-service orchestration with Docker Compose."
        ]
      }
    ],
    features: [
      { text: "Core movie and TV review system (writing and publishing reviews)", status: "confirmed" },
      { text: "User credentials authentication, password resets, and email verification", status: "implemented" },
      { text: "Favorite-genre onboarding UI and media discovery integrated with TMDB API", status: "implemented" },
      { text: "Personal library management (Watchlist and Watched list)", status: "implemented" },
      { text: "Social connections (Follow/Unfollow) and activity feed updates", status: "in-development" },
      { text: "Granular privacy settings for activity sharing and responsive layout alignment", status: "in-development" },
      { text: "Custom watch order paths (Movie Routes) that users can create and fork", status: "planned" },
      { text: "Episode-level TV discussions, community comments, and reputation flags", status: "planned" }
    ],
    links: [],
    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vite",
      "Go",
      "Fiber",
      "GORM",
      "PostgreSQL",
      "MinIO",
      "Docker",
      "TMDB API"
    ]
  },
  {
    slug: "kradan-kanban",
    title: "Kradan Kanban",
    shortDescription: "A task-board management application for developer teams. Developed with Java Spring Boot and Spring Security.",
    description: "Kradan Kanban is an academic team project delivering a task management dashboard. It includes task boards, customizable columns, statuses, collaborator assignments, and security filters. My primary ownership was the design and implementation of the backend codebase, Spring Security configuration, and relational schema.",
    thumbnail: "/images/projects/kradan-kanban-cover.svg",
    category: "additional",
    tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JPA"],
    role: "Backend Developer",
    ownership: "Responsible for backend architectures, database schema design, and Spring Security implementations.",
    period: "Year 3 Academic Project",
    status: "Year 3 Academic Team Project",
    contributions: [
      {
        area: "Backend API & Security",
        details: [
          "Architected RESTful endpoints using Java 17 and Spring Boot 3.2.5.",
          "Implemented JWT authentication filters and security authorization rules in Spring Security.",
          "Coded database CRUD actions, query filtering, data validation rules, and unified exception handling."
        ]
      },
      {
        area: "Database Mapping",
        details: [
          "Designed MySQL database tables and mapped relational associations using Spring Data JPA and Hibernate."
        ]
      }
    ],
    features: [
      { text: "Collaborator access permissions and board workspace sharing" },
      { text: "Custom board column statuses with ordering rules" },
      { text: "Task details modeling, subtask tracking, and attachment mappings" }
    ],
    exclusions: [
      "Did not implement the frontend Vue 3 client application.",
      "Did not configure client-side proxy routing modules."
    ],
    links: [],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "JWT",
      "Docker"
    ]
  },
  {
    slug: "landeklen",
    title: "LANDEKLEN",
    shortDescription: "A client-side virtual pet browser game utilizing Vue 3 reactive states, timers, and local browser storage.",
    description: "LANDEKLEN is a web-based virtual pet game developed in a four-person team. It features status decays over time, level progressions, reactive width indicators, and audio/music configuration controllers.",
    thumbnail: "/images/projects/landeklen-cover.svg",
    category: "additional",
    tags: ["Vue 3", "JavaScript", "HTML5", "CSS3", "Client-side"],
    role: "Frontend Developer",
    ownership: "Designed and implemented pet interaction states, status timers, progression configurations, and audio widgets.",
    period: "2024",
    status: "Year 2 Academic Team Project",
    contributions: [
      {
        area: "Game Mechanics & Reactive UI",
        details: [
          "Programmed play interaction functions adjusting hunger/energy metrics and enforcing threshold state blocks.",
          "Designed level progression logic loading configurations from local JSON arrays.",
          "Coded dynamic width bindings for status progress bars capped at 100%."
        ]
      },
      {
        area: "Audio & Activity Logs",
        details: [
          "Built a reusable activity logger component outputting game actions sequentially.",
          "Implemented background music looping controls, mute toggles, and slider volume adjustments."
        ]
      }
    ],
    features: [
      { text: "Status tracking timers updating pet metrics periodically" },
      { text: "Interactive activities modifying pet level stats reactive variables" },
      { text: "Background music system with customized slider adjustments" }
    ],
    exclusions: [
      "Did not implement server-side database integration or API persistence.",
      "Did not implement the Food selection panel, Sleep state overlays, or initial Username input screens."
    ],
    links: [],
    technologies: [
      "Vue 3",
      "JavaScript",
      "Vite",
      "HTML5 Audio",
      "CSS Variables",
      "LocalStorage"
    ]
  }
];
