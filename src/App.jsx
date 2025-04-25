import React from 'react'
import { useState } from 'react'
import Search from './components/search.jsx'
import CurrentForecast from './components/currentForecast.jsx'
// import singleForecast from './components/singleForecast.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main className="h-screen bg-sky-100 flex justify-center items-center">
      <div className='Wrapper mx-auto my-auto bg-gray-300 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 w-[90%] h-4/5 flex flex-col justify-start items-center'>
        <header className='justify-start items-start'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
  
        <div className='w-[100%] mt-5 h-[35%]  flex items-center justify-center'>
          <CurrentForecast />
        </div>

        <div className='w-[100%] mt-10 h-[45%] bg-white'>

        </div>
      </div>
    </main>
  )
}

export default App