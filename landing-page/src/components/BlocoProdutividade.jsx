function BlocoProdutividade({tag, txt1, grande, txt2}) {

  return (
    <div className="bg-gradient-to-b from-[#383E4E] to-[#1F232D]/50 rounded-[10px] border border-[#DFDFDF] min-w-[16rem] p-3 md:max-w-25 md:gap-5 md:p-3">
            <p className="bg-[#F68412]">{tag}</p>
            <p className="text-[#B4B4B4]">{txt1}</p>
            <p className="text-white text-bold">{grande}</p>
            <p className="text-[#B4B4B4]">{txt2}</p>
    </div>
  )
}

export default BlocoProdutividade