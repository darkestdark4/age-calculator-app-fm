const Input = (props) => {
  const setValue = event => {
    props.onChangeHandler(event.target.value)
  }

  return <>
    <label className={`
        uppercase mb-1 tracking-[0.3em] text-sm font-bold 
        ${props.error.status ? 'text-red' : 'text-smokey-grey'}
      `}
    >
      {props.label}
    </label>

    <input 
      type="number"
      className={`
        sm:text-[32px] text-[18px] font-extrabold 
        sm:px-4 px-3 py-2 border focus:border-primary rounded
        ${props.error.status ? 'border-red' : 'border-light-grey'}
      `}
      placeholder={props.placeholder}
      onChange={setValue}
    />
    <small className={`
      text-[11px] italic font-italic mt-2
      ${props.error.status ? 'text-red' : 'text-smokey-grey'}
    `}
    >
      {props.error.message}
    </small>
  </>
}

export default Input