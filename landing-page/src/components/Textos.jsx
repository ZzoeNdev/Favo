function Textos({ h1, p, tamanho = "max-w-[25rem] md:max-w-[45rem]" }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`font-bold text-[2rem] md:text-[4rem] text-center ${tamanho}`}>{h1}</h1>
      <p className='text-[1rem]  text-center max-w-[90vw] md:max-w-[30rem]'>{p}</p>
    </div>
  )
}

export default Textos