import { LucideIcon } from "lucide-react";

export interface IHomeValue {
  name: string;
  description: string;
  icon: string;
}

export interface IHomeService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IHomeTestimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export interface IHomeTrustedCompany {
  logo: string;
  name: string;
}
