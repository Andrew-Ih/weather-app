import React from 'react'

const CurrentForecast = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div className="text-gray-500">No weather data available.</div>
  }

  return (
    <div className='currentForecastWrapper flex flex-col justify-center items-center w-[25%] h-full bg-white rounded-xl shadow-lg p-6 gap-3'>
      <h2 className="text-4xl font-semibold text-gray-800">{weatherData.name}</h2>
      <div className="text-5xl font-bold text-indigo-600">{Math.round(weatherData.main.temp)}°C</div>
      <div className="text-lg text-gray-500 capitalize">{weatherData.weather[0].description}</div>
      <div className="text-sm text-gray-700">
        <span>High: {Math.round(weatherData.main.temp_max)}°C</span> | <span>Low: {Math.round(weatherData.main.temp_min)}°C</span>
      </div>
    </div>
  )
}

export default CurrentForecast