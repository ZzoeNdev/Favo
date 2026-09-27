import FooterBg from "../assets/footerBackground.png"

function Footer() {
return (
    <footer className="flex md:mt-[10rem] w-full" style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: "cover" }}>
    <div className=" flex flex-col px-16 py-10 gap-10 align-center items-center justify-center">
        <div className="flex flex-row gap-32">
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <p className="font-bold text-gray-800 mb-2">Tópicos</p>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Tópico</a></li>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Tópico</a></li>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Tópico</a></li>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Tópico</a></li>
            </ul>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <p className="font-bold text-gray-800 mb-2">Sobre Nós</p>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Tópico</a></li>
            </ul>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <p className="font-bold text-gray-800 mb-2">Redes Sociais</p>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Instagram</a></li>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">X</a></li>
            </ul>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 w-[90vw]">
            <p className="text-gray-400 text-sm">© 2024 Favo. Todos os direitos reservados.</p>
            <span className="inline-block font-['Zolo'] text-2xl bg-gradient-to-r from-[#EBA864] to-[#F68412] bg-clip-text text-transparent">Favo</span>
        </div>
    </div>
    </footer>
)
}

export default Footer