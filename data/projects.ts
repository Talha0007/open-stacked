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
  // ROW 1
  {
    id: "1",
    slug: "global-card-tracking-system",
    title: "DeepAI",
    category: "LOGISTICS",
    description:
      "An AI-powered creative platform providing chat, image generation, video creation, and photo editing tools.",
    image: "/projects/deep-ai.png",
    fullDetails:
      "This project provides an end-to-end global tracking pipeline designed for high-scale logistics operations. Integrated directly with multi-region SMS gateways, it ensures zero latency on status delivery updates.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Twilio API"],
    client: "Global Logistics Corp",
    liveUrl: "https://deepai.org/",
  },
  {
    id: "2",
    slug: "enterprise-ecommerce-engine",
    title: "Sparkle Energy",
    category: "E-COMMERCE",
    description:
      "A commercial renewable energy portal specializing in solar energy trading, EPC expertise, and corporate installations.",
    image: "/projects/sparkele-energy.png",
    fullDetails:
      "Engineered to handle flash sales and heavy traffic bursts, this e-commerce solution uses edge caching and decoupled backend services for lightning-fast dynamic responses.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Stripe"],
    client: "Retail Next",
    liveUrl: "https://www.sparkleenergy.com.pk/",
  },
  {
    id: "3",
    slug: "cloud-pos-payments-platform",
    title: "Clover UK",
    category: "FINTECH",
    description:
      "A cloud-based point-of-sale and payments platform for UK businesses, covering card processing, inventory, and staff management.",
    image: "/projects/clover-uk.png",
    fullDetails:
      "We contributed to the UK-facing web experience for this POS and payments platform, focused on merchant onboarding flows and business-solution landing pages built for conversion and clarity.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    client: "Clover UK",
    liveUrl: "https://uk.clover.com/",
  },

  // ROW 2
  {
    id: "4",
    slug: "dental-practice-appointment-site",
    title: "Oasis Family Dental",
    category: "HEALTHCARE",
    description:
      "A general, cosmetic, and family dental practice site in Maywood, NJ, covering services, providers, and appointment requests.",
    image: "/projects/oasis-family-dental.png",
    fullDetails:
      "Built a clean, trust-focused practice site with services overview, provider bio, and a direct appointment-request flow designed for local patient acquisition.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "Oasis Family Dental",
    liveUrl: "https://www.mydentaloasis.com/",
  },
  {
    id: "5",
    slug: "open-stacked-os-pattern",
    title: "MedEx",
    category: "SYSTEM DESIGN",
    description:
      "A comprehensive pharmaceutical search directory detailing medicine brands, generics, indications, and manufacturer data.",
    image: "/projects/medex.png",
    fullDetails:
      "A modular design system and component architecture built for modern web standards, focusing on high contrast performance and technical visual design.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    client: "Internal / Open Stacked",
    liveUrl: "https://medex.com.bd/",
  },
  {
    id: "6",
    slug: "italian-restaurant-booking-site",
    title: "Patrizia's of Matawan",
    category: "HOSPITALITY",
    description:
      "A family-owned Italian restaurant site in Matawan, NJ, covering menus, private events, and online reservations.",
    image: "/projects/patrizias.png",
    fullDetails:
      "Built a warm, conversion-focused restaurant site with online reservation booking, a dynamic menu system, and a private-events inquiry flow tailored to a family-run dining brand.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "Patrizia's of Matawan",
    liveUrl: "https://www.patriziasofmatawan.com/",
  },

  // ROW 3
  {
    id: "7",
    slug: "private-cloud-infrastructure",
    title: "Hoilett Business Systems",
    category: "CLOUD & DEVOPS",
    description:
      "An IT services platform offering enterprise network architecture, cloud infrastructure, server maintenance, and cyber security.",
    image: "/projects/hbs.png",
    fullDetails:
      "Custom bare-metal virtualization setup with automatic failover, automated snapshots, and Cloudflare enterprise integration for max security.",
    techStack: ["Proxmox", "Docker", "Linux", "Cloudflare", "Nginx"],
    client: "Fintech Startup",
    liveUrl: "https://hoilett.com/",
  },
  {
    id: "8",
    slug: "smb-business-management-platform",
    title: "vcita",
    category: "SAAS",
    description:
      "An all-in-one business management platform for small service businesses, covering CRM, scheduling, and invoicing.",
    image: "/projects/vcita.png",
    fullDetails:
      "Contributed to marketing and product pages for this SMB business-management SaaS, focused on clear feature communication and lead-conversion optimized layouts.",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    client: "vcita",
    liveUrl: "https://www.vcita.com/",
  },
  {
    id: "9",
    slug: "restaurant-reservation-experience",
    title: "Vidalia Restaurant",
    category: "HOSPITALITY",
    description:
      "An Italian restaurant site in Lawrence Township, NJ, featuring menu, catering, and online ordering.",
    image: "/projects/vidalia.png",
    fullDetails:
      "Designed and built a chef-driven restaurant experience online, pairing an editorial menu presentation with direct online ordering and catering inquiry paths.",
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    client: "Vidalia Restaurant",
    liveUrl: "https://vidalia.restaurant/",
  },

  // ROW 4
  {
    id: "10",
    slug: "ai-automated-workflow-agent",
    title: "Jeem Jewelry",
    category: "AI & AUTOMATION",
    description:
      "An elegant e-commerce jewelry store showcasing luxury lightweight earrings, fine collections, and handcrafted accessories.",
    image: "/projects/jeem.png",
    fullDetails:
      "Custom LLM orchestrations built using Python backend microservices and modern Next.js admin dashboards.",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    client: "Enterprise Tech",
    liveUrl: "https://jeem.com.pk/",
  },
  {
    id: "11",
    slug: "cyber-security-hardening-suite",
    title: "Phone Labs",
    category: "CYBER SECURITY",
    description:
      "An instant quote and doorstep service booking platform for mobile device repairs, trade-ins, and accessories.",
    image: "/projects/phone-labs.png",
    fullDetails:
      "A complete security audit and real-time threat monitoring solution for high-value transactional endpoints.",
    techStack: ["Linux", "Cloudflare Workers", "Redis", "TypeScript"],
    client: "Defi Protocol",
    liveUrl: "https://phonelabs.co.uk/",
  },
  {
    id: "12",
    slug: "realtime-telemetry-dashboard",
    title: "Mahnoor Sahi",
    category: "DATA ANALYTICS",
    description:
      "A luxury fragrance storefront presenting curated perfume collections and custom eau de parfum products.",
    image: "/projects/mahnoorsahi.png",
    fullDetails:
      "Built for industrial IoT monitoring, this dashboard aggregates real-time hardware telemetry and renders live charts with zero main-thread lag.",
    techStack: ["Next.js", "WebSockets", "TimescaleDB", "D3.js", "Tailwind CSS"],
    client: "IoTech Systems",
    liveUrl: "https://mahnoorsahi.com/",
  },

  // ROW 5
  {
    id: "13",
    slug: "fintech-micro-lending-core",
    title: "Vape UK",
    category: "FINTECH",
    description:
      "A UK-based e-commerce shop delivering e-liquids, vape kits, pods, and accessory products with same-day dispatch options.",
    image: "/projects/vape-uk.png",
    fullDetails:
      "A highly compliant microservices ecosystem engineered for banking integrations, automated KYC verification, and low-latency ledger processing.",
    techStack: ["Node.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
    client: "PayVelocity",
    liveUrl: "https://vapeuk.co.uk/",
  },
  {
    id: "14",
    slug: "healthcare-patient-portal",
    title: "APCECO",
    category: "HEALTHCARE",
    description:
      "A UAE engineering portal highlighting industrial air conditioning services, technical solutions, and equipment catalogs.",
    image: "/projects/apceco.png",
    fullDetails:
      "Ensuring 100% HIPAA compliance with zero-trust database encryption, multi-tenant RBAC, and seamless video integration.",
    techStack: ["React", "TypeScript", "GraphQL", "AWS KMS", "WebRTC"],
    client: "MedPulse Health",
    liveUrl: "http://www.apceco.ae/",
  },
];