import React from "react";

export const services = [
  {
    // num: "01",
    slug: "web-development",
    title: "Web Development",
    desc: "We design and build fast, responsive websites and web apps tailored to your business — from clean architecture and pixel-perfect UI to solid, maintainable code. Our team works closely with you at every stage, so what ships matches the vision and scales smoothly as your traffic and features grow.",
    fullDesc: "Our web development service turns your vision into a scalable, high-performance digital product. We handle everything from initial UI/UX blueprints to full-stack deployment, engineering custom web applications and robust API backends designed to withstand heavy traffic and deliver absolute reliability, so your website grows exactly as fast as your business does.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    stats: [
      { label: "Client Satisfaction", value: "99.2%" },
      { label: "Performance Score", value: "98/100" },
      { label: "Deployment Speed", value: "2x Faster" }
    ],
    features: [
      {
        title: "Custom Web Applications",
        desc: "High-speed frontends paired with robust backends built specifically to streamline your business workflows."
      },
      {
        title: "Responsive & Pixel-Perfect UI",
        desc: "Interfaces that look and feel consistent across every screen size, from large desktops down to small phones."
      },
      {
        title: "API Development & Integration",
        desc: "Seamless, secure API endpoints that link your tools, databases, and third-party solutions together."
      },
      {
        title: "Legacy Website Modernization",
        desc: "We refactor outdated legacy architectures into modern, performant, and secure cloud-native platforms."
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We analyze your target market, map out user personas, and establish clear technical requirements before writing a single line of code."
      },
      {
        step: "02",
        title: "Wireframing & UI/UX",
        desc: "Our design specialists create interactive prototypes and wireframes, prioritizing ease-of-use and aesthetic appeal."
      },
      {
        step: "03",
        title: "Agile Development",
        desc: "Our engineering squad develops your application in two-week sprints, keeping you updated with continuous staging deployments."
      },
      {
        step: "04",
        title: "QA, Launch & Support",
        desc: "Rigorous automated and manual testing is performed before a smooth production release, followed by 24/7 post-launch maintenance."
      }
    ],
    techStack: [
      { name: "React / Next.js / Angular", category: "Frontend" },
      { name: "Node.js / Express / Python", category: "Backend" },
      { name: "PostgreSQL / MongoDB / Supabase", category: "Database" },
      { name: "AWS / Vercel / Hostinger", category: "Hosting" }
    ],
    faqs: [
      {
        question: "How long does a standard web development project take?",
        answer: "A standard minimum viable product (MVP) takes anywhere between 6 to 12 weeks. Large enterprise websites with complex integrations can take 3 to 6 months."
      },
      {
        question: "Do we own the intellectual property (IP) and source code?",
        answer: "Yes, 100%. Once project payments are settled, all codebase repositories, architectural documents, and IP rights are transferred directly to you."
      },
      {
        question: "Can you help maintain and update the website post-launch?",
        answer: "Absolutely. We offer flexible post-launch retainer packages that cover bug fixes, security audits, server maintenance, and feature enhancements."
      }
    ]
  },
  {
    // num: "02",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    desc: "We build AI-powered products that actually get used — custom chatbots, autonomous AI agents, and workflow automations that plug into your existing tools. From natural language interfaces to predictive models, we help you put AI to work exactly where it saves the most time and effort.",
    fullDesc: "Infuse smart capabilities directly into your core business systems. Our AI engineers build and deploy custom machine learning algorithms, natural language processing models, autonomous AI agents, and predictive analytics suites designed to streamline repetitive manual operations, automate customer conversations, and surface hidden business insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h.01M15 9h.01M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      </svg>
    ),
    stats: [
      { label: "Task Automation", value: "85%" },
      { label: "Decision Accuracy", value: "96.4%" },
      { label: "Hours Saved / Month", value: "320 hrs" }
    ],
    features: [
      {
        title: "Intelligent Chatbots & Agents",
        desc: "24/7 AI customer service agents and autonomous agents trained directly on your company documentation to handle complex inquiries."
      },
      {
        title: "Predictive Analytics",
        desc: "Forecasting models that evaluate historical datasets to project customer churn, inventory demand, and revenue trends."
      },
      {
        title: "NLP & Document Extraction",
        desc: "Automated engines that read, structure, and enter data from physical invoices, contracts, and documents."
      },
      {
        title: "Workflow Automation",
        desc: "AI-driven automations that plug into your existing tools to remove repetitive manual work from your team's day."
      }
    ],
    process: [
      {
        step: "01",
        title: "Data Audit & Assessment",
        desc: "We examine your current business datasets to check for completeness, quality, and formatting necessary for training."
      },
      {
        step: "02",
        title: "Model Prototyping",
        desc: "We test pre-trained foundational models (OpenAI, Anthropic, Llama) or custom algorithms to validate core feasibility."
      },
      {
        step: "03",
        title: "Fine-Tuning & Integration",
        desc: "We fine-tune the model with your company's proprietary data parameters and embed it securely into your existing software."
      },
      {
        step: "04",
        title: "Monitoring & RLHF",
        desc: "We review automated outputs and apply human feedback loops to constantly hone the model's accuracy over time."
      }
    ],
    techStack: [
      { name: "Python / PyTorch", category: "Core AI" },
      { name: "OpenAI / Anthropic APIs", category: "LLMs" },
      { name: "LangChain / Llamaindex", category: "AI Orchestration" },
      { name: "Hugging Face / Pinecone", category: "Vector Databases" }
    ],
    faqs: [
      {
        question: "How do you protect private company data when using LLMs?",
        answer: "We deploy enterprise-tier API keys where data is excluded from model training, or spin up private open-source models inside your secure cloud infrastructure to ensure no data ever leaves your company firewall."
      },
      {
        question: "What kind of data do we need to provide to build a custom AI system?",
        answer: "Depending on the goal, this can be customer support transcripts (for chatbots), raw historical logs (for predictive analysis), or standard operational documents (for data extraction bots)."
      }
    ]
  },
  {
    // num: "03",
    slug: "mobile-apps",
    title: "Mobile Apps",
    desc: "We design and develop cross-platform mobile apps that feel native, load fast, and keep users coming back. From wireframes to app-store launch, we handle the full journey — UI/UX, backend integration, push notifications, and ongoing support after release, on both iOS and Android.",
    fullDesc: "We build mobile experiences your users will actually open every day. Whether it's a single cross-platform codebase or fully native iOS and Android apps, our mobile team handles wireframes, UI/UX, backend integration, push notifications, and app-store submission end to end. For iOS, we build native apps in Swift tuned to Apple's design language and performance standards, ready for a smooth App Store review. For Android, we build native apps in Kotlin that run reliably across the huge range of Android devices and screen sizes, fully compliant with Play Store guidelines. Wherever it makes sense, we also ship cross-platform apps from a single codebase to save you time and budget without sacrificing a native feel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    ),
    stats: [
      { label: "App Store Rating Avg", value: "4.7/5" },
      { label: "Crash-Free Sessions", value: "99.5%" },
      { label: "Time to Launch", value: "8-10 Wks" }
    ],
    features: [
      {
        title: "Native iOS Apps (Swift)",
        desc: "Fast, polished iOS apps built in Swift to Apple's Human Interface Guidelines, tuned for iPhone and iPad."
      },
      {
        title: "Native Android Apps (Kotlin)",
        desc: "Stable, performant Android apps built in Kotlin that run smoothly across the full range of devices and Play Store requirements."
      },
      {
        title: "Cross-Platform Development",
        desc: "Shared-codebase apps for iOS and Android that cut development time while still feeling native to each platform."
      },
      {
        title: "Backend & Push Notifications",
        desc: "Secure backend integration, real-time sync, and push notification setups that keep users engaged after install."
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Platform Strategy",
        desc: "We decide whether native iOS, native Android, or a cross-platform build best fits your goals, budget, and timeline."
      },
      {
        step: "02",
        title: "Wireframing & UI/UX",
        desc: "We design mobile-first interfaces and interactive prototypes that follow Apple's and Google's design guidelines."
      },
      {
        step: "03",
        title: "Agile Development",
        desc: "Our engineers build the app in iterative sprints, with regular test builds shared for your feedback along the way."
      },
      {
        step: "04",
        title: "QA, Store Launch & Support",
        desc: "We test across real devices, handle App Store and Play Store submission, and provide ongoing post-launch support."
      }
    ],
    techStack: [
      { name: "Swift / SwiftUI", category: "iOS" },
      { name: "Kotlin / Jetpack Compose", category: "Android" },
      { name: "React Native / Flutter", category: "Cross-Platform" },
      { name: "Firebase / Node.js", category: "Backend" }
    ],
    faqs: [
      {
        question: "Should we build native apps or a single cross-platform app?",
        answer: "If performance and platform-specific features are critical, we recommend native iOS (Swift) and Android (Kotlin) apps. If budget and speed matter more, a cross-platform build gives you both platforms from one codebase."
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer: "Yes. We manage the entire submission process, including compliance checks, store listing assets, and responding to any review feedback from Apple or Google."
      },
      {
        question: "Can you maintain our app after it's launched?",
        answer: "Yes, we offer ongoing retainer support covering OS updates, bug fixes, new features, and performance monitoring for both iOS and Android."
      }
    ]
  },
  {
    // num: "04",
    slug: "complete-rcm",
    title: "Complete RCM",
    desc: "We deliver end-to-end RCM solutions that optimize your revenue cycle, reduce denials, and maximize collections.",
    fullDesc: "Maximize healthcare collection efficiency while drastically reducing administrative overhead. Our complete Revenue Cycle Management (RCM) services streamline patient check-in, eligibility verification, charge capture, medical coding, claims submission, denial management, and accounts receivable follow-up. We ensure you get paid faster and more accurately.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
        <polyline points="21 3 21 8 16 8" />
      </svg>
    ),
    stats: [
      { label: "Clean Claim Rate", value: "98.5%" },
      { label: "Average A/R Days", value: "<28 Days" },
      { label: "Denial Reduction", value: "45%" }
    ],
    features: [
      {
        title: "Automated Insurance Verification",
        desc: "Instantly check patient eligibility, co-pays, and plan benefits before care is delivered to prevent upfront discrepancies."
      },
      {
        title: "Certified Medical Coding",
        desc: "Certified AAPC coders utilizing ICD-10, CPT, and HCPCS codes to guarantee submission accuracy and minimize denials."
      },
      {
        title: "Proactive Denial Management",
        desc: "Immediate analytics on rejected claims, followed by prompt appeals and root-cause fixes to stop recurring failures."
      },
      {
        title: "Patient Billing & Support",
        desc: "Courteous billing helpdesks, customizable online patient statement systems, and flexible payment plan options."
      }
    ],
    process: [
      {
        step: "01",
        title: "Integration & Intake",
        desc: "We securely connect our RCM workflows to your existing Electronic Health Records (EHR) or Practice Management software."
      },
      {
        step: "02",
        title: "Coding & Scrubbing",
        desc: "Encounters are coded and run through a multi-rule software scrubber to catch billing errors before submission."
      },
      {
        step: "03",
        title: "Submission & Tracking",
        desc: "Claims are routed electronically to clearinghouses and payers, with real-time status updates tracked in our dashboard."
      },
      {
        step: "04",
        title: "A/R Resolution & Posting",
        desc: "We follow up on aging accounts receivable and post payments with speed, ensuring healthy, fluid clinic cashflow."
      }
    ],
    techStack: [
      { name: "Epic / Cerner Integration", category: "EHR Platforms" },
      { name: "Waystar / Availity", category: "Clearinghouses" },
      { name: "ICD-10 / CPT Tools", category: "Medical Coding" },
      { name: "HIPAA Compliant Cloud", category: "Compliance" }
    ],
    faqs: [
      {
        question: "Is your RCM system fully HIPAA compliant?",
        answer: "Absolutely. We are fully HIPAA compliant. All patient health information (PHI) is encrypted at rest and in transit, and all our staff undergo rigorous biannual compliance training."
      },
      {
        question: "What is your pricing model for RCM?",
        answer: "We typically operate on a percentage-of-collections model, meaning our goals are perfectly aligned with yours — we only succeed when we increase your actual revenue collections."
      }
    ]
  },
  {
    // num: "05",
    slug: "devops",
    title: "DevOps",
    desc: "We architect scalable cloud infrastructure and automated CI/CD pipelines built for speed, security, and uptime. From containerization to monitoring and disaster recovery, we help your systems scale smoothly as demand grows, without engineering headaches along the way.",
    fullDesc: "Accelerate your development lifecycles and secure high infrastructure uptime. Our DevOps experts construct containerized environments, engineer automated CI/CD deployment pipelines, build robust Infrastructure-as-Code scripts, and configure real-time site reliability dashboards to keep your operations scaling friction-free.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8 6 6 0 0 0-11.6 2.3A4 4 0 0 0 6 19h11.5z" />
      </svg>
    ),
    stats: [
      { label: "Deployment Duration", value: "<5 Mins" },
      { label: "Infrastructure Uptime", value: "99.99%" },
      { label: "Server Cost Savings", value: "Up to 40%" }
    ],
    features: [
      {
        title: "Infrastructure as Code (IaC)",
        desc: "Spin up and track your environments securely using repeatable Terraform or AWS CloudFormation configurations."
      },
      {
        title: "CI/CD Pipeline Automation",
        desc: "Automate code testing, container builds, security scans, and production deployments via GitHub Actions or GitLab CI."
      },
      {
        title: "Docker & Kubernetes Orchestration",
        desc: "Package apps in isolated Docker containers, managed dynamically by Kubernetes to ensure effortless auto-scaling."
      },
      {
        title: "Continuous APM & Logging",
        desc: "Complete observability into your environment health using Prometheus, Grafana, Datadog, or centralized cloud logs."
      }
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        desc: "We analyze your server architecture, pinpointing cost leaks, speed bottlenecks, and single points of failure."
      },
      {
        step: "02",
        title: "Architecture Design",
        desc: "We map out a multi-zone cloud setup with strict access controls, automated database backups, and scaling parameters."
      },
      {
        step: "03",
        title: "Deployment Automation",
        desc: "We build pipelines that automatically verify and build your code, pushing to production only upon passing all checks."
      },
      {
        step: "04",
        title: "Stress Testing & Handover",
        desc: "We run simulated system crashes and load surges to test auto-healing capabilities before documenting and passing access to you."
      }
    ],
    techStack: [
      { name: "Amazon Web Services (AWS)", category: "Cloud Provider" },
      { name: "Docker / Kubernetes", category: "Containerization" },
      { name: "Terraform / Ansible", category: "Infrastructure" },
      { name: "GitHub Actions / Jenkins", category: "CI/CD Pipelines" }
    ],
    faqs: [
      {
        question: "Can you help migrate our on-premise hardware to the cloud?",
        answer: "Yes. We plan and execute zero-downtime migrations to major cloud platforms (AWS, Azure, Google Cloud), moving files, databases, and network configs seamlessly."
      },
      {
        question: "How do you help optimize cloud spending?",
        answer: "We analyze active compute loads to implement auto-scaling policies, configure spot instances for dev setups, clean up unattached storage volumes, and suggest correct tier sizes, typically slashing monthly bills by 20% to 45%."
      }
    ]
  },
  {
    // num: "06",
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    desc: "We build high-performing eCommerce solutions that enhance user experience, boost sales, and scale your online business.",
    fullDesc: "Launch a digital storefront designed to convert visitors into buyers. Our eCommerce engineering team designs high-speed storefronts with fluid product navigation, robust search indexing, smooth checkout flows, and integration with local & international payment gateways. We build for performance, security, and effortless inventory management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
    stats: [
      { label: "Checkout Conversion", value: "+4.8%" },
      { label: "Page Load Speed", value: "<1.2s" },
      { label: "Sales Scaled", value: "$1M+" }
    ],
    features: [
      {
        title: "Headless E-Commerce",
        desc: "Ultra-fast Next.js store frontends decoupling the presentation layer for unparalleled speed and SEO optimization."
      },
      {
        title: "Payment Integrations",
        desc: "Secure integrations with Stripe, PayPal, Authorize.net, and local bank gateways including multi-currency setups."
      },
      {
        title: "Inventory & ERP Connectors",
        desc: "Sync stock counts, sales orders, customer databases, and shipment tracking automatically with your internal systems."
      },
      {
        title: "Mobile Commerce (mCommerce)",
        desc: "Tailor-made responsive layouts optimized for thumb-navigation and quick express checkout (Apple Pay & Google Pay)."
      }
    ],
    process: [
      {
        step: "01",
        title: "Platform Selection",
        desc: "We guide you in picking the optimal engine (Shopify, Custom WooCommerce, or Headless React) based on SKU count and scale."
      },
      {
        step: "02",
        title: "Cart & Checkout Design",
        desc: "We minimize friction in the shopping cart and structure a one-click/express checkout to maximize checkout completion."
      },
      {
        step: "03",
        title: "Integration & Sync",
        desc: "We set up automated shipping calculations, tax compliance protocols, and warehouse inventory sync APIs."
      },
      {
        step: "04",
        title: "Load Testing & Launch",
        desc: "We perform simulated traffic spikes to ensure your site stays up during high-demand sales events (e.g., Black Friday)."
      }
    ],
    techStack: [
      { name: "Shopify / Shopify Plus", category: "Platform" },
      { name: "WooCommerce / WordPress", category: "Platform" },
      { name: "Next.js / Headless Commerce", category: "Frontend" },
      { name: "Stripe / PayPal APIs", category: "Payment Gateway" }
    ],
    faqs: [
      {
        question: "Can you migrate our current store from WooCommerce to Shopify without data loss?",
        answer: "Yes. We regularly handle complete migrations, transferring thousands of products, customer logs, past order histories, and coupon structures with zero downtime."
      },
      {
        question: "How do you secure customer transaction data?",
        answer: "We ensure all transactions are PCI-DSS compliant, enforce HTTPS across the platform, and connect directly to tokenized payment processors, meaning no raw credit card details are ever stored on your server."
      }
    ]
  }
];