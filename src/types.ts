export type CategoryType = 
  | 'Cereals'
  | 'Vegetables'
  | 'Fruits'
  | 'Pulses'
  | 'Oilseed Crops'
  | 'Cash Crops'
  | 'Organic Farming'
  | 'Irrigation'
  | 'Soil Health'
  | 'Pest Control';

export type SeasonType = 'Rabi (Winter)' | 'Kharif (Summer)' | 'Zaid (Spring/Autumn)' | 'All Seasons';

export interface PestDisease {
  name: string;
  urduName?: string;
  type: 'Pest' | 'Disease';
  symptoms: string;
  prevention: string;
  organicTreatment: string;
}

export interface Crop {
  id: string;
  name: string;
  urduName: string;
  scientificName: string;
  family: string;
  category: CategoryType;
  season: SeasonType;
  imageUrl: string;
  heroImage: string;
  suitableClimate: string;
  soilType: string;
  soilPh: string;
  waterRequirements: string;
  irrigationMethod: string;
  temperatureRange: string;
  sowingTime: string;
  harvestingTime: string;
  seedRate: string;
  fertilizerRecommendation: string;
  commonPests: PestDisease[];
  organicPractices: string[];
  nutritionalValue: string;
  economicImportance: string;
  farmingTips: string[];
  interestingFacts: string[];
  description: string;
}

export interface EduArticle {
  id: string;
  title: string;
  urduTitle: string;
  category: string;
  iconName: string;
  summary: string;
  content: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
  readTime: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  urduQuestion: string;
  answer: string;
  category: string;
}

export interface WeatherCity {
  id: string;
  name: string;
  province: string;
  temp: number;
  condition: string;
  humidity: number;
  rainfall: string;
  soilMoisture: string;
  recommendation: string;
  icon: string;
}

export interface VoiceQuestion {
  id: string;
  question: string;
  urduQuestion: string;
  answer: string;
  urduAnswer: string;
  relatedCropId?: string;
  category: string;
}

export interface AgriFact {
  id: string;
  title: string;
  fact: string;
  urduFact: string;
  source: string;
  icon: string;
}

export interface FarmingTip {
  id: string;
  title: string;
  urduTitle: string;
  category: string;
  tip: string;
  urduTip: string;
  season: SeasonType;
}

export interface CalendarMonth {
  month: string;
  urduMonth: string;
  sowing: string[];
  harvesting: string[];
  irrigationFocus: string;
  notes: string;
}
