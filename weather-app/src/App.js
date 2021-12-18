import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const name = "Chiang Rai";
  const [data, setData] = useState("");
  const [name, setName] = useState("Bangkok");
  const apiKey = "a140ba932db1a5395f41c67b9e8c376b";
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoading(true);
      });
  }, [name]);

  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data) {
      setName(data);
    } else {
      setName("Thailand");
    }
  };

  return (
    isLoading && (
      <div className="App">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setData(e.target.value)} />
          <button type="submit">ค้นหา</button>
        </form>
        <section>
          <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country} </p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{convertTemp(city.main.temp)} &deg;C</h1>
              <small>
                max : {convertTemp(city.main.temp_max)} &deg;C | min :{" "}
                {convertTemp(city.main.temp_min)} &deg;C
              </small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">humidity = {city.main.humidity} %</div>
              <div className="wind">
                wind = {city.wind.speed} | {city.wind.deg}&deg;
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default App;
