export const FetchWeatherData = async () => {
  const response = await fetch("https://weather.tsukumijima.net/api/forecast/city/200010");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
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
