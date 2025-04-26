import React from 'react'
import { useState, useEffect } from 'react'
import Search from './components/search.jsx'
import CurrentForecast from './components/currentForecast.jsx'
import SingleForecast from './components/singleForecast.jsx'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.length > 2) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`)
          .then(res => res.json())
          .then(data => setWeatherData(data))
          .catch(err => console.error('Error fetching weather:', err))
      }
    }, 500) // debounce delay (ms)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])
  

  return (
    <main className="h-screen bg-sky-100 flex justify-center items-center">
      <div className='Wrapper mx-auto my-auto bg-gray-300 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 w-[90%] h-4/5 flex flex-col justify-start items-center'>
        <header className='justify-start items-start'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
  
        <div className='w-[100%] mt-5 h-[35%] flex items-center justify-center'>
          {weatherData && <CurrentForecast weatherData={weatherData} />}
        </div>

        <div className='w-[100%] mt-10 h-[45%] bg-white flex flex-col justify-center items-center px-3'>
          <h2 className="text-4xl font-semibold mt-5">7 day Forecast</h2>

          <div className='7DayForecastContainer w-[100%] h-[80%] flex items-center gap-4'>
            <SingleForecast />
            <SingleForecast />
            <SingleForecast />
            <SingleForecast />
            <SingleForecast />
            <SingleForecast />
            <SingleForecast />
          </div>

        </div>
      </div>
    </main>
  )
}

export default App