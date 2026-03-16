import { IServicesData } from "@/lib/types/services.types";

export const servicesData: IServicesData = {
  services: [
    {
      id: "custom-software-development",
      name: "Custom Software Development",
      tagline: "Tailored software built specifically for your business",
      shortDescription:
        "We design and build software platforms tailored to your business operations, workflows, and data systems.",
      icon: "Code2",
      hero: {
        headline: "Custom Software Solutions Built for Your Business",
        subheadline:
          "We design and develop software platforms that match your exact business requirements—from internal tools and customer portals to full-scale enterprise applications. No templates, no compromises.",
        image: "software-development",
        primaryCTA: "Start Your Project",
        secondaryCTA: "View Case Studies",
      },
      approach: [
        {
          step: "01",
          title: "Discovery & Requirements",
          description:
            "We start by understanding your business processes, pain points, and goals. We map out workflows, identify bottlenecks, and define what success looks like.",
        },
        {
          step: "02",
          title: "Architecture & Design",
          description:
            "Our team designs the system architecture, database structure, user interfaces, and integration points. You'll see prototypes before development begins.",
        },
        {
          step: "03",
          title: "Development & Testing",
          description:
            "We build your software using modern frameworks and best practices. Rigorous testing ensures reliability, security, and performance.",
        },
        {
          step: "04",
          title: "Deployment & Support",
          description:
            "We handle deployment, user training, and documentation. Post-launch, we provide ongoing support and iterative improvements.",
        },
      ],
      capabilities: [
        {
          icon: "Laptop",
          title: "Web Applications",
          description:
            "Cloud-based platforms accessible from any browser with responsive design and real-time functionality.",
        },
        {
          icon: "Smartphone",
          title: "Mobile Applications",
          description:
            "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
        },
        {
          icon: "Database",
          title: "Enterprise Systems",
          description:
            "Large-scale business applications including ERP, CRM, and custom internal platforms.",
        },
        {
          icon: "Workflow",
          title: "API Development",
          description:
            "Robust APIs that connect systems, enable integrations, and support third-party platforms.",
        },
      ],
      benefits: [
        "Software that matches your exact workflows and business rules",
        "Full ownership of code and intellectual property",
        "Scalable architecture that grows with your business",
        "Integration with existing systems and tools",
        "Reduced dependency on manual processes and spreadsheets",
        "Competitive advantage through proprietary technology",
      ],
      industries: [
        "Healthcare & Medical",
        "Financial Services",
        "Manufacturing & Supply Chain",
        "Retail & E-commerce",
        "Education & Training",
        "Professional Services",
      ],
      deliverables: [
        "Fully functional custom software application",
        "Source code and technical documentation",
        "User guides and training materials",
        "Deployment and hosting setup",
        "Post-launch support and maintenance plan",
      ],
    },
    {
      id: "ai-powered-automation",
      name: "AI-Powered Automation",
      tagline: "Intelligent automation that reduces manual work",
      shortDescription:
        "Introduce intelligent automation into everyday processes to reduce repetitive work and improve productivity.",
      icon: "Bot",
      hero: {
        headline: "AI & Automation That Works for Your Business",
        subheadline:
          "Leverage artificial intelligence and automation to eliminate repetitive tasks, improve accuracy, and free your team to focus on high-value work. From document processing to intelligent decision support.",
        image: "ai-automation",
        primaryCTA: "Explore AI Solutions",
        secondaryCTA: "See Examples",
      },
      approach: [
        {
          step: "01",
          title: "Process Analysis",
          description:
            "We identify which tasks and workflows are candidates for automation—focusing on repetitive, time-consuming, or error-prone processes.",
        },
        {
          step: "02",
          title: "Solution Design",
          description:
            "We design automation workflows and select the right AI technologies (machine learning, NLP, computer vision) to solve your specific problems.",
        },
        {
          step: "03",
          title: "Build & Train",
          description:
            "We develop automation scripts, train AI models with your data, and build integrations with your existing systems.",
        },
        {
          step: "04",
          title: "Deploy & Monitor",
          description:
            "We deploy automation workflows, monitor performance, and continuously refine models to improve accuracy and efficiency.",
        },
      ],
      capabilities: [
        {
          icon: "FileText",
          title: "Document Processing",
          description:
            "Automatically extract, classify, and process information from invoices, contracts, forms, and reports.",
        },
        {
          icon: "MessageSquare",
          title: "Intelligent Chatbots",
          description:
            "AI-powered customer service and support automation that handles common queries 24/7.",
        },
        {
          icon: "TrendingUp",
          title: "Predictive Analytics",
          description:
            "Machine learning models that forecast trends, detect anomalies, and support better decision-making.",
        },
        {
          icon: "Workflow",
          title: "Workflow Automation",
          description:
            "Automated business processes including approvals, notifications, data entry, and reporting.",
        },
      ],
      benefits: [
        "Reduce time spent on repetitive manual tasks by up to 80%",
        "Improve accuracy and eliminate human error",
        "24/7 automated processing without breaks or downtime",
        "Free employees to focus on strategic, creative work",
        "Handle increased volume without hiring additional staff",
        "Gain insights from data patterns and predictions",
      ],
      industries: [
        "Finance & Accounting",
        "Legal & Compliance",
        "Human Resources",
        "Customer Service",
        "Healthcare Administration",
        "Logistics & Operations",
      ],
      deliverables: [
        "Automated workflows integrated with your systems",
        "Trained AI models for your specific use cases",
        "Dashboards for monitoring automation performance",
        "Documentation and process guides",
        "Training for your team to manage automations",
      ],
    },
    {
      id: "digital-business-platforms",
      name: "Digital Business Platforms",
      tagline: "Scalable platforms that power business growth",
      shortDescription:
        "We build scalable systems that support operations, customers, and business growth.",
      icon: "Database",
      hero: {
        headline: "Digital Platforms That Scale With Your Business",
        subheadline:
          "Build the digital foundation your business needs to operate efficiently, serve customers better, and scale without limits. From customer portals to operational platforms.",
        image: "digital-platforms",
        primaryCTA: "Plan Your Platform",
        secondaryCTA: "Learn More",
      },
      approach: [
        {
          step: "01",
          title: "Platform Strategy",
          description:
            "We define the platform vision, identify user personas, map customer journeys, and establish technical requirements.",
        },
        {
          step: "02",
          title: "System Architecture",
          description:
            "We design scalable, modular architecture that handles growth, integrates with other systems, and maintains performance.",
        },
        {
          step: "03",
          title: "Phased Development",
          description:
            "We build the platform in phases—starting with core features and expanding functionality based on user feedback and business needs.",
        },
        {
          step: "04",
          title: "Launch & Scale",
          description:
            "We handle deployment, user onboarding, and ongoing enhancements as your platform grows and evolves.",
        },
      ],
      capabilities: [
        {
          icon: "Users",
          title: "Customer Portals",
          description:
            "Self-service platforms where customers can manage accounts, place orders, track services, and access resources.",
        },
        {
          icon: "ShoppingCart",
          title: "E-commerce Platforms",
          description:
            "Complete online selling systems with product catalogs, payments, order management, and fulfillment.",
        },
        {
          icon: "Building2",
          title: "Operational Platforms",
          description:
            "Internal systems that run business operations including inventory, scheduling, workflow management, and reporting.",
        },
        {
          icon: "Network",
          title: "Marketplace Platforms",
          description:
            "Multi-sided platforms that connect buyers and sellers, service providers and customers, or other stakeholders.",
        },
      ],
      benefits: [
        "Centralized platform for all business operations",
        "Better customer experience through self-service capabilities",
        "Scalable infrastructure that handles growth automatically",
        "Real-time data and analytics across your business",
        "Reduced operational costs through automation",
        "Faster time-to-market for new products and services",
      ],
      industries: [
        "E-commerce & Retail",
        "SaaS & Technology",
        "Healthcare Services",
        "Real Estate & Property",
        "Education & Training",
        "Professional Services",
      ],
      deliverables: [
        "Fully functional digital platform",
        "Admin dashboards and management tools",
        "Mobile-responsive interfaces",
        "API documentation and integration guides",
        "Security and compliance implementation",
        "Hosting, monitoring, and support infrastructure",
      ],
    },
    {
      id: "system-integration",
      name: "System Integration & Migration",
      tagline: "Connect systems and modernize legacy platforms",
      shortDescription:
        "Integrate disparate systems, migrate legacy applications, and build seamless data flows across your technology stack.",
      icon: "Plug",
      hero: {
        headline: "Connect Your Systems, Modernize Your Infrastructure",
        subheadline:
          "Break down data silos by integrating your existing systems, migrate from legacy platforms to modern technology, and create seamless information flow across your organization.",
        image: "system-integration",
        primaryCTA: "Discuss Integration",
        secondaryCTA: "View Services",
      },
      approach: [
        {
          step: "01",
          title: "System Assessment",
          description:
            "We audit your current technology stack, identify integration points, and map data flows between systems.",
        },
        {
          step: "02",
          title: "Integration Design",
          description:
            "We design integration architecture, select appropriate middleware, and plan data synchronization strategies.",
        },
        {
          step: "03",
          title: "Implementation",
          description:
            "We build APIs, connectors, and middleware to enable real-time or batch data exchange between systems.",
        },
        {
          step: "04",
          title: "Testing & Migration",
          description:
            "We thoroughly test integrations, migrate data safely, and ensure business continuity throughout the transition.",
        },
      ],
      capabilities: [
        {
          icon: "Link",
          title: "API Integration",
          description:
            "Connect cloud applications, third-party services, and internal systems through robust API integrations.",
        },
        {
          icon: "Database",
          title: "Data Migration",
          description:
            "Safely migrate data from legacy systems to modern platforms with validation and quality assurance.",
        },
        {
          icon: "RefreshCw",
          title: "Legacy Modernization",
          description:
            "Replace or wrap outdated systems with modern technology while preserving business logic and data.",
        },
        {
          icon: "Zap",
          title: "Real-Time Sync",
          description:
            "Enable real-time data synchronization across systems for consistent, up-to-date information.",
        },
      ],
      benefits: [
        "Eliminate manual data entry between systems",
        "Single source of truth for business data",
        "Reduced risk of errors and inconsistencies",
        "Modernize technology without disrupting operations",
        "Leverage existing investments while adding new capabilities",
        "Improved reporting with consolidated data",
      ],
      industries: [
        "Enterprise & Corporate",
        "Healthcare Systems",
        "Financial Institutions",
        "Manufacturing",
        "Government & Public Sector",
        "Education & Universities",
      ],
      deliverables: [
        "Integrated systems with seamless data flow",
        "API documentation and integration guides",
        "Migrated and validated data",
        "Monitoring and error handling systems",
        "Rollback and disaster recovery plans",
      ],
    },
    {
      id: "consulting-strategy",
      name: "Technology Consulting & Strategy",
      tagline: "Strategic guidance for digital transformation",
      shortDescription:
        "Expert consulting to define technology strategy, evaluate options, and plan digital transformation initiatives.",
      icon: "Lightbulb",
      hero: {
        headline: "Strategic Technology Guidance for Business Leaders",
        subheadline:
          "Get expert advice on technology decisions, digital transformation roadmaps, software selection, and IT strategy. We help you make informed decisions that align technology with business goals.",
        image: "consulting-strategy",
        primaryCTA: "Book a Consultation",
        secondaryCTA: "Our Approach",
      },
      approach: [
        {
          step: "01",
          title: "Business Analysis",
          description:
            "We understand your business goals, challenges, current technology landscape, and competitive environment.",
        },
        {
          step: "02",
          title: "Technology Assessment",
          description:
            "We evaluate your current systems, identify gaps, assess vendor options, and benchmark against industry best practices.",
        },
        {
          step: "03",
          title: "Strategy Development",
          description:
            "We develop a comprehensive technology roadmap with priorities, timelines, budgets, and recommended solutions.",
        },
        {
          step: "04",
          title: "Implementation Support",
          description:
            "We can guide implementation, manage vendor relationships, or build the solution ourselves based on your needs.",
        },
      ],
      capabilities: [
        {
          icon: "Map",
          title: "Digital Transformation",
          description:
            "Develop comprehensive plans to modernize operations, adopt new technologies, and drive organizational change.",
        },
        {
          icon: "Target",
          title: "Technology Selection",
          description:
            "Evaluate software vendors, platforms, and tools to find the best fit for your requirements and budget.",
        },
        {
          icon: "BarChart3",
          title: "Process Optimization",
          description:
            "Analyze workflows, identify inefficiencies, and recommend technology solutions to improve operations.",
        },
        {
          icon: "Shield",
          title: "Security & Compliance",
          description:
            "Assess security posture, ensure regulatory compliance, and implement best practices for data protection.",
        },
      ],
      benefits: [
        "Make informed technology decisions with expert guidance",
        "Avoid costly mistakes and vendor lock-in",
        "Align technology investments with business strategy",
        "Accelerate digital transformation initiatives",
        "Independent, unbiased recommendations",
        "Access to industry best practices and expertise",
      ],
      industries: [
        "All Industries",
        "C-Suite & Leadership",
        "Growing Businesses",
        "Organizations Undergoing Change",
        "Companies Evaluating Major Investments",
        "Businesses Planning Digital Transformation",
      ],
      deliverables: [
        "Technology strategy and roadmap document",
        "Vendor evaluation and recommendation reports",
        "Process analysis and optimization plans",
        "Implementation project plans and timelines",
        "Executive presentations and stakeholder briefings",
      ],
    },
    {
      id: "support-maintenance",
      name: "Support & Maintenance",
      tagline: "Ongoing support to keep systems running smoothly",
      shortDescription:
        "Reliable technical support, maintenance, and continuous improvement for your digital systems.",
      icon: "Wrench",
      hero: {
        headline: "Keep Your Systems Running at Peak Performance",
        subheadline:
          "Ongoing technical support, proactive monitoring, security updates, and continuous improvements to ensure your systems remain reliable, secure, and effective.",
        image: "support-maintenance",
        primaryCTA: "Get Support",
        secondaryCTA: "Service Plans",
      },
      approach: [
        {
          step: "01",
          title: "System Onboarding",
          description:
            "We thoroughly review your systems, establish baseline performance metrics, and set up monitoring infrastructure.",
        },
        {
          step: "02",
          title: "Proactive Monitoring",
          description:
            "We continuously monitor system health, performance, security, and identify potential issues before they impact users.",
        },
        {
          step: "03",
          title: "Responsive Support",
          description:
            "Our team responds to incidents, troubleshoots issues, and resolves problems quickly to minimize downtime.",
        },
        {
          step: "04",
          title: "Continuous Improvement",
          description:
            "We recommend enhancements, apply updates, optimize performance, and evolve your systems based on usage patterns.",
        },
      ],
      capabilities: [
        {
          icon: "Headphones",
          title: "Technical Support",
          description:
            "Expert help desk support for users, administrators, and technical staff via email, chat, or phone.",
        },
        {
          icon: "Shield",
          title: "Security Updates",
          description:
            "Regular security patches, vulnerability assessments, and compliance monitoring to protect your systems.",
        },
        {
          icon: "Activity",
          title: "Performance Monitoring",
          description:
            "24/7 monitoring of system health, uptime, response times, and resource utilization.",
        },
        {
          icon: "Wrench",
          title: "Bug Fixes & Updates",
          description:
            "Rapid response to issues, regular updates, and continuous improvement of existing functionality.",
        },
      ],
      benefits: [
        "Minimize downtime with proactive monitoring",
        "Access to expert technical support when needed",
        "Stay current with security patches and updates",
        "Predictable monthly costs instead of emergency expenses",
        "Peace of mind knowing systems are professionally managed",
        "Continuous improvements based on real usage data",
      ],
      industries: [
        "All Industries",
        "Businesses Using Custom Software",
        "Organizations with Critical Systems",
        "Companies Without In-House IT Teams",
        "Growing Businesses",
        "Regulated Industries",
      ],
      deliverables: [
        "Dedicated support team and contact channels",
        "SLA-backed response times",
        "Regular health reports and analytics",
        "Security updates and patches",
        "Monthly status reports and recommendations",
        "Quarterly review meetings",
      ],
    },
  ],
};
