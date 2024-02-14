import React, { useEffect, useState } from "react";
type Forecast = {
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
    t00_06: string;
    t06_12: string;
    t12_18: string;
    t18_24: string;
  };
};
type Location = {
  area: string;
  city: string;
  destrict: string;
  prefecture: string;
};

type Description = {
  bodyText: string;
};
type WeatherData = {
  forecasts: Forecast[];
  description: Description;
  location: Location[];

  title: string;
  publicTimeFormatted: string;
};

export default function Day() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    description: "",
    forecasts: [],
    location: [],
    title: "",
    publicTimeFormatted: "",
  });
  useEffect(() => {
    const fetchwataherData = async () => {
      const responce = await fetch("https://weather.tsukumijima.net/api/forecast/city/200010");
      if (responce.ok) {
        const data = await responce.json();
        console.log(data);
        setWeatherData({
          description: data.description,
          forecasts: data.forecasts,
          location: data.location,
          title: data.title,
          publicTimeFormatted: data.publicTimeFormatted,
        });
      }
    };
    fetchwataherData();
  }, []);

  return (
    <div className="m-auto container bg-white h-full w-full rounded-3xl shadow-2xl p-10  ">
      <span className="text-2xl font-bold">Day</span>
      <h1 className="text-center text-xl"> {weatherData.title}</h1>
      <img
        className="w-10/12 m-auto"
        loading="lazy"
        src={weatherData.forecasts[0]?.image.url}
        alt="weather"
      />

      <div className="forecast-container space-y-5">
        <p>{weatherData.publicTimeFormatted}</p>
        <p>{weatherData.description.bodyText}</p>

        {weatherData.forecasts[0] && (
          <div
            key={weatherData.forecasts[0].date}
            className="flex space-x-2 justify-center items-center space-x-5"
          >
            <div className="flex flex-col items-center">
              <span>Forecast</span>
              <p className="font-bold text-2xl">{weatherData.forecasts[0].telop}</p>
            </div>
            <div className=" pl-4 flex flex-col items-center border-l  border-gray-300">
              Maximum
              <p className="font-bold text-2xl">
                {weatherData.forecasts[0].temperature.max?.celsius ? (
                  <span>{weatherData.forecasts[0].temperature.max.celsius}度</span>
                ) : (
                  <span>不明</span>
                )}
              </p>
            </div>
            <div className=" pl-4 flex flex-col items-center border-l border-gray-300">
              <span>Minimum</span>
              <p className="font-bold text-2xl">
                {weatherData.forecasts[0].temperature.min?.celsius ? (
                  <span>{weatherData.forecasts[0].temperature.min.celsius}度</span>
                ) : (
                  <span>不明</span>
                )}
              </p>
            </div>
            <div className=" pl-4 flex flex-col items-center border-l border-gray-300">
              <span>Wind</span>
              <p className="font-bold text-2xl">{weatherData.forecasts[0].detail.wind}</p>
            </div>

            {weatherData.forecasts[0].detail.wave && (
              <div className="flex flex-col items-center">
                <span>Wave</span>
                <p className="font-bold text-2xl">{weatherData.forecasts[0].detail.wave}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
