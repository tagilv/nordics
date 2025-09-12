export interface Expression {
  id: string;
  date: string;
  expression: string;
  pronunciation: string;
  meaning: string;
  translation: string;
  country: string;
}

export interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

export interface FunFact {
  title: string;
  description: string;
}

export interface LearningTime {
  level: string;
  duration: string;
}

export interface CountryInfo {
  funFacts: FunFact[];
  learningTime: LearningTime[];
}
