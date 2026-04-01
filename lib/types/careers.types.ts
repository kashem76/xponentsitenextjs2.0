// lib/types/careers.types.ts

import { LucideIcon } from "lucide-react";

export interface ICareersValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ICareer {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  isOpen: boolean;
  postedDate: string;
  overview: string;
  responsibilities: string[];
  whatYouWillOwn?: string[];
  whatYouWillWorkOn?: string[];
  requirements: string[];
  niceToHave: string[];
  successMetrics: string[];
  whyJoin: string[];
}

export interface ICareersData {
  careers: ICareer[];
}
