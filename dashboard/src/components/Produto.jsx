import { useEffect, useState } from 'react'
import { Html5Qrcode } from "html5-qrcode"
import X from "../assets/icons/XIcon.png"
import camera from "../assets/camera.png"

function Produto({ fecharForm }) {
  const [nome, setNome] = useState('');
  const [comodo, setComodo] = useState('');
  const [forca, setForca] = useState('');
  const [estado, setEstado] = useState('ligado');
  const [imagemOCR, setImagemOCR] = useState(null);
  const [horasMedia, setHorasMedia] = useState(4);
  const [comodosExistentes, setComodosExistentes] = useState([])
  const [codigoBarras, setCodigoBarras] = useState('');

  useEffect(() => {
    fetch("https://favo.alwaysdata.net/listarComodos.php", { credentials: "include" })
      .then(resposta => resposta.json())
      .then(json => {
        if (json.length > 0) {
          setComodosExistentes([...json.map(c => c.nome), "Sala", "Quarto", "Cozinha", "Banheiro"])
        } else {
          setComodosExistentes(["Sala", "Quarto", "Cozinha", "Banheiro"])
        }
        console.log('comodosExistentes deveria ter:', json)
      })
  }, [])

  function selecionarImagem(e) {
    const arquivo = e.target.files[0];
    setImagemOCR(arquivo);
    console.log('Imagem selecionada:', arquivo);
  }


  useEffect(() => {

    async function lerCodigoDeBarras() {
      if (!imagemOCR) {
        console.error('Nenhuma imagem selecionada para OCR.');
        return;
      }
      const leitor = new Html5Qrcode("reader");
      try {
        const result = await leitor.scanFile(imagemOCR);
        setCodigoBarras(result);
        console.log('Resultado do OCR:', result);
      } catch (error) {
        console.error('Erro ao processar a imagem:', error);
      }
    }

    lerCodigoDeBarras();
  }, [imagemOCR]);

  useEffect(() => {

    function receberProdutoInmetro() {
      fetch("https://favo.alwaysdata.net/buscarInmetro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ codigoBarras: codigoBarras })
      })
        .then(resposta => resposta.json())
        .then(json => {
          console.log(json.message)
          setNome(json.nome)
          setForca(json.kwh)
        })
    }

    receberProdutoInmetro();
  }, [codigoBarras]);


  function enviarProduto() {
    fetch("https://favo.alwaysdata.net/addProdutos.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ nome: nome, comodo: comodo, watts: forca, estado: estado, horasMedia: horasMedia })
    })
      .then(resposta => resposta.json())
      .then(json => {
        console.log(json.message)
        window.location.reload();
      })
  }

  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-[60%] h-150 md:h-auto overflow-y-auto">
        <div className='flex justify-between'>
          <div>
            <h1 className="text-lg md:text-3xl font-bold mb-2">Adicione seu eletrodoméstico</h1>
            <p className="text-gray-600 text-xs md:text-sm mb-6">Integre seu eletrodoméstico ao nosso sistema de alta-precisão</p>
          </div>
          <p onClick={fecharForm} className="font-extrabold text-gray-500 p-2 rounded-md text-center cursor-pointer mb-4"><img className='w-9' src={X} alt="buttonFechar" /></p>
        </div>
        <form method="POST">
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-[50%]'>
              <div className="text-orange-500 bg-orange-100 rounded-md p-2 font-bold text-xs md:text-sm w-40 md:w-[35%] mb-2 text-center">Método mais rápido</div>
              <h1 className="text-lg md:text-2xl font-bold mb-2 md:mt-3">Escaneie com a Câmera (OCR)</h1>
              <p className="text-gray-600 text-xs md: text-sm mb-4 md:w-70">Sua imagem será escaneada automaticamente, auto-completando o registro com as informações do seu eletrdoméstico</p>
              <div id="reader" className="hidden"></div>
              <input id="barras" className='hidden' type="file" accept="image/*" capture="camera" onChange={selecionarImagem} />
              <label htmlFor="barras">
                <div className='flex items-center justify-center cursor-pointer rounded-[16px] border-2 border-dashed border-orange-500/80 [stroke-dasharray:6_14] [stroke-linecap:round] w-full h-35 md:h-45 p-[5vw]' >
                  <img src={camera} alt="Sua imagem Aqui" className="w-30 md:w-40 object-contain"/>
                </div>
              </label>
            </div>
            <div className="h-[1px] md:h-90 w-full md:w-[1px] bg-gray-300 my-4 md:m-10"></div>
            <div className='md:w-[50%]'>
              <h1 className="text-lg md:text-2xl font-bold mb-2">Registro Manual</h1>
              <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2 mt-3">Nome do seu Eletrodoméstico *</label>
              <input maxLength="32" className="border border-gray-300 rounded py-2 px-3 text-gray-700 md:w-full" type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <br />
              <div className='flex flex-col md:flex-row md:gap-2 mt-3'>
                <div>
                  <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2">Cômodo *</label>
                  <input list='lista-comodos'
                    value={comodo}
                    onChange={(c) => setComodo(c.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''))}
                    placeholder='Digite ou escolha um comodo'
                    className='border border-gray-300 rounded py-2 px-2 text-gray-700 md:w-70' required />
                  <datalist id='lista-comodos'>
                    {comodosExistentes.map(c => (
                      <option value={c} />
                    ))}
                  </datalist>
                </div>
                <br />
                <div>
                  <label className="block text-gray-700 text-xs md:text-sm font-bold mb-2">Força (Watts) *</label>
                  <div className='flex items-center'>
                    <input className="border border-gray-300 rounded py-2 px-3 text-gray-700" type="text" maxLength={5} id="forca" name="forca" value={forca} onChange={(e) => setForca(e.target.value.replace(/[^0-9]/g, ''))} required />
                    <p className='-ml-15'>Watts</p>
                  </div>
                </div>
              </div>
              <br />
              <label htmlFor="">Uso médio por dia:</label>
              <p>{horasMedia} h</p>
              <input type="range" min="0.1" max="24" step={0.1} value={horasMedia} onChange={(h) => setHorasMedia(h.target.value)} className='w-full bg-gray-200/10 accent-orange-500' />
            </div>
          </div>
          <button type="button" onClick={enviarProduto} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4">
            Adicionar Eletrodoméstico
          </button>
        </form>
      </div>

    </div>
  );
}

export default Produto;