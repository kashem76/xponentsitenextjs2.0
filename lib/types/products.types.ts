export interface IProductHero {
  headline: string;
  subheadline: string;
  image: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface IProductKeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IProductUseCase {
  industry: string;
  description: string;
}

export interface IProduct {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  hero: IProductHero;
  keyFeatures: IProductKeyFeature[];
  benefits: string[];
  useCases: IProductUseCase[];
  technicalHighlights: string[];
}

export interface IProductsData {
  products: IProduct[];
}
