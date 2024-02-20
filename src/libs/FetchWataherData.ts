export const FetchWeatherData = async (id: string) => {
  const response = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${id}`);
  if (response.ok) {
    const data = await response.json();
    return {
      description: data.description.text,
      forecasts: data.forecasts,
      location: data.location,
      title: data.title,
      publicTimeFormatted: data.publicTimeFormatted,
    };
  }
  throw new Error("Failed to fetch weather data");
};
