import { WeatherData } from "../../types/WatherData";

interface DayProps {
  data: WeatherData;
}

export default function Day({ data }: DayProps) {
  const { description, title, forecasts, publicTimeFormatted } = data;
  return (
    <div className="m-auto container bg-white h-full w-full rounded-3xl shadow-2xl p-10  ">
      <span className="text-2xl font-bold">Day</span>
      <h1 className="text-center text-xl"> {title}</h1>
      <img className="w-3/6 m-auto" loading="lazy" src={forecasts[0]?.image.url} alt="weather" />

      <div className="forecast-container space-y-5">
        <p>更新時間:{publicTimeFormatted}</p>
        <p className="text-sm">{description}</p>

        {forecasts[0] && (
          <div
            key={forecasts[0].date}
            className="flex  justify-center flex-col md:flex-row justify-center items-center space-x-5"
          >
            <div className="flex flex-col items-center">
              <span>Forecast</span>
              <p className="border-b md:border-b-0 border-gray-300 font-bold text-2xl md:border-none">
                {forecasts[0].telop}
              </p>
            </div>
            <div className=" md:pl-4 flex flex-col items-center border-b md:border-l md:border-b-0 border-gray-300">
              <span>Minimum</span>
              <p className="font-bold text-2xl">
                {forecasts[0].temperature.min?.celsius ? (
                  <span>{forecasts[0].temperature.min.celsius}度</span>
                ) : (
                  <span>不明</span>
                )}
              </p>
            </div>
            <div className=" md:pl-4 flex flex-col items-center border-b md:border-l  md:border-b-0 border-gray-300">
              Maximum
              <p className="font-bold text-2xl">
                {forecasts[0].temperature.max?.celsius ? (
                  <span>{forecasts[0].temperature.max.celsius}度</span>
                ) : (
                  <span>不明</span>
                )}
              </p>
            </div>

            <div className=" md:pl-4 flex flex-col items-center md:border-l md:border-gray-300">
              <span>Wind</span>
              <p className="font-bold text-xl">{forecasts[0].detail.wind}</p>
            </div>

            {forecasts[0].detail.wave && (
              <div className="md:pl-4 flex flex-col items-center md:border-l md:border-gray-300">
                <span>Wave</span>
                <p className="font-bold text-xl">{forecasts[0].detail.wave}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
