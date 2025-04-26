import React from 'react'
import { useState, useEffect } from 'react'
import Search from './components/search.jsx'
import CurrentForecast from './components/currentForecast.jsx'
import SingleForecast from './components/singleForecast.jsx'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState([])

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.length > 2) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`)
          .then(res => res.json())
          .then(data => {
            setWeatherData(data)
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric`)
          })
          .then(res => res.json())
          .then(forecast => {
            const dailyMiddayForecasts = forecast.list.filter(item => item.dt_txt.includes("12:00:00"))
            setForecastData(dailyMiddayForecasts)
          })
          .catch(err => console.error('Error fetching data:', err))
      }
    }, 500)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])

  return (
    <main className="h-screen bg-gradient-to-b from-sky-100 to-blue-200 flex justify-center items-center">
      <div className='Wrapper mx-auto bg-white/60 backdrop-blur-md rounded-xl p-6 w-[90%] h-4/5 flex flex-col justify-start items-center shadow-xl'>
        <header className='w-full flex justify-center'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <div className='w-full mt-5 h-[35%] flex items-center justify-center'>
          {weatherData && <CurrentForecast weatherData={weatherData} />}
        </div>

        <div className='w-full mt-10 h-[45%] bg-white rounded-xl p-4 flex flex-col justify-center items-center shadow-md'>
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">5 Day Forecast</h2>

          <div className='7DayForecastContainer w-full h-full flex items-center justify-center gap-4 overflow-x-auto'>
            {forecastData.map((day, index) => (
              <SingleForecast key={index} dayData={day} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App