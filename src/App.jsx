import { useState } from 'react'
import arrowIcon from './assets/icon-arrow.svg'
import FormInputUser from './components/FormInputUser'
import AgeResult from './components/AgeResult'
import './App.css'

import moment from 'moment'

const App = () => {
  const initInputUser = { day: undefined, month: undefined, year: undefined }
  const initErrorListener = {
    day: { status: false, message: '' },
    month: { status: false, message: '' },
    year: { status: false, message: '' }
  }

  const [inputUser, setInputUser] = useState(initInputUser)
  const [errorDate, setErrorDate] = useState(null)
  const [errorListener, setErrorListener] = useState(initErrorListener)
  const [result, setResult] = useState(null)

  const calculate = () => {
    const currentDate = moment()
    const setDate = moment([inputUser.year, (inputUser.month - 1), inputUser.day])
    
    if(validation()) {
      if(currentDate > setDate) {
        if(setDate.isValid()) {
          const duration = moment.duration(currentDate.diff(setDate))
          setResult({
            days: duration._data.days,
            months: duration._data.months,
            years: duration._data.years,
          })

          setErrorDate(null)
        } else {
          setErrorDate("Input date is invalid")
        }
      } else {
        setErrorDate("Input date should'nt be more than current date")
      }
    }
  }

  const changeHandler = (input, value) => {
    if(input === 'day') {
      setInputUser((prevInput) => { return { ...prevInput, day: value } })
    } else if(input === 'month') {
      setInputUser((prevInput) => { return { ...prevInput, month: value } })
    } else if(input === 'year') {
      setInputUser((prevInput) => { return { ...prevInput, year: value } })
    } else {
      return
    }
  }

  const validation = () => {
    let status = true
    setErrorListener(initErrorListener)

    for(const [key, value] of Object.entries(inputUser)) {
      if(key === 'day') {
        if(!dayValidation(+value)) {
          setErrorListener(prevState => {
            return {
              ...prevState,
              [key]: { status: true, message: `Must be a valid day` }
            }
          })

          status = false
        }
      } else if(key === 'month') {
        if(!monthValidation(+value)) {
          setErrorListener(prevState => {
            return {
              ...prevState,
              [key]: { status: true, message: `Must be a valid month` }
            }
          })

          status = false
        }
      } else if(key === 'year') {
        if(!yearValidation(+value)) {
          setErrorListener(prevState => {
            return {
              ...prevState,
              [key]: { status: true, message: `Must be a valid year` }
            }
          })

          status = false
        }
      }

      // validation for required input
      if(value === undefined || value === null) {
        setErrorListener(prevState => {
          return {
            ...prevState,
            [key]: { status: true, message: `Input ${key} is required` }
          }
        })

        status = false
      }
    }

    return status
  }

  const dayValidation = value => {
    if(value < 1 || value > 31) return false
    return true
  }

  const monthValidation = value => {
    if(value < 1 || value > 12) return false
    return true
  }

  const yearValidation = value => {
    if(value < 1) {
      return false
    } else {
      const currentYear = +moment().format('YYYY')

      if(value > currentYear) return false
      return true
    }
  }

  return (
    <div className="bg-[#F0F1F1] min-h-screen flex justify-center items-center font-poppins">
      <div className="bg-white rounded-t-3xl rounded-bl-3xl rounded-br-[10rem] sm:p-10 px-4 py-10 md:w-1/2 w-full m-5">
        {/* Form input */}
        <FormInputUser 
          data={inputUser} 
          onChangeDate={changeHandler}
          errorListener={errorListener}
        />

        {/* Error State */}
        <p className="text-[11px] text-red">{errorDate}</p>
        
        {/* Divider */}
        <div className="my-8 sm:my-14 relative flex sm:justify-end justify-center">
          <hr className="w-full absolute sm:top-0 top-8 z-0"/>
          <button className="
            rounded-full bg-black hover:bg-primary 
            duration-300 sm:w-20 w-16 sm:h-20 h-16 
            sm:absolute sm:right-0 sm:-top-10 flex 
            justify-center items-center z-10" 
            onClick={calculate}
          >
            <img src={arrowIcon} alt="arrow icon" className="sm:w-10 sm:h-10 w-6 h-6"/>
          </button>
        </div>

        {/* Result */}
        <AgeResult data={result} />
      </div>
    </div>
  )
}

export default App