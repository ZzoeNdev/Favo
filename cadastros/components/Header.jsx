import favoWLogo from "../assets/favoWLogo.png"

function Header() {
    return (
        <div className="flex justify-between items-center w-screen p-5 md:p-8">
            <img src={favoWLogo} alt="Favo Logo" className="h-5" />
            <a href=""><button className="flex items-center text-white text-sm bg-white/10 p-2 border border-[#F4F4F4] rounded-xl" onClick={() => window.location.href = "https://favo-landing.vercel.app"}>Voltar a tela inicial</button></a>
        </div>
    )
}

export default Header