import FooterBg from "../assets/footerBackground.png"

function Footer() {
return (
    <footer className="flex md:mt-[10rem] w-full bg-norepeat bg-center md:bg-cover bg-no-repeat bg-[length:auto_80%]" style={{ backgroundImage: `url(${FooterBg})`}}>
    <div className=" flex flex-col px-16 py-10 gap-10 align-center items-center justify-center">
        <div className="flex flex-row gap-10 md:gap-32 mt-[20rem]">
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <p className="font-bold text-gray-800 mb-2">Tópicos</p>
                <li className="text-gray-500 text-sm"><a href="#" className="hover:underline">Início</a></li>
                <li className="text-gray-500 text-sm"><a href="#Funcionalidades" className="hover:underline">Painel</a></li>
                <li className="text-gray-500 text-sm"><a href="#Produtividade" className="hover:underline">Resumo</a></li>
                <li className="text-gray-500 text-sm"><a href="#Como_Acessar" className="hover:underline">Metas</a></li>
                <li className="text-gray-500 text-sm"><a href="#Sobre_Nos" className="hover:underline">Comparação</a></li>
            </ul>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <p className="font-bold text-gray-800 mb-2">Instagram</p>
                <li className="text-gray-500 text-sm"><a href="https://www.instagram.com/zoccall_" className="hover:underline">Ana Beatriz Zocal</a></li>
                <li className="text-gray-500 text-sm"><a href="https://www.instagram.com/eznzzoz" className="hover:underline">Enzzo</a></li>
                <li className="text-gray-500 text-sm"><a href="https://www.instagram.com/016_gustavohfranciscatto" className="hover:underline">Gustavo</a></li>
            </ul>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 w-[75vw] md:w-[90vw]">
            <p className="text-gray-400 text-sm">© 2026 Favo. Todos os direitos reservados.</p>
            <span className="inline-block font-['Zolo'] text-2xl bg-gradient-to-r from-[#EBA864] to-[#F68412] bg-clip-text text-transparent">Favo</span>
        </div>
    </div>
    </footer>
)
}

export default Footer