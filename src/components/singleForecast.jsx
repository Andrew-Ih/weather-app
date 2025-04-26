import React from 'react'

const singleForecast = ({ dayData }) => {
  // Convert "2025-04-25 12:00:00" to a weekday name and date
  const getDayAndDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.toLocaleDateString('en-US', { weekday: 'short' }) // "Mon"
    const dateNum = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) // "Apr 27"
    return `${day} ${dateNum}`
  }

  // Convert "2025-04-25 12:00:00" to time
  const getTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) // "12:00 PM"
  }

  return (
    <div className="singleForecastWrapper flex flex-col justify-center items-center w-[25%] h-[70%] bg-white shadow-lg rounded-xl p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <h2 className="text-lg font-semibold text-gray-800">{getDayAndDate(dayData.dt_txt)}</h2>
      <p className="text-sm text-gray-400">{getTime(dayData.dt_txt)}</p>

      <div className="text-indigo-600 text-4xl font-bold mt-4">{Math.round(dayData.main.temp)}°C</div>

      <div className="text-xl text-gray-600 mt-2 capitalize">{dayData.weather[0].description}</div>
    </div>
  )
}

export default singleForecast