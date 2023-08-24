const AgeResult = (props) => {
  return <>
    <div className="flex flex-col font-extrabold italic sm:text-8xl text-[2.5rem]">
      <p><span className="text-primary">{ (props.data) ? props.data.years : '- -' }</span> years</p>
      <p><span className="text-primary">{ (props.data) ? props.data.months : '- -' }</span> months</p>
      <p><span className="text-primary">{ (props.data) ? props.data.days : '- -' }</span> days</p>
    </div>
  </>
}

export default AgeResult