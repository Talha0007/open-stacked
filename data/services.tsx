import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Palette,
  TrendingUp,
  Search,
  ShoppingCart,
  Video,
  Cpu,
  ShieldCheck,
  Code2,
} from "lucide-react";

export const servicesData = [
  {
    slug: "web-engineering",
    title: "Web Engineering",
    desc: "Architecting high-performance MERN & Next.js ecosystems.",
    fullDesc:
      "We build more than just websites; we engineer digital foundations. Our approach focuses on the MERN stack with Next.js to provide Server-Side Rendering (SSR) and static generation for lightning-fast load times. We prioritize clean code, modular architecture, and seamless API integration.",
    features: [
      "Next.js 15 & React 19 Integration",
      "Edge Runtime Deployment",
      "Microservices & Serverless Functions",
      "State Management (Redux/Zustand)",
    ],
    icon: <Globe />,
    tag: "Next-Gen",
    ctaData: {
      heading: "Ready to deploy?",
      highlight: "Performance Engineered",
      deliverable: "Scalable Web Ecosystem",
      timeline: "4-12 Weeks",
      buttonText: "Initiate Project Matrix",
      availabilityText: "Engineering slots open for immediate sprint",
    },
    faqs: [
      {
        question: "Do you use Next.js for all web projects?",
        answer:
          "While we specialize in Next.js for its superior SEO and performance capabilities, we select the tech stack based on your specific enterprise needs. However, for most high-performance marketing sites and SaaS platforms, Next.js is our primary choice.",
      },
      {
        question: "How do you ensure the website is fast and SEO-friendly?",
        answer:
          "We implement Server-Side Rendering (SSR), Core Web Vitals optimization, automated image compression, and semantic HTML structure from day one to ensure top-tier Lighthouse scores.",
      },
      {
        question: "Will I have full ownership of the source code?",
        answer:
          "Yes. Upon project completion and final payment, the complete intellectual property and repository access are handed over to your organization.",
      },
    ],
  },
  {
    slug: "mobile-solutions",
    title: "Mobile Solutions",
    desc: "Cross-platform React Native applications with native performance.",
    fullDesc:
      "Our mobile development team specializes in React Native, delivering high-performance apps that run natively on both iOS and Android from a single codebase. From custom UI components to hardware-level integrations (GPS, Biometrics, Camera).",
    features: [
      "Cross-Platform Efficiency",
      "Native Module Integration",
      "Offline-First Data Sync",
      "App Store & Play Store Deployment",
    ],
    icon: <Smartphone />,
    tag: "Seamless",
    ctaData: {
      heading: "Build your app?",
      highlight: "Native Experience",
      deliverable: "iOS & Android Build",
      timeline: "8-16 Weeks",
      buttonText: "Launch Mobile Venture",
      availabilityText: "Mobile architects ready for your vision",
    },
    faqs: [
      {
        question: "Do you build native or cross-platform mobile applications?",
        answer:
          "We specialize in React Native, which allows us to build high-performance, cross-platform applications for both iOS and Android using a single codebase, significantly reducing development time and costs.",
      },
      {
        question: "Will you handle the App Store and Google Play submissions?",
        answer:
          "Absolutely. Our service includes end-to-end deployment, ensuring your application meets all Apple App Store and Google Play Store guidelines for a smooth approval process.",
      },
      {
        question: "Can the mobile app function offline?",
        answer:
          "Yes, we can implement offline-first architectures using local databases and background synchronization, allowing users to access core features without an internet connection.",
      },
    ],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    desc: "Enterprise infrastructure, Docker, and Proxmox management.",
    fullDesc:
      "Leveraging our expertise in Proxmox and Ubuntu Server, we build private cloud environments that offer total control and security. We automate deployment pipelines using Docker and CI/CD tools, ensuring updates are pushed safely.",
    features: [
      "Proxmox Virtualization & VPS",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipeline Automation",
      "Bare-Metal Server Optimization",
    ],
    icon: <Layers />,
    tag: "Scalable",
    ctaData: {
      heading: "Scale your infra?",
      highlight: "Zero-Downtime Architecture",
      deliverable: "Cloud Infrastructure Setup",
      timeline: "2-4 Weeks",
      buttonText: "Optimize My Stack",
      availabilityText: "System experts monitoring for new clusters",
    },
    faqs: [
      {
        question: "Do we need our own servers, or do you provide hosting?",
        answer:
          "We offer both solutions. We can architect cloud infrastructure on AWS, Google Cloud, or DigitalOcean, or we can set up and manage a private virtualized environment using Proxmox on your bare-metal servers.",
      },
      {
        question:
          "What happens if our server experiences a traffic spike or crash?",
        answer:
          "We design zero-downtime architectures using load balancing, auto-scaling clusters, and automated failovers to ensure your application remains online even during massive traffic surges.",
      },
      {
        question:
          "Can you migrate our existing legacy app to Docker containers?",
        answer:
          "Yes, containerization is a core service. We can safely migrate your legacy applications to Docker, standardizing your deployment process and eliminating 'it works on my machine' issues.",
      },
    ],
  },
  {
    slug: "database-design",
    title: "DB & System Design",
    desc: "Complex database orchestration and API logic for high-traffic data.",
    fullDesc:
      "Data is the heart of every application. We design robust schemas for MongoDB and PostgreSQL that are optimized for speed and ACID compliance. Our system design includes load balancing and caching strategies (Redis).",
    features: [
      "MongoDB Replica Sets & Sharding",
      "Redis Distributed Caching",
      "PostgreSQL Relational Mapping",
      "API Gateway Management",
    ],
    icon: <Database />,
    tag: "Robust",
    ctaData: {
      heading: "Secure your data?",
      highlight: "Data Integrity & Speed",
      deliverable: "Optimized Database Schema",
      timeline: "3-6 Weeks",
      buttonText: "Architect My Backend",
      availabilityText: "Database engineers standing by for migration",
    },
    faqs: [
      {
        question: "Which database is right for my project, SQL or NoSQL?",
        answer:
          "It depends entirely on your data structure. We use PostgreSQL (SQL) for highly relational, transaction-heavy data, and MongoDB (NoSQL) for flexible, scalable, and document-based architectures.",
      },
      {
        question: "Can you optimize our current database that is running slow?",
        answer:
          "Yes. We conduct deep database audits to implement indexing strategies, query optimizations, and caching layers (like Redis) to drastically reduce read/write latency.",
      },
      {
        question: "How do you handle data security and automated backups?",
        answer:
          "We implement encryption at rest, secure access controls via VPNs or VPCs, and automated daily snapshots that are replicated across different geographic zones.",
      },
    ],
  },
  {
    slug: "ui-ux-designing",
    title: "UI/UX Designing",
    desc: "Merging technical aesthetics with user-centric design.",
    fullDesc:
      "We believe that technical power should be accessible. Our UI/UX process starts with deep research into user behavior, followed by high-fidelity wireframing and prototyping using modern tools like Figma.",
    features: [
      "Design System Creation",
      "Interactive Motion Prototypes",
      "Accessibility (WCAG) Compliance",
      "User Journey Mapping",
    ],
    icon: <Palette />,
    tag: "Creative",
    ctaData: {
      heading: "Start designing?",
      highlight: "User-Centric Aesthetics",
      deliverable: "Figma Design System",
      timeline: "3-5 Weeks",
      buttonText: "Transform My Interface",
      availabilityText: "Limited design consultation available this week",
    },
    faqs: [
      {
        question: "What tools do you use for UI/UX design?",
        answer:
          "Our primary design tool is Figma. It allows for seamless collaboration, high-fidelity interactive prototyping, and efficient developer handoff.",
      },
      {
        question: "Do we get to review the designs before development begins?",
        answer:
          "Yes. We follow an agile design process. You will review and approve wireframes first, followed by fully interactive, clickable prototypes before a single line of code is written.",
      },
      {
        question:
          "Do you design completely custom interfaces or use templates?",
        answer:
          "Every project at Open Stacked is 100% custom-designed from scratch to match your specific brand identity, user personas, and business goals.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-driven growth strategies to amplify your brand.",
    fullDesc:
      "Our marketing services are focused on ROI. We combine data analytics with creative content to target the right audience at the right time. From social media automation to paid advertising (PPC).",
    features: [
      "PPC Strategy & Management",
      "Growth Hacking Workflows",
      "Social Media Automation",
      "Conversion Rate Optimization (CRO)",
    ],
    icon: <TrendingUp />,
    tag: "Growth",
    ctaData: {
      heading: "Ready to grow?",
      highlight: "High ROI Strategies",
      deliverable: "Monthly Growth Report",
      timeline: "Ongoing",
      buttonText: "Amplify My Brand",
      availabilityText: "Growth hackers ready to scale your ROI",
    },
    faqs: [
      {
        question: "How long does it take to see ROI on paid advertising?",
        answer:
          "While initial data gathering takes 1-2 weeks, most clients begin seeing a measurable Return on Ad Spend (ROAS) within the first 30 to 60 days of a highly targeted PPC campaign.",
      },
      {
        question: "Do you manage social media accounts and content creation?",
        answer:
          "Yes, we offer full-stack social media management, including automated posting schedules, graphic design, and data-driven copywriting for platforms like LinkedIn, Meta, and X.",
      },
      {
        question: "What is Conversion Rate Optimization (CRO)?",
        answer:
          "CRO is the process of analyzing user behavior on your site (using heatmaps and A/B testing) and making structural tweaks to turn more of your existing traffic into paying customers.",
      },
    ],
  },
  {
    slug: "seo-mastery",
    title: "SEO Mastery",
    desc: "Technical SEO audits and search engine dominance.",
    fullDesc:
      "Ranking on page one is an engineering challenge. We go beyond keywords, focusing on technical SEO: Core Web Vitals, Schema Markup, and XML sitemaps to ensure perfect crawlability.",
    features: [
      "Core Web Vitals Optimization",
      "Semantic SEO Content Strategy",
      "Competitor Gap Analysis",
      "Local & Global Search Authority",
    ],
    icon: <Search />,
    tag: "Visible",
    ctaData: {
      heading: "Dominate search?",
      highlight: "Search Dominance",
      deliverable: "SEO Technical Audit",
      timeline: "4-12 Months",
      buttonText: "Boost My Rankings",
      availabilityText: "SEO specialists ready to claim your #1 spot",
    },
    faqs: [
      {
        question: "How long does it take to reach the first page of Google?",
        answer:
          "SEO is a long-term strategy. While technical fixes can yield quick bumps in traffic, achieving stable page-one rankings for competitive keywords typically takes 3 to 6 months of consistent effort.",
      },
      {
        question: "What is Technical SEO, and why is it important?",
        answer:
          "Technical SEO ensures Google's bots can crawl and index your site perfectly. It involves optimizing site speed, XML sitemaps, JSON-LD schema markup, and mobile responsiveness.",
      },
      {
        question: "Do you handle off-page SEO and backlink building?",
        answer:
          "Yes, we execute high-authority outreach campaigns to acquire quality backlinks, which serve as 'trust votes' to dramatically increase your domain authority.",
      },
    ],
  },
  {
    slug: "e-commerce-systems",
    title: "E-Commerce Systems",
    desc: "End-to-end online retail solutions and secure gateways.",
    fullDesc:
      "Building modern storefronts requires speed and security. We create custom e-commerce engines that integrate seamlessly with Stripe, PayPal, and local gateways in Pakistan.",
    features: [
      "Custom Shopping Cart Logic",
      "Multi-Currency/Region Support",
      "Secure Payment Integrations",
      "Inventory & Order Management",
    ],
    icon: <ShoppingCart />,
    tag: "Commerce",
    ctaData: {
      heading: "Start selling?",
      highlight: "Secure Conversions",
      deliverable: "E-Commerce Storefront",
      timeline: "6-14 Weeks",
      buttonText: "Build My Storefront",
      availabilityText: "Commerce experts ready to drive sales",
    },
    faqs: [
      {
        question: "Which payment gateways do you integrate?",
        answer:
          "We integrate global gateways like Stripe and PayPal, as well as local Pakistani gateways such as Safepay, JazzCash, and EasyPaisa for seamless regional transactions.",
      },
      {
        question: "Do you use Shopify, or build custom storefronts?",
        answer:
          "While we can set up and optimize Shopify stores, our specialty lies in building 'Headless E-commerce' solutions using Next.js for maximum speed, customization, and scalability.",
      },
      {
        question: "Can the system handle inventory and order management?",
        answer:
          "Yes, our custom e-commerce builds include comprehensive admin dashboards for tracking real-time inventory, managing shipping logistics, and processing refunds.",
      },
    ],
  },
  {
    slug: "video-production",
    title: "Video Production",
    desc: "High-end motion graphics and technical storytelling.",
    fullDesc:
      "We bring your software to life through high-fidelity video. Whether it's a 3D product explainer or a cinematic brand story, our production team uses motion graphics to simplify complex concepts.",
    features: [
      "3D Motion Graphics (After Effects)",
      "Technical Explainer Videos",
      "Cinematic Color Grading",
      "Ad Content for Tech Products",
    ],
    icon: <Video />,
    tag: "Visuals",
    ctaData: {
      heading: "Tell your story?",
      highlight: "Cinematic Storytelling",
      deliverable: "4K Motion Assets",
      timeline: "2-4 Weeks",
      buttonText: "Create My Visuals",
      availabilityText: "Motion artists ready to bring ideas to life",
    },
    faqs: [
      {
        question: "Do you provide scriptwriting and voiceovers?",
        answer:
          "Yes, we handle the entire pre-production phase. We write technical scripts designed to convert and provide professional voiceovers in multiple accents and languages.",
      },
      {
        question:
          "What is the typical turnaround time for a 1-minute explainer video?",
        answer:
          "A high-fidelity 3D or motion graphics explainer video typically takes 2 to 4 weeks, from the initial storyboard approval to the final cinematic render.",
      },
      {
        question: "Can we get the raw project files (After Effects, Premiere)?",
        answer:
          "Yes, upon project completion and final settlement, we can transfer the raw project files so your internal team can make future edits if needed.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    desc: "Implementing LLMs and automated workflows.",
    fullDesc:
      "Future-proof your business by integrating Artificial Intelligence. We specialize in deploying Large Language Models (LLMs) and custom AI agents that automate repetitive tasks.",
    features: [
      "Custom GPT & LLM Integration",
      "RPA (Robotic Process Automation)",
      "Predictive Data Analytics",
      "AI-Powered Chatbots",
    ],
    icon: <Cpu />,
    tag: "Intelligent",
    ctaData: {
      heading: "Future-proof now?",
      highlight: "Autonomous Efficiency",
      deliverable: "AI Workflow Agent",
      timeline: "4-10 Weeks",
      buttonText: "Integrate AI Intelligence",
      availabilityText: "AI researchers available for automation audit",
    },
    faqs: [
      {
        question: "Can you train an AI on our private company data?",
        answer:
          "Yes. We use a secure architecture called RAG (Retrieval-Augmented Generation), which allows Large Language Models to answer questions based strictly on your private documents without leaking data to public models.",
      },
      {
        question:
          "What kind of tasks can Robotic Process Automation (RPA) handle?",
        answer:
          "RPA can automate almost any repetitive digital task, such as data entry, invoice processing, web scraping, and synchronizing data between legacy software that lacks APIs.",
      },
      {
        question: "Will integrating AI make our current software obsolete?",
        answer:
          "Not at all. We build AI agents and automation workflows that integrate directly into your existing infrastructure via APIs, acting as an enhancement rather than a replacement.",
      },
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    desc: "Hardening system integrity with advanced protocols.",
    fullDesc:
      "Security is not an afterthought in our development cycle. We perform deep penetration testing and implement zero-trust architectures to protect your data integrity.",
    features: [
      "Penetration Testing (VAPT)",
      "SSL/TLS Hardening",
      "OAuth2 & JWT Implementation",
      "Automated Security Audits",
    ],
    icon: <ShieldCheck />,
    tag: "Protected",
    ctaData: {
      heading: "Hardening required?",
      highlight: "Zero-Trust Security",
      deliverable: "VAPT Security Report",
      timeline: "2-5 Weeks",
      buttonText: "Secure My Enterprise",
      availabilityText: "Security audit team ready for deployment",
    },
    faqs: [
      {
        question: "What is included in a VAPT security report?",
        answer:
          "Our Vulnerability Assessment and Penetration Testing (VAPT) report details every security flaw found in your system, ranked by severity, along with actionable code-level fixes to patch them.",
      },
      {
        question:
          "Can you recover and secure a website that has already been hacked?",
        answer:
          "Yes. Our incident response team can quarantine the server, remove malicious scripts, restore clean backups, and implement strict firewall rules to prevent future breaches.",
      },
      {
        question: "Do you offer continuous security monitoring?",
        answer:
          "Yes, we provide SLA-driven continuous monitoring, where we actively scan for suspicious traffic, outdated dependencies, and unauthorized access attempts 24/7.",
      },
    ],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    desc: "Custom software built for large-scale challenges.",
    fullDesc:
      "Large organizations require tailored software that integrates with existing legacy systems. We build enterprise-grade ERPs, CRMs, and custom management dashboards.",
    features: [
      "Custom ERP & CRM Development",
      "Legacy System Migration",
      "Dashboard & Analytics Platforms",
      "SLA-Driven Maintenance",
    ],
    icon: <Code2 />,
    tag: "Enterprise",
    ctaData: {
      heading: "Solving at scale?",
      highlight: "Large Scale Optimization",
      deliverable: "Custom ERP System",
      timeline: "12-24 Weeks",
      buttonText: "Build Custom Solution",
      availabilityText: "Dedicated enterprise team for large-scale ops",
    },
    faqs: [
      {
        question: "Can your custom ERP integrate with our old legacy software?",
        answer:
          "Absolutely. We specialize in building custom middleware and APIs that allow modern Next.js dashboards to communicate seamlessly with older, legacy databases and systems.",
      },
      {
        question: "What kind of post-launch support do you provide?",
        answer:
          "We offer dedicated Service Level Agreements (SLAs) that guarantee specific response times for bug fixes, server maintenance, and feature updates to keep your operations running smoothly.",
      },
      {
        question:
          "How do you ensure the system can handle thousands of internal users?",
        answer:
          "We build enterprise systems using microservices architectures, container orchestration (Kubernetes), and highly optimized databases designed specifically for massive horizontal scaling.",
      },
    ],
  },
];
