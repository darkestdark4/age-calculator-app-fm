import { useState } from 'react'
import './App.css'
import arrowIcon from './assets/icon-arrow.svg'
import Input from './components/Input'

import moment from 'moment'

const App = () => {
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  const [resultDay, setResultDay] = useState(null)
  const [resultMonth, setResultMonth] = useState(null)
  const [resultYear, setResultYear] = useState(null)

  const [errorDay, setErrorDay] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)

  const convertDate = () => {
    const currentDate = moment()
    const setDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD')
    
    if(currentDate > setDate) {
      const duration = moment.duration(currentDate.diff(setDate))

      setResultDay(duration._data.years)
      setResultMonth(duration._data.months)
      setResultYear(duration._data.days)
    }

    console.log(setDate.isValid())
  }

  return (
    <div className="App bg-[#F0F1F1] min-h-screen flex justify-center items-center font-poppins">
      <div className="bg-white rounded-t-3xl rounded-bl-3xl rounded-br-[10rem] sm:p-10 px-4 py-10 md:w-1/2 w-full m-5">
        {/* Form input */}
        <div className="flex flex-wrap sm:justify-start justify-between flex-row sm:gap-6">
          <div className="flex flex-col sm:w-40 w-[30%]">
            <label className="uppercase mb-1 tracking-[0.3em] text-sm font-bold text-smokey-grey">day</label>
            <input 
              type="number" 
              className="sm:text-[32px] text-[18px] font-extrabold sm:px-4 px-3 py-2 border border-gray-300 focus:border-primary rounded" 
              placeholder="DD"
              value={day}
              onChange={e => setDay(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:w-40 w-[30%]">
            <label className="uppercase mb-1 tracking-[0.3em] text-sm font-bold text-smokey-grey">month</label>
            <input 
              type="number" 
              className="sm:text-[32px] text-[18px] font-extrabold sm:px-4 px-3 py-2 border border-gray-300 focus:border-primary rounded" 
              placeholder="MM"
              value={month}
              onChange={e => setMonth(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:w-40 w-[30%]">
            <label className="uppercase mb-1 tracking-[0.3em] text-sm font-bold text-smokey-grey">year</label>
            <input 
              type="number" 
              className="sm:text-[32px] text-[18px] font-extrabold sm:px-4 px-3 py-2 border border-gray-300 focus:border-primary rounded" 
              placeholder="YYYY"
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-14 relative flex sm:justify-end justify-center">
          <hr className="w-full absolute sm:top-0 top-8 z-0"/>
          <button className="rounded-full bg-black hover:bg-primary duration-300 sm:w-20 w-16 sm:h-20 h-16 sm:absolute sm:right-0 sm:-top-10 flex justify-center items-center z-10" onClick={() => convertDate()}>
            <img src={arrowIcon} alt="arrow icon" className="sm:w-10 sm:h-10 w-6 h-6"/>
          </button>
        </div>

        {/* Result */}
        <div className="flex flex-col font-extrabold italic sm:text-8xl text-[2.5rem]">
          <p><span className="text-primary">{ (resultDay === null) ? '- -' : resultDay }</span> years</p>
          <p><span className="text-primary">{ (resultMonth === null) ? '- -' : resultMonth }</span> months</p>
          <p><span className="text-primary">{ (resultYear === null) ? '- -' : resultYear }</span> days</p>
        </div>
      </div>
    </div>
  )
}

export default App
