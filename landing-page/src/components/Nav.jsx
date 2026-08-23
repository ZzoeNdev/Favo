import { useState, useEffect } from 'react'
import Logo from "../assets/FavoLogoOrange.png"
import Botao from "./Botao.jsx"

const sectionsEmoji = [
  { label: "Home",            id: "Home",            emoji: "🏠" },
  { label: "Funcionalidades", id: "Funcionalidades", emoji: "⚡" },
  { label: "Produtividade",   id: "Produtividade",   emoji: "📈" },
  { label: "Como Acessar",    id: "Como_Acessar",    emoji: "🗺️" },
  { label: "Sobre Nós",       id: "Sobre_Nos",       emoji: "👥" },
]

function Nav() {
  const [ativo, setAtivo] = useState("Home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtivo(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )

    sectionsEmoji.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Mobile: topo com logo e botão ── */}
      <header className="md:hidden flex items-center justify-between w-full px-6 py-3 bg-white border-b border-gray-100">
        <a href="#Home">
          <img src={Logo} alt="Logo Favo" className="max-w-[84px] max-h-[41px] cursor-pointer" />
        </a>
        <Botao texto="Acessar Painel" tipo="cheio"/>
      </header>

      {/* ── Desktop: topo completo ── */}
      <header className="hidden md:flex items-center justify-center w-full h-[9vw] max-h-[80px] fixed left-0 right-0 top-0 bg-white z-50">
        <nav className="flex items-center justify-around w-full h-full px-8">

          <a href="#Home">
            <img src={Logo} alt="Logo Favo" className="max-w-[84px] max-h-[41px] cursor-pointer" />
          </a>

          <ul className="flex items-center list-none gap-[7%] w-[36%] m-0 p-0">
            {sectionsEmoji.map(({ label, id }) => (
              <li key={id}>
                
                <a
                  href={"#" + id}
                  onClick={() => setAtivo(id)}
                  className={`whitespace-nowrap no-underline text-[1.04vw] transition-colors
                    ${ativo === id ? "font-bold text-black" : "text-gray-700"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <Botao texto="Acessar Painel" tipo="cheio" />

        </nav>
      </header>

      {/* ── Mobile: bottom nav ── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <ul className="flex justify-around items-center list-none m-0 p-0 h-16">
          {sectionsEmoji.map(({ label, id, emoji }) => (
            <li key={id}>
              
              <a
                href={"#" + id}
                onClick={() => setAtivo(id)}
                className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors no-underline
                  ${ativo === id ? "text-orange-500" : "text-gray-400"}`}
              >
                <span className="text-xl">{emoji}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav