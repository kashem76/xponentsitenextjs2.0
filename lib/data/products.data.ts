import { IProductsData } from "@/lib/types/products.types";

export const productsData: IProductsData = {
  products: [
    {
      id: "accounting-erp",
      name: "Accounting ERP Software",
      tagline: "Cloud accounting & ERP software for growing businesses",
      shortDescription:
        "Streamline your accounting operations with our cloud-based accounting ERP software. Automate bookkeeping, manage inventory, and get real-time financial insights — all from one platform.",
      icon: "Calculator",
      hero: {
        headline: "Accounting ERP Software for Bangladesh Businesses",
        subheadline:
          "Our accounting software manages finances, inventory, sales, and operations from one integrated ERP platform. The complete accounting solution for businesses that need reliable financial data and total operational control.",
        image: "accounting-workspace",
        primaryCTA: "Schedule a Demo",
        primaryCTAHref: "/products",
        secondaryCTA: "View Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "BarChart3",
          title: "Real-Time Financial Reporting",
          description:
            "Generate profit & loss statements, balance sheets, and cash flow reports instantly with live accounting data — no waiting for month-end closes.",
        },
        {
          icon: "Database",
          title: "Automated Bookkeeping",
          description:
            "Our accounting ERP automatically categorizes transactions, reconciles accounts, and maintains accurate books without manual data entry.",
        },
        {
          icon: "Users",
          title: "Multi-User Access Control",
          description:
            "Define roles and permissions for accountants, managers, and staff with secure, granular access controls built into the ERP system.",
        },
        {
          icon: "TrendingUp",
          title: "Inventory & Sales Integration",
          description:
            "Track inventory levels, manage purchase orders, and connect sales data directly to your financial records inside the same accounting software.",
        },
      ],
      benefits: [
        "Reduce manual accounting data entry by 80% with automated ERP workflows",
        "Get real-time visibility into your business financial health with live dashboards",
        "Ensure tax compliance with built-in Bangladesh tax calculations and reporting",
        "Scale your accounting software from small business to enterprise — no system change needed",
      ],
      useCases: [
        {
          industry: "Manufacturing",
          description:
            "Use our accounting ERP software to track production costs, manage inventory, and monitor profitability by product line with precision.",
        },
        {
          industry: "Retail & E-commerce",
          description:
            "Integrate online and offline sales channels with unified financial reporting through our accounting software.",
        },
        {
          industry: "Professional Services",
          description:
            "Manage project budgets, track billable hours, and automate client invoicing — all within the same accounting ERP system.",
        },
      ],
      technicalHighlights: [
        "Cloud-based accounting ERP with offline capability",
        "API integrations with Bangladesh banks and payment processors",
        "Customizable accounting dashboards and financial reports",
        "Multi-currency and multi-language ERP support",
        "Automated backups and bank-grade data encryption",
      ],
    },
    {
      id: "gym-management",
      name: "Gym Management Software",
      tagline: "Complete gym management software for fitness centers & studios",
      shortDescription:
        "Run your fitness business with our gym management software. Automate member management, class scheduling, billing, and member engagement — built for gyms and fitness centers in Bangladesh.",
      icon: "Dumbbell",
      hero: {
        headline: "Gym Management Software for Fitness Centers",
        subheadline:
          "Our gym management system helps you run your fitness business more efficiently with automated member management, class scheduling, billing, and engagement tools built specifically for gyms, fitness centers, and studios.",
        image: "gym-equipment",
        primaryCTA: "Book a Demo",
        primaryCTAHref: "/products",
        secondaryCTA: "Explore Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "Users",
          title: "Member Management",
          description:
            "Track gym memberships, attendance, payments, and member profiles with complete history and analytics inside our gym management software.",
        },
        {
          icon: "Calendar",
          title: "Class & Trainer Scheduling",
          description:
            "Manage class schedules, trainer availability, room bookings, and member reservations automatically with our gym management system.",
        },
        {
          icon: "CreditCard",
          title: "Automated Billing & Payments",
          description:
            "Process recurring membership fees, track payments, send reminders, and handle refunds seamlessly — no more missed payments at your fitness center.",
        },
        {
          icon: "MessageSquare",
          title: "Member Engagement Tools",
          description:
            "Send automated notifications, workout reminders, promotional offers, and announcements to keep gym members engaged and reduce churn.",
        },
      ],
      benefits: [
        "Reduce gym administration time by 60% with our management software automation",
        "Increase member retention at your fitness center with built-in engagement tools",
        "Eliminate billing errors and missed membership payments",
        "Access gym business metrics and member analytics in real-time",
      ],
      useCases: [
        {
          industry: "Fitness Centers",
          description:
            "Use our gym management software to manage large facilities with multiple trainers, classes, and membership tiers from one system.",
        },
        {
          industry: "Yoga & Pilates Studios",
          description:
            "Handle small group classes, private sessions, and flexible membership packages with our studio management software.",
        },
        {
          industry: "CrossFit Boxes",
          description:
            "Track WOD performance, manage unlimited memberships, and build community engagement with our CrossFit gym management system.",
        },
      ],
      technicalHighlights: [
        "Mobile app for gym members and staff",
        "Biometric access integration for fitness centers",
        "Payment gateway integration (Stripe, Square, bKash, etc.)",
        "Customizable membership plans and pricing tiers",
        "Real-time gym reporting and analytics dashboard",
      ],
    },
    {
      id: "hotel-management",
      name: "Hotel Management Software",
      tagline: "Complete hotel management software for hospitality businesses",
      shortDescription:
        "Manage your hotel with our hotel management software. Handle reservations, guest services, housekeeping, and revenue from one unified platform — built for hotels and hospitality businesses in Bangladesh.",
      icon: "Hotel",
      hero: {
        headline: "Hotel Management Software & PMS Solution",
        subheadline:
          "Our hotel management system handles reservations, check-ins, housekeeping, billing, and guest services from one centralized platform. The complete property management software for hotels, resorts, and hospitality businesses in Bangladesh.",
        image: "hotel-lobby",
        primaryCTA: "Request Demo",
        primaryCTAHref: "/products",
        secondaryCTA: "See Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "Calendar",
          title: "Reservation & Booking Management",
          description:
            "Manage room availability, reservations, online bookings, and OTA channel manager integrations in real-time with our hotel management software.",
        },
        {
          icon: "Home",
          title: "Housekeeping & Maintenance",
          description:
            "Coordinate room cleaning, maintenance requests, and staff assignments with automated workflows inside our hotel management system.",
        },
        {
          icon: "CreditCard",
          title: "Billing & Point of Sale",
          description:
            "Handle guest billing, restaurant charges, room service, and checkout with the integrated POS system built into our hotel software.",
        },
        {
          icon: "Users",
          title: "Guest Profile Management",
          description:
            "Store guest preferences, stay history, and loyalty program data to deliver personalized hospitality at every visit.",
        },
      ],
      benefits: [
        "Increase booking efficiency and eliminate double-bookings with our hotel management system",
        "Improve guest satisfaction scores with faster, more personalized hotel service",
        "Optimize housekeeping and maintenance operations across your property",
        "Maximize hotel revenue with dynamic pricing insights and occupancy analytics",
      ],
      useCases: [
        {
          industry: "Boutique Hotels",
          description:
            "Deliver personalized guest experiences while managing your hotel operations efficiently with small teams using our hotel software.",
        },
        {
          industry: "Resorts & Spa",
          description:
            "Coordinate rooms, activities, spa bookings, and dining reservations from one hotel management platform.",
        },
        {
          industry: "Budget Accommodations",
          description:
            "Maximize occupancy and minimize operational costs with our automated hotel management software for budget properties.",
        },
      ],
      technicalHighlights: [
        "Channel manager integrations (Booking.com, Expedia, Airbnb)",
        "Mobile app for hotel staff operations",
        "Dynamic pricing and hotel revenue management tools",
        "Multi-property hotel management support",
        "Guest self-service portal and kiosk integration",
      ],
    },
    {
      id: "garden-management",
      name: "Garden Management Software",
      tagline: "Professional landscaping & garden management software",
      shortDescription:
        "Manage your landscaping business with our garden management software. Organize projects, clients, plant inventory, crew scheduling, and invoicing from one easy-to-use platform.",
      icon: "Leaf",
      hero: {
        headline: "Garden & Landscaping Management Software",
        subheadline:
          "Our landscaping software helps you organize client projects, track plant inventory, schedule maintenance, and manage field crews with a platform purpose-built for landscaping companies and garden management businesses.",
        image: "garden-landscape",
        primaryCTA: "See Demo",
        primaryCTAHref: "/products",
        secondaryCTA: "Learn More",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "Calendar",
          title: "Project & Maintenance Scheduling",
          description:
            "Schedule landscape installations, routine maintenance, seasonal work, and crew assignments with visual calendars inside our garden management software.",
        },
        {
          icon: "Database",
          title: "Plant & Inventory Management",
          description:
            "Track plant inventory, supplier orders, materials, equipment, and stock levels across all landscaping projects in one system.",
        },
        {
          icon: "Users",
          title: "Client & Site Management",
          description:
            "Store client information, site details, photos, notes, and service history in organized profiles for every landscaping account.",
        },
        {
          icon: "FileText",
          title: "Estimates & Invoicing",
          description:
            "Create professional landscaping estimates, track approved projects, and generate invoices automatically based on completed garden work.",
        },
      ],
      benefits: [
        "Reduce scheduling conflicts and improve crew utilization across landscaping jobs",
        "Never lose track of plant inventory or landscaping materials again",
        "Deliver consistent garden maintenance service with automated reminders",
        "Grow your landscaping business with professional client and project management",
      ],
      useCases: [
        {
          industry: "Landscaping Companies",
          description:
            "Manage multiple crews, landscaping projects, and clients with streamlined operations using our garden management software.",
        },
        {
          industry: "Garden Centers",
          description:
            "Track plant inventory, manage customer orders, and coordinate delivery and garden installation services.",
        },
        {
          industry: "Property Management",
          description:
            "Maintain multiple properties with our landscaping software — scheduled garden maintenance, inspections, and seasonal care made simple.",
        },
      ],
      technicalHighlights: [
        "Mobile app for landscaping field crews",
        "Photo documentation and before/after project galleries",
        "Weather integration for smarter garden scheduling",
        "GPS tracking and routing for crew efficiency",
        "Client portal for garden service requests and updates",
      ],
    },
  ],
};
