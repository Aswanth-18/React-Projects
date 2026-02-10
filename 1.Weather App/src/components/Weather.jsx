import { useState } from "react";
import { API_URL } from "../hardcodes/Api";
import Weather from "./WeatherCard";

const Search = () => {
  const [city, setCity] = useState("");
  const [datas, setDatas] = useState(null);

  const handleWeather = async () => {
    if (!city.trim()) return;

    const res = await fetch(API_URL(city));
    const data = await res.json();
    setDatas(data);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
        🌤 Weather App
      </h1>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="text"
          placeholder="Enter city..."
          className="px-4 py-2 rounded-xl text-white outline-none w-full sm:w-64
          focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900
          transition shadow-md"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="bg-sky-500 hover:bg-sky-600 cursor-pointer active:scale-95 transition rounded-xl px-5 py-2 shadow-lg"
          onClick={handleWeather}
        >
          Search
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 cursor-pointer active:scale-95 transition rounded-xl px-5 py-2 shadow-lg"
          onClick={() => {
            setDatas(null);
            setCity("");
          }}
        >
          Clear
        </button>
      </div>

      <div className="mt-8">
        {datas && <Weather wr={datas} />}
      </div>
    </div>
  );
};

export default Search;
