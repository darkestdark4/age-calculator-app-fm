function Input({label, placeholder, value = ''}) {
  return (
    <div className="flex flex-col sm:w-40 w-[30%]">
      <label className="uppercase mb-1 tracking-[0.3em] text-sm font-bold text-smokey-grey">{label}</label>
      <input type="number" className="sm:text-[32px] text-[18px] font-extrabold sm:px-4 px-3 py-2 border border-gray-300 focus:border-primary rounded" placeholder={placeholder} value={value}/>
    </div>
  )
}

export default Input