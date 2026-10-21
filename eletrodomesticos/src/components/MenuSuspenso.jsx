import { useState } from 'react'

function MenuSuspenso({ onEditar, onApagar }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="relative">
      
      {/* Botão três pontinhos */}
      <button
        onClick={() => setAberto(!aberto)}
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 font-bold text-lg"
      >
        ⋯
      </button>

      {/* Popup */}
      {aberto && (
        <>
          {/* Overlay invisível para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setAberto(false)}
          />

          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-lg z-50 w-[160px] overflow-hidden">
            <button
              onClick={() => { onEditar(); setAberto(false) }}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              ✏️ Editar
            </button>
            <div className="h-[1px] bg-gray-100" />
            <button
              onClick={() => { onApagar(); setAberto(false) }}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
            >
              🗑️ Apagar
            </button>
          </div>
        </>
      )}

    </div>
  )
}

export default MenuSuspenso