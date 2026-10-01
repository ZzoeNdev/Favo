import FooterBg from "../assets/footerBackground.png"

function Footer() {
return (
    <footer className="flex justify-center w-full md:mt-[10rem]" style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: "cover" }}>
    <div className="px-16 py-10 pt-100 justify-center">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 w-[98vw]">
            <p className="text-gray-400 text-sm">© 2024 Favo. Todos os direitos reservados.</p>
            <span className="inline-block font-['Zolo'] text-2xl bg-gradient-to-r from-[#EBA864] to-[#F68412] bg-clip-text text-transparent">Favo</span>
        </div>
    </div>
    </footer>
)
}

export default Footer