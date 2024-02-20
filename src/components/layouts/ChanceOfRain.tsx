import React from "react";
import { WeatherData } from "../../types/WatherData";

interface DayProps {
  data: WeatherData;
}

export default function ChanceOfRain({ data }: DayProps) {
  const { forecasts } = data;
  return (
    <div className="m-auto container bg-white w-full rounded-3xl shadow-2xl p-10">
      <span className="text-2xl font-bold">Chance Of Rain</span>
      <div className="grid grid-cols-1 grid-rows-3 space-y-3 ">
        {forecasts.map((forecast) => (
          <div key={forecast.date} className="flex flex-col items-center space-y-4 justify-center">
            <span className="text-xl">
            {forecast.date}

            </span>
            <div className="space-x-6">
              <span>00:00: {forecast.chanceOfRain.T00_06}</span>
              <span>06:00: {forecast.chanceOfRain.T06_12}</span>
              <span>12:00: {forecast.chanceOfRain.T12_18}</span>
              <span>18:00: {forecast.chanceOfRain.T18_24}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
