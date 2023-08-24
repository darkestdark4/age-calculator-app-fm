import Input from './Input'

const FormInputUser = (props) => {
  const changeHandler = (input, value) => {
    props.onChangeDate(input, value)
  }

  return <>
    <div className="flex flex-wrap sm:justify-start justify-between flex-row sm:gap-6">
      <div className="flex flex-col sm:w-40 w-[30%]">
        <Input 
          label="day" 
          placeholder="DD"
          value={props.data.day}
          error={props.errorListener.day}
          onChangeHandler={e => changeHandler('day', e)}
        />
      </div>
      <div className="flex flex-col sm:w-40 w-[30%]">
        <Input 
          label="month" 
          placeholder="MM"
          value={props.data.month}
          error={props.errorListener.month}
          onChangeHandler={e => changeHandler('month', e)}
        />
      </div>
      <div className="flex flex-col sm:w-40 w-[30%]">
        <Input 
          label="year" 
          placeholder="YYYY"
          value={props.data.year}
          error={props.errorListener.year}
          onChangeHandler={e => changeHandler('year', e)}
        />
      </div>
    </div>
  </>
}

export default FormInputUser