import { Code2, Bot, Database } from "lucide-react";
import {
  IHomeValue,
  IHomeService,
  IHomeTestimonial,
  IHomeTrustedCompany,
} from "@/lib/types/home.types";

export const HOME_HERO_IMAGE =
  "https://images.unsplash.com/photo-1762341121032-510ad9df0ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxhcHRvcCUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzMwODM4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const HOME_TRUSTED_COMPANIES: IHomeTrustedCompany[] = [
  { name: "ACME Corp" },
  { name: "TechFlow" },
  { name: "GlobalBank" },
  { name: "RetailPro" },
  { name: "HealthCare+" },
  { name: "AgriTech" },
];

export const HOME_VALUES: IHomeValue[] = [
  {
    name: "Employees",
    description:
      "Most fundamentally, people are the heart of our business. We couldn't exist without them. We expect greatness from those we hire.",
    icon: "1",
  },
  {
    name: "Customer Service",
    description:
      "Every investment and decision we make is made with our customers in mind, and we go to great lengths to ensure their satisfaction.",
    icon: "2",
  },
  {
    name: "Integrity",
    description:
      "We say exactly what we mean, and we mean exactly what we say. We keep our promises, treat everyone fairly, and communicate openly and honestly.",
    icon: "3",
  },
  {
    name: "Innovation",
    description:
      "We strive for innovation not only in our development organization, but also in our approach to all aspects of our business.",
    icon: "4",
  },
];

export const HOME_SERVICES: IHomeService[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We design and build software platforms tailored to your business operations, workflows, and data systems.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Introduce intelligent automation into everyday processes to reduce repetitive work and improve productivity.",
  },
  {
    icon: Database,
    title: "Digital Business Platforms",
    description:
      "We build scalable systems that support operations, customers, and business growth.",
  },
];

export const HOME_TESTIMONIALS: IHomeTestimonial[] = [
  {
    quote:
      "Xponent transformed our entire operations with their custom software solution. What used to take us days now takes hours. Their team understood our business deeply and delivered exactly what we needed.",
    name: "Sarah Chen",
    position: "Chief Operating Officer",
    company: "TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMDAwODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote:
      "The AI automation they built for us eliminated 60% of our manual data entry. The ROI was clear within the first quarter. I wish we had found Xponent years ago.",
    name: "Michael Rodriguez",
    position: "VP of Technology",
    company: "DataCore Industries",
    image:
      "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA1ODk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote:
      "Working with Xponent felt like having an internal tech team that actually understands business strategy. They're not just developers—they're true technology partners.",
    name: "Jennifer Park",
    position: "Founder & CEO",
    company: "Momentum Digital",
    image:
      "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzMwODExMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const HOME_ERROR_IMAGE_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
