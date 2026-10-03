import favoLogo from "../assets/favoLogo.png";

function Header() {

    return (
        <div className="flex justify-between items-center w-full mt-2">
            <img src={favoLogo} alt="Favo Logo" onClick={() => window.location.href = "https://favo-dashboard-ecru.vercel.app"} />
            <button className="flex items-center cursor-pointer text-white text-sm bg-white/10 p-2 px-8 border border-[#F4F4F4] rounded-xl" onClick={() => window.location.href = "https://favo-dashboard-ecru.vercel.app"}>
                Voltar ao Início
            </button>
        </div>

    )

}

export default Header