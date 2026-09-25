function BlocoProdutividade({tag, txt1, grande, txt2}) {

  return (
    <div className="bg-gradient-to-b from-[#1F232D] to-[#383E4E] rounded-[20px] border border-[#DFDFDF]  md:w-full md:h-full md:max-h-[18rem] md:max-w-[25rem] md:gap-5 md:ml-[4.4rem] md:mr-[4.4rem] md:pl-[1.5rem] md:pt-[1.5rem] md:pb-[3.5rem]">
            <div className="flex justify-center bg-[#F68412] max-w-[7rem] rounded-[5px] pb-[0.2rem]"><p className="text-white">{tag}</p></div>
            <p className="pt-[1.5rem] text-[#B4B4B4]">{txt1}</p>
            <p className="text-white text-bold text-[3.5rem] font-bold leading-tight">{grande}</p>
            <p className="text-[#B4B4B4]">{txt2}</p>
    </div>
  )
}

export default BlocoProdutividade