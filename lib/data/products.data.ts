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
    {
      id: "oikikbooks",
      name: "OikikBooks",
      tagline:
        "Cloud accounting software with double-entry bookkeeping & real-time financial reporting",
      shortDescription:
        "OikikBooks is a standalone cloud accounting software built for small and mid-sized businesses. Manage your chart of accounts, journal entries, bank reconciliation, invoicing, and financial reports — all with real-time double-entry bookkeeping from one intuitive platform.",
      icon: "BookOpen",
      hero: {
        headline:
          "OikikBooks — Cloud Accounting Software for Growing Businesses",
        subheadline:
          "OikikBooks gives you complete financial control with double-entry bookkeeping, automated journal entries, bank reconciliation, invoicing, and real-time financial reports. From trial balance to cash flow statements — everything your business needs to manage money with confidence.",
        image: "oikikbooks-accounting",
        primaryCTA: "Start Free Trial",
        primaryCTAHref: "/contact",
        secondaryCTA: "View Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "BookOpen",
          title: "Double-Entry Bookkeeping Engine",
          description:
            "OikikBooks enforces strict double-entry accounting with perfect debit-credit balance on every transaction. Manual journal entries, recurring templates, and voucher-based posting keep your general ledger accurate and audit-ready.",
        },
        {
          icon: "BarChart3",
          title: "Real-Time Financial Reports",
          description:
            "Generate trial balance, balance sheet, profit & loss, cash flow statements, and general ledger reports instantly — computed live from your posted transactions with zero lag or batch delays.",
        },
        {
          icon: "Landmark",
          title: "Bank Reconciliation",
          description:
            "Import bank statements, auto-match transactions, track outstanding items, and reconcile accounts with configurable tolerance. OikikBooks ensures your books and bank always agree.",
        },
        {
          icon: "FileText",
          title: "Invoicing & Accounts Receivable",
          description:
            "Create professional invoices, track payments, send automated reminders, and manage accounts receivable — all connected directly to your general ledger for seamless financial tracking.",
        },
        {
          icon: "RefreshCw",
          title: "Recurring Journal Templates",
          description:
            "Automate repetitive entries like rent accruals, depreciation, and salary provisions with configurable recurring templates that auto-generate journal entries on schedule.",
        },
        {
          icon: "Shield",
          title: "Immutable Audit Trail",
          description:
            "Every posted transaction in OikikBooks is immutable — corrections happen through reversing entries, not edits. Full user, timestamp, and source traceability on every journal line.",
        },
      ],
      benefits: [
        "Eliminate manual bookkeeping errors with enforced double-entry balance validation on every transaction",
        "Get instant financial visibility with real-time trial balance, P&L, balance sheet, and cash flow reports",
        "Reconcile bank accounts in minutes instead of hours with smart auto-matching and tolerance rules",
        "Stay audit-ready with immutable posted entries, full audit trails, and reversing journal workflows",
        "Automate recurring entries like depreciation, accruals, and rent — save hours every month",
        "Scale from sole proprietor to multi-department business without changing your accounting system",
      ],
      useCases: [
        {
          industry: "Small & Mid-Sized Businesses",
          description:
            "OikikBooks replaces spreadsheets and manual bookkeeping with proper double-entry accounting, automated invoicing, and real-time financial reports — everything an SME needs to manage money professionally.",
        },
        {
          industry: "Professional Services & Consultants",
          description:
            "Track project income, manage client invoices, monitor accounts receivable, and generate accurate profit & loss reports for each service line with OikikBooks.",
        },
        {
          industry: "Retail & E-commerce",
          description:
            "Connect sales revenue to your general ledger, manage accounts payable for suppliers, reconcile payment processor deposits, and get real-time margin visibility with OikikBooks.",
        },
      ],
      technicalHighlights: [
        "Strict double-entry bookkeeping engine with atomic posting and row-level locking",
        "Real-time financial report computation — no batch jobs or month-end closes required",
        "Hierarchical chart of accounts with parent-child relationships and account type classification",
        "Bank reconciliation with auto-matching, configurable tolerance, and outstanding item tracking",
        "Multi-currency support with automatic exchange rate conversion",
        "Role-based access control with granular permissions for accountants, managers, and staff",
        "Cloud-hosted with automated backups, bank-grade encryption, and 99.9% uptime SLA",
      ],
    },
    {
      id: "oikikinventory",
      name: "OikikInventory",
      tagline:
        "Cloud inventory management software for warehouses, retail & supply chains",
      shortDescription:
        "OikikInventory is a standalone cloud inventory management software that gives you real-time stock visibility, automated reorder points, warehouse management, and purchase order tracking — built for businesses that need total control over their supply chain.",
      icon: "Package",
      hero: {
        headline:
          "OikikInventory — Inventory Management Software for Modern Businesses",
        subheadline:
          "OikikInventory gives you real-time stock tracking, automated reorder alerts, multi-warehouse management, barcode scanning, and purchase order workflows. Stop losing money to stockouts, overstocking, and manual counting — take control of your inventory.",
        image: "oikikinventory-warehouse",
        primaryCTA: "Start Free Trial",
        primaryCTAHref: "/contact",
        secondaryCTA: "View Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "Package",
          title: "Real-Time Stock Tracking",
          description:
            "Track inventory levels across all warehouses and locations in real time. OikikInventory updates stock quantities instantly on every receipt, transfer, sale, and adjustment — no more guesswork.",
        },
        {
          icon: "Bell",
          title: "Automated Reorder Alerts",
          description:
            "Set minimum stock levels, safety stock thresholds, and reorder points for every item. OikikInventory sends automatic alerts and can generate draft purchase orders when stock runs low.",
        },
        {
          icon: "Building",
          title: "Multi-Warehouse Management",
          description:
            "Manage inventory across multiple warehouses, stores, and locations from one dashboard. Track inter-warehouse transfers, allocate stock by location, and optimize distribution.",
        },
        {
          icon: "ScanBarcode",
          title: "Barcode & SKU Management",
          description:
            "Generate and scan barcodes for fast receiving, picking, and stock counting. OikikInventory supports custom SKU schemes, batch tracking, and serial number management.",
        },
        {
          icon: "ShoppingCart",
          title: "Purchase Order Workflows",
          description:
            "Create purchase orders, track supplier deliveries, manage partial receipts, and match invoices to POs. Streamline your entire procurement process from requisition to receipt.",
        },
        {
          icon: "TrendingUp",
          title: "Inventory Analytics & Forecasting",
          description:
            "Analyze stock turnover, identify slow-moving items, forecast demand based on historical data, and optimize carrying costs with built-in inventory intelligence dashboards.",
        },
      ],
      benefits: [
        "Eliminate stockouts and lost sales with automated reorder points and real-time stock visibility",
        "Reduce excess inventory and carrying costs with demand forecasting and turnover analytics",
        "Save hours on stock counts with barcode scanning, batch tracking, and serial number management",
        "Manage multiple warehouses and locations from one unified inventory dashboard",
        "Streamline procurement with end-to-end purchase order workflows and supplier management",
        "Connect inventory directly to accounting with OikikBooks integration for automatic COGS tracking",
      ],
      useCases: [
        {
          industry: "Wholesale & Distribution",
          description:
            "OikikInventory manages high-volume stock across warehouses with real-time tracking, automated reorders, batch management, and purchase order workflows built for distributors.",
        },
        {
          industry: "Retail & E-commerce",
          description:
            "Sync inventory across physical stores and online channels, automate stock alerts, and track every unit from warehouse to customer with OikikInventory.",
        },
        {
          industry: "Manufacturing",
          description:
            "Track raw materials, work-in-progress, and finished goods across production stages. Manage bills of materials, component stock levels, and production output with OikikInventory.",
        },
      ],
      technicalHighlights: [
        "Real-time stock engine with instant updates on every inventory movement",
        "Multi-warehouse support with inter-location transfer tracking and allocation",
        "Barcode generation and scanning with mobile device support",
        "Batch tracking and serial number management for traceability",
        "Automated reorder point engine with configurable safety stock thresholds",
        "RESTful API for integration with e-commerce platforms, POS systems, and accounting software",
        "Cloud-hosted with automated backups, role-based access, and 99.9% uptime SLA",
      ],
    },
    {
      id: "oikikhr",
      name: "OikikHR",
      tagline:
        "Cloud HR management software for payroll, attendance & employee lifecycle",
      shortDescription:
        "OikikHR is a standalone cloud human resource management software that handles payroll processing, attendance tracking, leave management, employee onboarding, and performance reviews — everything you need to manage your workforce from one platform.",
      icon: "UserCog",
      hero: {
        headline:
          "OikikHR — Human Resource Management Software for Modern Teams",
        subheadline:
          "OikikHR streamlines your entire HR operation with automated payroll, attendance tracking, leave management, employee self-service, recruitment pipelines, and performance reviews. From hire to retire — manage your people with confidence.",
        image: "oikikhr-office",
        primaryCTA: "Start Free Trial",
        primaryCTAHref: "/contact",
        secondaryCTA: "View Features",
        secondaryCTAHref: "#product-features",
      },
      keyFeatures: [
        {
          icon: "Banknote",
          title: "Automated Payroll Processing",
          description:
            "Run payroll in minutes with automated salary calculations, tax deductions, overtime rules, and bank disbursements. OikikHR handles complex pay structures, bonuses, and compliance effortlessly.",
        },
        {
          icon: "Clock",
          title: "Attendance & Time Tracking",
          description:
            "Track employee attendance with biometric integration, mobile check-in, GPS-based tracking, and shift scheduling. OikikHR automatically feeds attendance data into payroll calculations.",
        },
        {
          icon: "CalendarDays",
          title: "Leave Management System",
          description:
            "Configure leave policies, accrual rules, and approval workflows. Employees request leave through self-service, managers approve with one click, and balances update automatically.",
        },
        {
          icon: "UserPlus",
          title: "Recruitment & Onboarding",
          description:
            "Post job openings, track applicants through hiring stages, send offer letters, and onboard new employees with automated checklists, document collection, and training assignments.",
        },
        {
          icon: "Target",
          title: "Performance Management",
          description:
            "Set goals, conduct 360-degree reviews, track KPIs, and manage appraisal cycles. OikikHR gives managers and employees a structured framework for continuous performance improvement.",
        },
        {
          icon: "FolderOpen",
          title: "Employee Self-Service Portal",
          description:
            "Employees can view payslips, request leave, update personal information, access company policies, and submit expense claims — reducing HR administrative overhead by up to 70%.",
        },
      ],
      benefits: [
        "Process payroll in minutes instead of days with automated calculations, deductions, and disbursements",
        "Eliminate attendance disputes with biometric, mobile, and GPS-based time tracking",
        "Reduce HR administrative workload by 70% with employee self-service for leave, payslips, and claims",
        "Never miss compliance deadlines with automated tax calculations, statutory deductions, and filing reminders",
        "Improve employee retention with structured onboarding, goal tracking, and performance review cycles",
        "Get workforce insights with headcount analytics, attrition reports, and department cost dashboards",
      ],
      useCases: [
        {
          industry: "Growing Businesses (50–500 Employees)",
          description:
            "OikikHR replaces spreadsheets and manual HR processes with automated payroll, digital attendance, and self-service — giving growing teams the HR infrastructure they need to scale.",
        },
        {
          industry: "Manufacturing & Field Operations",
          description:
            "Manage shift scheduling, overtime tracking, field worker attendance via GPS, and complex pay structures across multiple locations with OikikHR.",
        },
        {
          industry: "Professional Services & IT",
          description:
            "Track billable hours, manage project-based teams, run structured performance reviews, and handle multi-tier compensation plans with OikikHR.",
        },
      ],
      technicalHighlights: [
        "Automated payroll engine with configurable salary structures, tax rules, and statutory compliance",
        "Biometric and mobile attendance integration with GPS-based check-in support",
        "Configurable leave policies with accrual rules, carry-forward logic, and approval workflows",
        "Recruitment pipeline with applicant tracking, interview scheduling, and offer management",
        "Employee self-service portal for payslips, leave requests, claims, and profile updates",
        "RESTful API for integration with accounting software, biometric devices, and third-party tools",
        "Cloud-hosted with role-based access, data encryption, audit logs, and 99.9% uptime SLA",
      ],
    },
  ],
};
