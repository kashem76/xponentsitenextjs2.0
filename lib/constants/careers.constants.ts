// lib/constants/careers.constants.ts

import { Lightbulb, Users, Rocket, Heart } from "lucide-react";
import { ICareersValue } from "@/lib/types/careers.types";

export const CAREERS_VALUES: ICareersValue[] = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technology and encourage creative problem-solving.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented people who support each other's growth and success.",
  },
  {
    icon: Rocket,
    title: "Ownership & Impact",
    description:
      "Own your work, make decisions, and see the direct impact of what you build.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible schedules, remote options, and a culture that respects your time.",
  },
];

export const CAREERS_PERKS: string[] = [
  "Competitive salary and performance bonuses",
  "Remote-first work culture",
  "Flexible working hours",
  "Professional development budget",
  "Modern tech stack and tools",
  "Health and wellness benefits",
  "Team events and activities",
  "Opportunity for equity/ownership",
];
