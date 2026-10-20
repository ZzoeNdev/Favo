function BlocoProdutividade({tag, txt1, grande, txt2}) {

  return (
    <div className="bg-gradient-to-b from-[#1F232D] to-[#383E4E] rounded-[20px] border border-[#DFDFDF] h-[13rem] md:h-[18rem] w-[85vw] md:w-[30vw] mt-[3vw] gap-5 md:ml-[3vw] md:mr-[3vw] pl-[2.5vw] pt-[1.5rem] pb-[3.5rem]">
            <div className="flex justify-center bg-[#F68412] max-w-[7rem] rounded-[5px] pb-[0.5vh]"><p className="text-white">{tag}</p></div>
            <p className="pt-[1.5rem] text-[#B4B4B4]">{txt1}</p>
            <p className="text-white text-bold text-[2.5rem] md:text-[3.5rem] font-bold leading-tight">{grande}</p>
            <p className="text-[#B4B4B4]">{txt2}</p>
    </div>
  )
}

export default BlocoProdutividade