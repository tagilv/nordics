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
