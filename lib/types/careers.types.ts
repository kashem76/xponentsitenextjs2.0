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
  urgent?: boolean;
  postedDate: string;
  overview: string;
  callout?: string;
  responsibilities: string[];
  whatYouWillOwn?: string[];
  whatYouWillWorkOn?: string[];
  requirements: string[];
  whoYouAre?: string[];
  whatWeDoNotNeed?: string[];
  technicalEnvironment?: string[] | { workWith: string[]; buildWith: string[] };
  niceToHave?: string[];
  successMetrics: string[];
  whyJoin: string[];
  locationNote?: string;
  applicationNote?: string;
  applicationSteps?: string[];
}

export interface ICareersData {
  careers: ICareer[];
}
