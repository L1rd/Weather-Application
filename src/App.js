import "macro-css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainTemperatureBlock } from "./components/DateTemperature/MainTemperatureBlock/index.js";
import { SearchToolbar } from "./components/SearchToolbar";
import { DayTemperatureBlock } from "./components/DayTemperature";
import { TEMPERATURE_INDEXES_TEMPLATE } from "./utilities/constants/temperature-indexes-template";
import { THEMES } from "./utilities/constants/theme.js";
import { UVIndexInfo } from "./components/UVIndexInfo/index.js";
import { SunriseSunsetInfo } from "./components/SunriseSunsetInfo/index.js";
import { HumidityInfo } from "./components/HumidityInfo/index.js";
import './index.scss';

function App() {
  const [theme, setTheme] = useState(THEMES.light)
  const [data, setData] = useState({
    city: "Vinnytsya",
    country: "",
    list: [],
    astro: {},
    days: [],
    current: {
      icon: "",
      temp: "",
      text: "",
      uv: "",
      humidity: "",
    }
  });

  const fetchWeatherhData = async () => {
    try {
      const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=89a86a5eb4654dd2a7471558221710&q=${data.city}&days=7&aqi=no&alerts=no`)
      const mainData = weatherResponse.data;
      const inputData = {
        city: mainData.location.name,
        country: mainData.location.country,
        list: mainData.forecast.forecastday[0].hour.filter((obj, index) => TEMPERATURE_INDEXES_TEMPLATE.includes(index)),
        astro: mainData.forecast.forecastday[0].astro,
        days: mainData.forecast.forecastday,
        current: {
          icon: mainData.current.condition.icon,
          temp: mainData.current.temp_c,
          text: mainData.current.condition.text,
          uv: mainData.current.uv,
          humidity: mainData.current.humidity
        }
      }
      setData(prev => ({ ...prev, ...inputData }));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchWeatherhData();
  }, [data.city]);

  return (
    <div className={`wrapper ${theme}`}>
      <div className="app">
        <SearchToolbar city={data.city} country={data.country} theme={theme} setTheme={setTheme} setData={setData} />
        <MainTemperatureBlock currentDate={data.current} dayTemperatureList={data.list} />
        <div className="app__additional d-flex align-center justify-between mb-30">
          <UVIndexInfo uvIndex={data.current.uv} />
          <SunriseSunsetInfo currentSunriseSunset={data.astro} />
          <HumidityInfo humidity={data.current.humidity} />
        </div>
        <DayTemperatureBlock daysTemperature={data.days} />
      </div>
    </div>
  );
}

export default App;
