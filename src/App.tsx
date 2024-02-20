import "./App.css";
import Day from "./components/layouts/Day";
import NextDay from "./components/layouts/NextDay";
import { useWeatherData } from "./hooks/useWeatherData";
import ChanceOfRain from "./components/layouts/ChanceOfRain";
import City from "./components/layouts/City";
import data from "./libs/data.json";
import { useState } from "react";
function App() {
  const [selectedCityId, setSelectedCityId] = useState("270000");
  const { weatherData } = useWeatherData(selectedCityId);
  return (
    <>
      <div className="w-screen h-full bg-gradient-to-br from-slate-50 to-indigo-100 ">
        <div className="grid  space-y-6 grid-col-1 sm:grid-cols-2 sm:grid-rows-2 sm:gap-10  sm:space-y-0 p-8">
          <div className="grid-1">
            <NextDay data={weatherData} />
          </div>
          <div className="grid-2">
            <ChanceOfRain data={weatherData} />
          </div>
          <div className="grid-3">
            <Day data={weatherData} />
          </div>
        </div>
        <City setSelectedCityId={setSelectedCityId} cities={data} />
      </div>
    </>
  );
}

export default App;
