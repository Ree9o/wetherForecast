import React from "react";

import { WeatherData } from "../../types/WatherData";

interface DayProps {
  data: WeatherData;
}

export default function NextDay({ data }: DayProps) {
  const { forecasts } = data;
  return (
    <div className="m-auto container bg-white w-full rounded-3xl shadow-2xl p-10">
      <span className="text-2xl font-bold">Next Days</span>

      <div className="forecast-container space-y-5">
        <div className="grid grid-col-1 md:grid-cols-2 md:grid-rows-1 ">
          {forecasts.slice(1, 3).map((forecast, index) => (
            <div
              key={forecast.date}
              className="flex flex-col items-center space-x-2 space-y-2 h-full"
            >
              <img
                className="w-3/6 mr-auto ml-auto"
                loading="lazy"
                src={forecasts[1]?.image?.url || forecasts[2]?.image?.url}
                alt="weather"
              />
              <div className="flex flex-col items-center">
                <span>{index === 0 ? "Tomorrow's Forecast" : "Day After Tomorrow's Forecast"}</span>
                <p className="font-bold text-2xl">{forecast.telop}</p>
              </div>
              <div className="flex space-x-3 ">
                <div className="flex flex-col items-center ">
                  Minimum
                  <p className="font-bold text-2xl">
                    {forecast.temperature.min?.celsius ? (
                      <span>{forecast.temperature.min.celsius}°C</span>
                    ) : (
                      <span>不明</span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col items-center pl-4 border-l border-gray-300">
                  Maximum
                  <p className="font-bold text-2xl">
                    {forecast.temperature.max?.celsius ? (
                      <span>{forecast.temperature.max.celsius}°C</span>
                    ) : (
                      <span>不明</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
