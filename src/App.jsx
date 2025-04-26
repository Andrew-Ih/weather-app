import React from 'react'
import { useState } from 'react'
import Search from './components/search.jsx'
import CurrentForecast from './components/currentForecast.jsx'
import SingleForecast from './components/singleForecast.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main className="h-screen bg-sky-100 flex justify-center items-center">
      <div className='Wrapper mx-auto my-auto bg-gray-300 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 w-[90%] h-4/5 flex flex-col justify-start items-center'>
        <header className='justify-start items-start'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
  
        <div className='w-[100%] mt-5 h-[35%] flex items-center justify-center'>
          <CurrentForecast />
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