import { useState, useEffect } from "react";
import { FetchWeatherData } from "../libs/FetchWataherData";
import { WeatherData } from "../types/WatherData";

interface UseWeatherDataReturn {
  weatherData: WeatherData;
  isLoading: boolean;
  error: Error | null;
}

export function useWeatherData(): UseWeatherDataReturn {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    description: "",
    forecasts: [],
    location: [],
    title: "",
    publicTimeFormatted: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeWeatherData = async () => {
      try {
        const data = await FetchWeatherData();
        console.log(data)
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error as Error);
        setIsLoading(false);
      }
    };
    initializeWeatherData();
  }, []);

  return { weatherData, isLoading, error };
}
