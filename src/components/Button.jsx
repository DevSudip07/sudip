const Button = ({title, color}) => {
  return (
    <>
        <button className={`py-2 px-5 font-semibold text-xs rounded-xl border-2 text-[var(--p-color)]`}>{title}</button>  
    </>
  )
}

export default Button