// data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDetails: string;
  techStack: string[];
  client?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "global-card-tracking-system",
    title: "Global Card Tracking System",
    category: "LOGISTICS",
    description: "A high-level tracking application integrated with SMS gateways for real-time delivery updates and customer notifications.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "This project provides an end-to-end global tracking pipeline designed for high-scale logistics operations. Integrated directly with multi-region SMS gateways, it ensures zero latency on status delivery updates.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Twilio API"],
    client: "Global Logistics Corp",
    liveUrl: "https://example.com/tracking"
  },
  {
    id: "2",
    slug: "enterprise-ecommerce-engine",
    title: "Enterprise E-commerce Engine",
    category: "E-COMMERCE",
    description: "A scalable MERN stack platform deployed on AWS, optimized for sub-second page loads and secure transaction handling.",
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Engineered to handle flash sales and heavy traffic bursts, this e-commerce solution uses edge caching and decoupled backend services for lightning-fast dynamic responses.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Stripe"],
    client: "Retail Next",
    liveUrl: "https://example.com/store"
  },
  {
    id: "3",
    slug: "open-stacked-os-pattern",
    title: "Open Stacked OS Pattern",
    category: "SYSTEM DESIGN",
    description: "Our internal design architecture merging technical aesthetics with modern business logic for a cohesive brand identity.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "A modular design system and component architecture built for modern web standards, focusing on high contrast performance and technical visual design.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    client: "Internal / Open Stacked"
  },
  {
    id: "4",
    slug: "private-cloud-infrastructure",
    title: "Private Cloud Infrastructure",
    category: "CLOUD & DEVOPS",
    description: "High-capacity private VPS and CDN setup using Proxmox virtualization for isolated, high-performance business hosting.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Custom bare-metal virtualization setup with automatic failover, automated snapshots, and Cloudflare enterprise integration for max security.",
    techStack: ["Proxmox", "Docker", "Linux", "Cloudflare", "Nginx"],
    client: "Fintech Startup"
  },
  {
    id: "5",
    slug: "ai-automated-workflow-agent",
    title: "AI AUTOMATION",
    category: "AI & AUTOMATION",
    description: "Autonomous AI agents designed to handle customer query routing, document processing, and system logging without manual intervention.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Custom LLM orchestrations built using Python backend microservices and modern Next.js admin dashboards.",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    client: "Enterprise Tech"
  },
  {
    id: "6",
    slug: "cyber-security-hardening-suite",
    title: "Cyber Security Hardening Suite",
    category: "CYBER SECURITY",
    description: "Advanced protection layer setup including rate limiting, DDoS mitigation, and API boundary security for Web3 platforms.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "A complete security audit and real-time threat monitoring solution for high-value transactional endpoints.",
    techStack: ["Linux", "Cloudflare Workers", "Redis", "TypeScript"],
    client: "Defi Protocol"
  },
  {
    id: "7",
    slug: "realtime-telemetry-dashboard",
    title: "Realtime Telemetry Dashboard",
    category: "DATA ANALYTICS",
    description: "High-throughput real-time metrics visualizer processing millions of WebSocket events per minute for IoT devices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Built for industrial IoT monitoring, this dashboard aggregates real-time hardware telemetry and renders live charts with zero main-thread lag.",
    techStack: ["Next.js", "WebSockets", "TimescaleDB", "D3.js", "Tailwind CSS"],
    client: "IoTech Systems"
  },
  {
    id: "8",
    slug: "fintech-micro-lending-core",
    title: "Fintech Micro-Lending Core",
    category: "FINTECH",
    description: "Automated credit scoring microservice architecture paired with instant multi-currency payout processing.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "A highly compliant microservices ecosystem engineered for banking integrations, automated KYC verification, and low-latency ledger processing.",
    techStack: ["Node.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
    client: "PayVelocity"
  },
  {
    id: "9",
    slug: "healthcare-patient-portal",
    title: "HIPAA Compliant Patient Portal",
    category: "HEALTHCARE",
    description: "End-to-end encrypted medical record portal and virtual consultation booking system for modern clinics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Ensuring 100% HIPAA compliance with zero-trust database encryption, multi-tenant RBAC, and seamless video integration.",
    techStack: ["React", "TypeScript", "GraphQL", "AWS KMS", "WebRTC"],
    client: "MedPulse Health"
  },
  {
    id: "10",
    slug: "saas-subscription-management-engine",
    title: "SaaS Subscription Engine",
    category: "ENTERPRISE",
    description: "Unified billing framework supporting usage-based pricing, multi-tier plans, and localized tax automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "A plug-and-play revenue stack enabling SaaS businesses to manage complex billing cycles, team seats, and automated dunning management.",
    techStack: ["Next.js", "Stripe Connect", "Tailwind CSS", "Prisma"],
    client: "CloudScale Inc"
  },
  {
    id: "11",
    slug: "ai-code-auditor-extension",
    title: "AI Code Auditor & Linter",
    category: "AI AUTOMATION",
    description: "Developer tooling extension that scans pull requests for memory leaks, security flaws, and performance bottlenecks.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Leverages fine-tuned code models to automatically inspect git diffs, suggesting optimized syntax and security patches directly in GitHub action pipelines.",
    techStack: ["Python", "FastAPI", "GitHub API", "OpenAI"],
    client: "DevTools Lab"
  },
  {
    id: "12",
    slug: "decentralized-storage-bridge",
    title: "Decentralized File Vault",
    category: "WEB3 & CLOUD",
    description: "Distributed file preservation network bridging Web2 storage APIs with decentralized IPFS protocols.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Designed for immutable archive needs, providing seamless file encryption and distributed node routing with standard REST APIs.",
    techStack: ["Go", "IPFS", "Docker", "Next.js"],
    client: "Vault3 Protocol"
  },
  {
    id: "13",
    slug: "headless-cms-for-publishers",
    title: "Headless Publishing Engine",
    category: "CONTENT SYSTEMS",
    description: "Ultra-fast publishing pipeline designed for news media platforms requiring instant ISR static regeneration.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Built to serve millions of daily readers with near-zero origin server burden using Next.js Incremental Static Regeneration and edge caching.",
    techStack: ["Next.js", "GraphQL", "Redis", "Tailwind CSS"],
    client: "Digital Times Media"
  },
  {
    id: "14",
    slug: "smart-fleet-management-app",
    title: "Smart Fleet Route Planner",
    category: "LOGISTICS",
    description: "AI-driven route optimization system for delivery fleets minimizing fuel consumption and driver idle times.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Utilizes real-time traffic data and custom graph routing algorithms to dispatch drivers through the most efficient geographic paths.",
    techStack: ["React Native", "Node.js", "Mapbox API", "PostGIS"],
    client: "SpeedyExpress"
  },
  {
    id: "15",
    slug: "high-frequency-trading-ui",
    title: "High-Frequency Order Book UI",
    category: "FINTECH",
    description: "Sub-millisecond financial dashboard displaying order depth charts and live execution streams.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    fullDetails: "Optimized canvas and WebGL rendering for crypto and stock traders who need real-time visualization without dropped frames.",
    techStack: ["React", "HTML5 Canvas", "WebSockets", "TypeScript"],
    client: "Alpha Capital"
  }
];