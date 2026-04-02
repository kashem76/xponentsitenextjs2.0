import { IProductsData } from "@/lib/types/products.types";

export const productsData: IProductsData = {
  products: [
    {
      id: "accounting-erp",
      name: "Accounting ERP",
      tagline: "Complete financial management for growing businesses",
      shortDescription:
        "Streamline accounting, automate workflows, and gain real-time financial insights.",
      icon: "Calculator",
      hero: {
        headline: "Modern Accounting & ERP System",
        subheadline:
          "Manage finances, inventory, sales, and operations from one integrated platform. Built for businesses that need reliable financial data and operational control.",
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
            "Generate profit & loss statements, balance sheets, and cash flow reports instantly with live data.",
        },
        {
          icon: "Database",
          title: "Automated Bookkeeping",
          description:
            "Automatically categorize transactions, reconcile accounts, and maintain accurate books without manual data entry.",
        },
        {
          icon: "Users",
          title: "Multi-User Access Control",
          description:
            "Define roles and permissions for accountants, managers, and staff with secure, granular access controls.",
        },
        {
          icon: "TrendingUp",
          title: "Inventory & Sales Integration",
          description:
            "Track inventory levels, manage purchase orders, and connect sales data directly to your financial records.",
        },
      ],
      benefits: [
        "Reduce manual data entry by 80% with automated workflows",
        "Get real-time visibility into business financial health",
        "Ensure compliance with built-in tax calculations and reporting",
        "Scale from small business to enterprise without changing systems",
      ],
      useCases: [
        {
          industry: "Manufacturing",
          description:
            "Track production costs, manage inventory, and monitor profitability by product line.",
        },
        {
          industry: "Retail & E-commerce",
          description:
            "Integrate online and offline sales channels with unified financial reporting.",
        },
        {
          industry: "Professional Services",
          description:
            "Manage project budgets, track billable hours, and automate client invoicing.",
        },
      ],
      technicalHighlights: [
        "Cloud-based with offline capability",
        "API integrations with banks and payment processors",
        "Customizable dashboards and reports",
        "Multi-currency and multi-language support",
        "Automated backups and data encryption",
      ],
    },
    {
      id: "gym-management",
      name: "Gym Management System",
      tagline: "Complete fitness center operations platform",
      shortDescription:
        "Manage memberships, schedules, billing, and member engagement from one system.",
      icon: "Dumbbell",
      hero: {
        headline: "All-in-One Gym Management Platform",
        subheadline:
          "Run your fitness business more efficiently with automated member management, class scheduling, billing, and engagement tools built specifically for gyms and fitness centers.",
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
            "Track memberships, attendance, payments, and member profiles with complete history and analytics.",
        },
        {
          icon: "Calendar",
          title: "Class & Trainer Scheduling",
          description:
            "Manage class schedules, trainer availability, room bookings, and member reservations automatically.",
        },
        {
          icon: "CreditCard",
          title: "Automated Billing & Payments",
          description:
            "Process recurring membership fees, track payments, send reminders, and handle refunds seamlessly.",
        },
        {
          icon: "MessageSquare",
          title: "Member Engagement Tools",
          description:
            "Send automated notifications, workout reminders, promotional offers, and announcements to keep members engaged.",
        },
      ],
      benefits: [
        "Reduce administrative time by 60% with automation",
        "Increase member retention with engagement tools",
        "Eliminate billing errors and missed payments",
        "Access business metrics and member analytics in real-time",
      ],
      useCases: [
        {
          industry: "Fitness Centers",
          description:
            "Manage large facilities with multiple trainers, classes, and membership tiers.",
        },
        {
          industry: "Yoga & Pilates Studios",
          description:
            "Handle small group classes, private sessions, and flexible membership packages.",
        },
        {
          industry: "CrossFit Boxes",
          description:
            "Track WOD performance, manage unlimited memberships, and build community engagement.",
        },
      ],
      technicalHighlights: [
        "Mobile app for members and staff",
        "Biometric access integration",
        "Payment gateway integration (Stripe, Square, etc.)",
        "Customizable membership plans and pricing",
        "Real-time reporting and analytics dashboard",
      ],
    },
    {
      id: "hotel-management",
      name: "Hotel Management System",
      tagline: "Streamline hospitality operations end-to-end",
      shortDescription:
        "Manage reservations, guest services, housekeeping, and revenue from a unified platform.",
      icon: "Hotel",
      hero: {
        headline: "Complete Hotel Operations Platform",
        subheadline:
          "Handle reservations, check-ins, housekeeping, billing, and guest services from one centralized system. Built for hotels, resorts, and hospitality businesses.",
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
            "Manage room availability, reservations, online bookings, and channel manager integrations in real-time.",
        },
        {
          icon: "Home",
          title: "Housekeeping & Maintenance",
          description:
            "Coordinate room cleaning, maintenance requests, and staff assignments with automated workflows.",
        },
        {
          icon: "CreditCard",
          title: "Billing & Point of Sale",
          description:
            "Handle guest billing, restaurant charges, room service, and checkout with integrated POS system.",
        },
        {
          icon: "Users",
          title: "Guest Profile Management",
          description:
            "Store guest preferences, history, and loyalty program data to deliver personalized service.",
        },
      ],
      benefits: [
        "Increase booking efficiency and reduce double-bookings",
        "Improve guest satisfaction with faster service",
        "Optimize housekeeping and maintenance operations",
        "Maximize revenue with dynamic pricing insights",
      ],
      useCases: [
        {
          industry: "Boutique Hotels",
          description:
            "Deliver personalized guest experiences while managing operations efficiently with small teams.",
        },
        {
          industry: "Resorts & Spa",
          description:
            "Coordinate rooms, activities, spa bookings, and dining reservations from one platform.",
        },
        {
          industry: "Budget Accommodations",
          description:
            "Maximize occupancy and minimize operational costs with automated workflows.",
        },
      ],
      technicalHighlights: [
        "Channel manager integrations (Booking.com, Expedia, Airbnb)",
        "Mobile app for staff operations",
        "Dynamic pricing and revenue management",
        "Multi-property management support",
        "Guest portal and self-service kiosks",
      ],
    },
    {
      id: "garden-management",
      name: "Garden Management System",
      tagline: "Digital platform for landscape and garden operations",
      shortDescription:
        "Manage projects, clients, plant inventory, and maintenance schedules efficiently.",
      icon: "Leaf",
      hero: {
        headline: "Professional Garden & Landscape Management",
        subheadline:
          "Organize client projects, track plant inventory, schedule maintenance, and manage crews with a platform built for landscaping and garden management businesses.",
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
            "Schedule installations, routine maintenance, seasonal work, and crew assignments with visual calendars.",
        },
        {
          icon: "Database",
          title: "Plant & Inventory Management",
          description:
            "Track plant inventory, supplier orders, materials, equipment, and stock levels across projects.",
        },
        {
          icon: "Users",
          title: "Client & Site Management",
          description:
            "Store client information, site details, photos, notes, and service history in organized profiles.",
        },
        {
          icon: "FileText",
          title: "Estimates & Invoicing",
          description:
            "Create professional estimates, track approved projects, and generate invoices automatically based on completed work.",
        },
      ],
      benefits: [
        "Reduce scheduling conflicts and improve crew utilization",
        "Never lose track of plant inventory or materials",
        "Deliver consistent service with maintenance reminders",
        "Grow your business with professional client management",
      ],
      useCases: [
        {
          industry: "Landscaping Companies",
          description:
            "Manage multiple crews, projects, and clients with streamlined operations and scheduling.",
        },
        {
          industry: "Garden Centers",
          description:
            "Track inventory, manage customer orders, and coordinate delivery and installation services.",
        },
        {
          industry: "Property Management",
          description:
            "Maintain multiple properties with scheduled landscaping, inspections, and seasonal care.",
        },
      ],
      technicalHighlights: [
        "Mobile app for field crews",
        "Photo documentation and before/after galleries",
        "Weather integration for scheduling",
        "GPS tracking and routing for crew efficiency",
        "Client portal for service requests and updates",
      ],
    },
  ],
};
