import './App.css';
import {useEffect, useState} from "react"
function App() {
  const name = "Thailand"
  const apikey ="783e1e3c234b4ef82dac79ea347d7f00"
  const [city,setCity] = useState({})
  const [isloading,setIsloading] = useState(false)

  useEffect(()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
     fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setIsloading(true)
      setCity(data)
    })
  },[name])

  const convertTemp = (k)=>{
    return (k-273).toFixed()
  }
  return (
    (isloading &&  <div className="App">
    <section> 
        <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country}</p>
        </div>
        <div className="card">
            <div className="weather">
                <h1>{convertTemp(city.main.temp)}&deg;c</h1>
                <small>สูงสุด : {convertTemp(city.main.temp_max)}&deg;c , ต่ำสุด : {convertTemp(city.main.temp_min)}&deg;c</small>
            </div>
            <div className="info">
                <div className="status">{city.weather[0].main}</div>
                <div className="humidity">ความชื้น = {city.main.humidity}</div>
                <div className="wind">ความเร็วลม = {city.wind.speed}</div>
            </div>
        </div>
    </section>
  </div>)
  );
}

export default App;
