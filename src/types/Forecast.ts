export type Forecast = {
  title: string;
  date: string; // 予報の日付
  dateLabel: string; // 予報のラベル（例: "今日", "明日"）
  telop: string; // 天気の概況テキスト（例: "晴れ", "雨"）
  detail: {
    weather: string;
    wind: string;
    wave?: string;
  };
  image: {
    url: string;
  };
  temperature: {
    max?: {
      celsius: string;
    };
    min?: {
      celsius: string;
    };
  };
  chanceOfRain: {
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
  };
};
