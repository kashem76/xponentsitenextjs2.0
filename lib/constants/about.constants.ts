import { Users, Target, Shield, Lightbulb, Heart } from "lucide-react";
import {
  IAboutValue,
  IAboutStat,
  IAboutApproach,
  IAboutTeamHighlight,
} from "@/lib/types/about.types";

export const ABOUT_VALUES: IAboutValue[] = [
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We succeed when our clients succeed. Every project is a true partnership built on trust and collaboration.",
  },
  {
    icon: Target,
    title: "Technical Excellence",
    description:
      "We stay at the forefront of technology, delivering solutions built with precision, scalability, and best practices.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Clear communication, honest timelines, and realistic expectations. No surprises, just results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description:
      "We embrace new technology not for its own sake, but to solve real business problems and create measurable value.",
  },
  {
    icon: Heart,
    title: "Long-term Thinking",
    description:
      "We build for the future, creating systems that scale and relationships that last years, not months.",
  },
];

export const ABOUT_STATS: IAboutStat[] = [
  { number: "20+", label: "Years in Business" },
  { number: "500+", label: "Projects Delivered" },
  { number: "95%", label: "Client Retention" },
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Industries Served" },
  { number: "12", label: "Countries Worldwide" },
];

export const ABOUT_APPROACH: IAboutApproach[] = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business, goals, and challenges before proposing solutions.",
  },
  {
    title: "Collaborative Design",
    description:
      "You're involved at every stage. We design together, iterate quickly, and ensure alignment before development.",
  },
  {
    title: "Agile Development",
    description:
      "We build in iterations, delivering value incrementally so you can see progress and provide feedback continuously.",
  },
  {
    title: "Long-term Partnership",
    description:
      "Launch is just the beginning. We provide ongoing support, optimization, and evolution as your business grows.",
  },
];

export const ABOUT_TEAM_HIGHLIGHTS: IAboutTeamHighlight[] = [
  { text: "Remote-first culture with global talent" },
  { text: "Continuous learning and professional development" },
  { text: "Collaborative, supportive environment" },
];
