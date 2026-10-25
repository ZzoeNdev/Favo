import favoLogo from "../assets/favoLogo.png";

function Header() {

    return (
        <div className="flex justify-between items-center w-full md:mt-2 -mt-42 mb-35 md:mb-0 px-4">
            <img src={favoLogo} alt="Favo Logo" onClick={() => window.location.href = "https://www.favo.center/dashboard"} />
            <button className="flex items-center cursor-pointer text-white text-sm bg-white/10 p-2 px-8 border border-[#F4F4F4] rounded-xl" onClick={() => window.location.href = "https://www.favo.center/dashboard"}>
                Voltar ao Início
            </button>
        </div>

    )

}

export default Header