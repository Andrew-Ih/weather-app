import React from 'react'

const currentForecast = () => {
  return (
    <div className='currentForecastWrapper flex flex-col justify-center items-center w-[25%] h-[100%] bg-gray-200 gap-3'>
      <h2 className="text-4xl font-semibold">Winnipeg</h2>

      <div className="text-5xl font-bold">12°C</div>
      <div className="text-lg text-gray-600">Partly Cloudy</div>

      <div className="text-sm text-gray-700">
        <span>High: 15°C</span> | <span>Low: 5°C</span>
      </div>
    </div>
  )
}

export default currentForecast