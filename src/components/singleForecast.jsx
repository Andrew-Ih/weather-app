import React from 'react'

const singleForecast = () => {
  return (
    <div className='singleForecastWrapper flex flex-col justify-center items-center w-[25%] h-[70%] bg-gray-200 gap-3'>
      <h2 className="text-4xl font-semibold">Mon</h2>

      <div className="text-lg text-gray-600">Partly Cloudy</div>

      <div className="text-sm text-gray-700">
        <span>High: 15°C</span> | <span>Low: 5°C</span>
      </div>
    </div>
  )
}

export default singleForecast