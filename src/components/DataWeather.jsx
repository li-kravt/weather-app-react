import { useState, useEffect } from "react";


export default function DataFetch() {
  const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&hourly=temperature_2m&current=temperature_2m&forecast_days=1&timeformat=unixtime"

  const [currentTime, setCurrentTime] = useState(null);
  const [curTemp, setCurTemp] = useState(null);

  useEffect(() => {
    console.log("useEffect запустился!")

    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const now = new Date()
        const nowMin = now.getMinutes()
        console.log("Current time: ", now)

        const formatted = now.getHours() + ":" + (nowMin < 10 ? "0" + nowMin : nowMin) + " today"

        setCurrentTime(formatted)

        const temp = data.current.temperature_2m
        setCurTemp(temp + "°C")

      } catch (e) {
        console.error("Error fetching data:", e);
      }
    }
    fetchData()
  }, []);

  if (currentTime === null || curTemp === null) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return <div className="flex flex-col justify-center items-center">
    <p className="text-black m-0">{currentTime}</p>
    <p className="font-extrabold text-4xl">{curTemp}</p>
  </div>;
}