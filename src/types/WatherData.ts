
import { Forecast } from "./Forecast";

export type WeatherData = {
  forecasts: Forecast[];
  description: string;
  location: Location[];

  title: string;
  publicTimeFormatted: string;
};
