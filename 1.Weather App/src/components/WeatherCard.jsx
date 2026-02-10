import { useState } from "react";

const Weather = ({ wr }) => {
  const [unit, setUnit] = useState("C");

  const convertTemp = (k) =>
    unit === "C"
      ? Math.round(k - 273.15)
      : Math.round((k - 273.15) * 9 / 5 + 32);

  const formatTime = (t) => new Date(t * 1000).toLocaleTimeString();

  return (
    <div className="text-white animate-[fadeIn_.4s_ease-in-out]">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{wr?.name}</h2>

        <button
          className="bg-indigo-500 px-4 py-1 rounded-xl cursor-pointer active:scale-95 transition shadow"
          onClick={() => setUnit(unit === "C" ? "F" : "C")}
        >
          °{unit === "C" ? "F" : "C"}
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition cursor-default">
          <p>🌡 Temp: {convertTemp(wr?.main?.temp)}°{unit}</p>
          <p>Feels: {convertTemp(wr?.main?.feels_like)}°{unit}</p>
          <p>Min: {convertTemp(wr?.main?.temp_min)}°{unit}</p>
          <p>Max: {convertTemp(wr?.main?.temp_max)}°{unit}</p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition cursor-default">
          <p>💧 Humidity: {wr?.main?.humidity}%</p>
          <p>📈 Pressure: {wr?.main?.pressure} hPa</p>
          <p>🍃 Wind: {wr?.wind?.speed} m/s</p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition cursor-default text-center">
          <p>🌅 Sunrise: {formatTime(wr?.sys?.sunrise)}</p>
          <p>🌇 Sunset: {formatTime(wr?.sys?.sunset)}</p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition cursor-default text-center capitalize">
          🌥 {wr?.weather?.[0]?.description}
        </div>

      </div>
    </div>
  );
};

export default Weather;
