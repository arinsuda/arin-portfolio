import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "changsure",
    title: "ChangSure",
    shortDescription: "A senior capstone home-service booking platform connecting customers with technicians. Built with a Go backend and microservices.",
    description: "ChangSure is a year 4 senior capstone home-service booking platform that connects customers with local technicians. The system supports the complete service workflow including technician registration, document verification, service discovery, schedule bookings, WebSocket chat, background email notifications, and Omise payments. As the sole Backend, Database, and Infrastructure Developer on this team project, I designed and built the entire core backend services, relational schema database, and VM deployment network.",
    thumbnail: "/images/projects/changsure-cover.svg",
    category: "featured",
    tags: ["Go", "GORM", "MySQL", "Docker", "REST API"],
    role: "Backend, Database & Infrastructure Developer",
    ownership: "Solely responsible for the backend architecture, REST API design, database design, deployment infrastructure, and container network configuration.",
    period: "October 2025 – May 2026",
    status: "Completed Year 4 Senior Capstone Project",
    contributions: [
      {
        area: "Backend Architecture & REST APIs",
        details: [
          "Developed modular REST APIs using Go, Fiber v3, and GORM to handle core workflows.",
          "Implemented JWT authentication, account verification, and secure password-reset routes.",
          "Coded booking lifecycle state transitions enforcing PENDING, ACCEPTED, IN_PROGRESS, WAITING_PAYMENT, COMPLETED, REJECTED, and CANCELLED states."
        ]
      },
      {
        area: "Database Analysis & Design",
        details: [
          "Designed a normalized MySQL relational database schema containing 32 tables in 3rd Normal Form (3NF).",
          "Supported database migrations, environment configurations, and GORM relational persistences."
        ]
      },
      {
        area: "Systems & Service Integrations",
        details: [
          "Integrated Omise Payment SDK for billing, WebSocket for real-time messages, and background mailer workers.",
          "Integrated MinIO object storage for document and technician uploads.",
          "Integrated Python-based OCR microservice for technician document verification, initially using PaddleOCR and later migrating to EasyOCR (the current codebase implementation)."
        ]
      },
      {
        area: "Infrastructure & Networking",
        details: [
          "Configured multi-container builds using Docker and Docker Compose.",
          "Deployed services to a Linux Virtual Machine, configuring a reverse proxy and HTTPS/TLS configuration."
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
      "I was responsible for the backend, database, infrastructure, and network configuration. The Flutter client and Next.js administrative interface were developed by other team members."
    ],
    links: [
      {
        type: "repository",
        label: "View Repository",
        url: "https://github.com/arinsuda/INT371-Capstone",
        isExternal: true
      },
      {
        type: "showcase",
        label: "View Project Showcase",
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
    ]
  },
  {
    slug: "remov",
    title: "REMOV",
    shortDescription: "A solo personal movie and TV community review discovery platform built with Vue 3, Go Fiber, and GORM.",
    description: "REMOV is a solo personal project designed as a community hub for movie and TV enthusiasts to publish media reviews, track personal libraries, and connect. The prototype utilizes a Go Fiber backend service alongside GORM, PostgreSQL, and MinIO object storage, with a Vue 3 Composition API client. It is under active, ongoing development.",
    thumbnail: "/images/projects/remov-cover.svg",
    category: "featured",
    tags: ["Vue 3", "Go", "PostgreSQL", "Vite", "REST API"],
    role: "Product Owner & Full-Stack Developer",
    ownership: "Responsible for the complete product idea, requirements and feature planning, frontend client, backend APIs, relational database design, authentication, infrastructure configuration, and ongoing maintenance.",
    period: "Active Development",
    status: "Working Prototype — Active Development",
    contributions: [
      {
        area: "Product & Architecture Design",
        details: [
          "Conceptualized features, mapped database entities, and developed clean modular Go Fiber backend APIs.",
          "Coded reactive client interface views using Vue 3 Composition API and Pinia state management.",
          "Dockerized the client and server databases for unified local orchestration."
        ]
      }
    ],
    features: [
      { text: "Core movie and TV review workflow (writing and publishing reviews)", status: "confirmed" },
      { text: "User credentials authentication, password recovery, and email verification", status: "implemented" },
      { text: "Movie and TV browsing integrated with TMDB API", status: "implemented" },
      { text: "Personal library management (Watchlist, Watched list)", status: "implemented" },
      { text: "Likes on reviews and media details", status: "implemented" },
      { text: "Follow/Unfollow user connection system", status: "implemented" },
      { text: "Achievement unlocks system and notification records", status: "implemented" },
      { text: "Analytical user and media stats modules", status: "implemented" },
      { text: "MinIO file uploading for profile media", status: "implemented" },
      { text: "Review experience improvements and content discovery UI adjustments", status: "in-development" },
      { text: "Social activity feeds and activity privacy controls", status: "in-development" },
      { text: "Custom watch order paths (Movie Routes) that users can save and fork", status: "planned" },
      { text: "Episode discussions for TV shows, comment voting, and gamified badges", status: "planned" }
    ],
    links: [
      {
        type: "repository",
        label: "View Repository",
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
      "TMDB API"
    ]
  },
  {
    slug: "kradan-kanban",
    title: "Kradan Kanban",
    shortDescription: "A task-board management application for developer teams. Developed with Java Spring Boot and Spring Security.",
    description: "Kradan Kanban is a year 3 academic team project delivering a task management web application. It supports collaborator boards, columns ordering, task creations, and permission controls. My individual work was centered on the backend services layers, relational mappings, and Spring Security integration.",
    thumbnail: "/images/projects/kradan-kanban-cover.svg",
    category: "additional",
    tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JPA"],
    role: "Backend Developer",
    ownership: "Responsible for backend architectures, MySQL relational database design, and Spring Security authorization middleware.",
    period: "Year 3 Academic Project",
    status: "Completed Academic Project",
    contributions: [
      {
        area: "Backend APIs & Security",
        details: [
          "Architected backend REST APIs using Java 17 and Spring Boot.",
          "Configured Spring Security and implemented JWT authentication filters.",
          "Coded database CRUD actions, query validations, structured exceptions handling, and transaction management."
        ]
      },
      {
        area: "Database Mappings",
        details: [
          "Mapped database relational tables using Spring Data JPA and Hibernate.",
          "Supported frontend integration and API endpoint alignments."
        ]
      }
    ],
    features: [
      { text: "Board sharing permissions and workspace collaborators management" },
      { text: "Column status progression and card order constraints" },
      { text: "Task details CRUD, validation, and subtask timelines mapping" }
    ],
    exclusions: [
      "I worked primarily on the backend. The Vue frontend and proxy configuration were team contributions and are not presented as my individual work."
    ],
    links: [
      {
        type: "team-repository",
        label: "View Team Repository",
        url: "https://github.com/ssarunyu/INT221-SSA3-Integrated",
        isExternal: true,
        ownershipNote: "Public team repository maintained under a teammate’s GitHub account."
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
    ]
  },
  {
    slug: "landeklen",
    title: "LANDEKLEN",
    shortDescription: "A client-side virtual pet browser game utilizing Vue 3 reactive states, timers, and local browser storage.",
    description: "LANDEKLEN is a year 2 academic team project creating a client-side virtual pet game. It simulates pet state reductions, level progress, responsive status loaders, and volume configurations. My contribution focused on the core play mechanisms, reactivity layout, and local client utilities.",
    thumbnail: "/images/projects/landeklen-cover.svg",
    category: "additional",
    tags: ["Vue 3", "JavaScript", "HTML5", "CSS3", "Client-side"],
    role: "Frontend Developer",
    ownership: "Designed and implemented interactive pet play states, status timers, level progression logic, and audio controller components.",
    period: "2024",
    status: "Completed Academic Project",
    contributions: [
      {
        area: "Reactivity & Local Storage Logic",
        details: [
          "Built randomized value shifts for hunger, energy, and experience display bounds capped at 100%.",
          "Programmed state progression logic reading local JSON configurations.",
          "Created a reusable activity log timeline listing pet events sequentially."
        ]
      },
      {
        area: "Audio Interface Widgets",
        details: [
          "Programmed background audio loop playbacks, mute toggles, and customized slider volume level controls using browser Audio APIs."
        ]
      }
    ],
    features: [
      { text: "Client-side pet status timers and reactive variables tracking hunger and energy" },
      { text: "Level progressions utilizing locally stored JSON configurations" },
      { text: "Custom looping music player with volume slider and mute controls" }
    ],
    exclusions: [
      "Food selection, Sleep functionality, Username Setup, and other team features are not presented as my individual work."
    ],
    links: [
      {
        type: "live-demo",
        label: "Play Live Demo",
        url: "https://deft-cascaron-50c897.netlify.app/",
        isExternal: true
      }
    ],
    confidentialityNote: "Team repository is not publicly accessible.",
    technologies: [
      "Vue 3",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Local JSON configuration",
      "Browser Audio APIs"
    ]
  }
];
