import "macro-css";
import './App.scss';
import { MainBlock } from "./components/DateTemperature/index.js";
import { DateHeader } from "./components/DateHeader";
import axios from "axios";
import { useEffect, useState } from "react";



function App() {

  const [data, setData] = useState({
    city: "Vinnytsya",
    country: "",
    list: [],
    current: {
      icon: "",
      temp: "",
      text: "",
    }
  });

  const [date, setDate] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=89a86a5eb4654dd2a7471558221710&q=${data.city}&days=1&aqi=no&alerts=no`)
      .then(res => {
        const mainData = res.data;
        console.log(mainData);
        let obj = {
          city: mainData.location.name,
          country: mainData.location.country,
          list: mainData.forecast.forecastday[0].hour,
          current: {
            icon: mainData.current.condition.icon,
            temp: mainData.current.temp_c,
            text: mainData.current.condition.text,
          }
        }
        setData(obj);

      })
      .catch(error => console.log(error))
  }, [data.city])

  useEffect(() => {
    setInterval(() => setDate({
      h: new Date().getHours(),
      m: new Date().getMinutes(),
      s: new Date().getSeconds(),
    }), 1000);

  }, []);

  return (
    <div className="app">
      <DateHeader data={data} setData={setData} />
      <MainBlock data={data} date={date} />
      <div className="app__additional d-flex align-center justify-between">
        <div className="app__block">

        </div>
        <div className="app__block">

        </div>
        <div className="app__block">

        </div>
      </div>
    </div>
  );
}

export default App;
