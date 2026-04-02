export interface IServiceHero {
  headline: string;
  subheadline: string;
  image: string;
  primaryCTA: string;
  primaryCTAHref: string;
  secondaryCTA: string;
  secondaryCTAHref: string;
}

export interface IServiceApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface IServiceCapability {
  icon: string;
  title: string;
  description: string;
}

export interface IService {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  hero: IServiceHero;
  approach: IServiceApproachStep[];
  capabilities: IServiceCapability[];
  benefits: string[];
  industries: string[];
  deliverables: string[];
}

export interface IServicesData {
  services: IService[];
}
