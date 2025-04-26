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
    <div className='singleForecastWrapper flex flex-col justify-center items-center w-[25%] h-[70%] bg-gray-200 p-4 rounded-md'>
      <h2 className="text-xl font-semibold">{getDayAndDate(dayData.dt_txt)}</h2>
      <p className="text-lg text-gray-500">{getTime(dayData.dt_txt)}</p>

      <div className="text-gray-700 text-4xl mt-2 font-bold">
        {Math.round(dayData.main.temp)}°C
      </div>

      <div className="text-xl text-gray-600 mt-2 capitalize">{dayData.weather[0].description}</div>
    </div>
  )
}

export default singleForecast