import { useState } from 'react'

function MenuSuspenso({ aparelho, onEditar, onApagar }) {
  const [aberto, setAberto] = useState(false)
  const [abertoEdit, setAbertoEdit] = useState(false)

  const [nome, setNome] = useState(aparelho.nome)
  const [watts, setWatts] = useState(aparelho.watts)

  console.log(aparelho)

  function salvar() {
    fetch("https://favo.alwaysdata.net/editarAparelho.php", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_eletro: aparelho.id, nome: nome, watts: watts })
    })
      .then(resposta => resposta.json())
      .then(json => {
        if (json.sucesso) {
          console.log(json.message)
          onEditar()
        } else {
          console.log(json.message)
        }
      })
  }

  return (
    <div className="relative">

      <button
        onClick={() => setAberto(!aberto)}
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 font-bold text-lg"
      >
        ⋯
      </button>

      {aberto && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setAberto(false)}
          />

          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-lg z-50 w-[160px] overflow-hidden">
            <button onClick={() => { setAberto(false); setAbertoEdit(true) }} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Editar</button>
            <div className="h-[1px] bg-gray-100" />
            <button onClick={() => { onApagar(); setAberto(false) }} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 cursor-pointer">Apagar</button>
          </div>
        </>
      )}

      {abertoEdit && (
        <>

          <div
            className="fixed inset-0 z-40"
            onClick={() => setAbertoEdit(false)}
          />

          <div className="absolute right-full top-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-lg z-50 w-50 h-80 overflow-hidden">
            <p className='p-5 font-semibold'>Editar</p>
            <div className="h-[1px] bg-gray-100 mb-2" />
            <div className='flex flex-col justify-center items-center gap-2 mt-5'>
              <div className='flex flex-col items-center'>
                <label className='font-semibold text-sm'>Nome:</label>
                <input maxLength="32" className='border-1 border-gray-400/70 bg-gray-400/20 rounded-md p-1 w-[70%]' type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="" id="" />
              </div>
              <div className='flex flex-col items-center'>
                <label className='font-semibold text-sm'>Watts:</label>
                <input maxLength="5" className='border-1 border-gray-400/70 bg-gray-400/20 rounded-md p-1 w-[70%]' type="number" value={watts} onChange={(e) => setWatts(e.target.value)} name="" id="" />
              </div>
              <button className='bg-orange-500/70 px-9 py-1 text-white rounded-lg cursor-pointer' onClick={() => { salvar(); setAbertoEdit(false); }}>Salvar</button>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default MenuSuspenso