import "./App.css";
import Day from "./components/elements/Day";
import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const { weatherData } = useWeatherData();
  return (
    <>
      <div className="w-screen bg-gradient-to-br from-slate-50 to-indigo-100">
        <div className="grid grid-cols-2 gap-3 p-16">
          <Day data={weatherData} />
        </div>
      </div>
    </>
  );
}

export default App;
