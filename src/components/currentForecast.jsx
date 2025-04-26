import React from 'react'

const currentForecast = ({weatherData}) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div className="text-gray-500">No weather data available.</div>
  }

  return (
    <div className='currentForecastWrapper flex flex-col justify-center items-center w-[25%] h-[100%] bg-gray-200 gap-3'>
      <h2 className="text-4xl font-semibold">{weatherData.name}</h2>

      <div className="text-5xl font-bold">{Math.round(weatherData.main.temp)}°C</div>
      <div className="text-lg text-gray-600">{weatherData.weather[0].description}</div>

      <div className="text-sm text-gray-700">
        <span>High: {Math.round(weatherData.main.temp_max)}°C</span> | <span>Low: {Math.round(weatherData.main.temp_min)}°C</span>
      </div>
    </div>
  )
}

export default currentForecast