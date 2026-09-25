import {useState} from 'react'
import { Html5Qrcode } from "html5-qrcode";

function Produto({fecharForm}) {
  const [nome, setNome] = useState('');
  const [comodo, setComodo] = useState('quarto');
  const [forca, setForca] = useState('');
  const [estado, setEstado] = useState('ligado');
  const [imagemOCR, setImagemOCR] = useState(null);
  

  function selecionarImagem(e) {
    const arquivo = e.target.files[0];
    setImagemOCR(arquivo);
    console.log('Imagem selecionada:', arquivo);
    lerCodigoDeBarras(arquivo);
  }

  async function lerCodigoDeBarras(arquivo) {
    if (!arquivo) {
      console.error('Nenhuma imagem selecionada para OCR.');
      return;
    }
    const leitor = new Html5Qrcode("reader");
    try {
      const result = await leitor.scanFile(arquivo);
      console.log('Resultado do OCR:', result);
    } catch (error) {
      console.error('Erro ao processar a imagem:', error);
    }
  }

  function enviarProduto(){
        fetch("http://localhost/api/addProdutos.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({nome:nome, comodo:comodo, watts:forca, estado:estado})
        })
        .then(resposta => resposta.json())
        .then(json => {
            console.log(json.message)
        })
        window.location.reload();
    }

  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] h-auto">
        <p onClick={fecharForm} className="font-extrabold bg-gray-200 text-gray-500 p-1 rounded-md w-[10%] text-center cursor-pointer mb-4">X</p>
        <h1 className="text-3xl font-bold mb-2">Adicione seu eletrodoméstico</h1>
        <p className="text-gray-600 text-sm mb-6">Integre seu eletrodoméstico ao nosso sistema de alta-precisão</p>
        <form method="POST">
          <div>
            <div>
              <div className="text-orange-500 bg-orange-100 rounded-md p-2 font-bold text-xs md:text-lg w-[45%] text-center">Método mais rápido</div>
              <h1 className="text-2xl font-bold mb-2">Escaneie com a Câmera (OCR)</h1>
              <p className="text-gray-600 text-sm mb-4">Sua imagem será escaneada automaticamente, auto-completando o registro com as informações do seu eletrdoméstico</p>
              <div id="reader" className="hidden"></div>
              <input type="file" accept="image/*" capture="camera" onChange={selecionarImagem} />
            </div>
            <div className="h-[1px] bg-gray-300 w-full my-4"></div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Registro Manual</h1>
              <label className="block text-gray-700 text-sm font-bold mb-2">Nome do seu Eletrodoméstico *</label>
              <input className="border border-gray-300 rounded py-2 px-3 text-gray-700" type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <br />
              <label className="block text-gray-700 text-sm font-bold mb-2">Cômodo *</label>
              <select className="border border-gray-300 rounded py-2 px-3 text-gray-700" id="comodo" name="comodo" value={comodo} onChange={(e) => setComodo(e.target.value)} required>
                <option value="">Selecione um cômodo</option>
                <option value="Sala">Sala</option>
                <option value="Quarto">Quarto</option>
                <option value="Quarto 2">Quarto 2</option>
                <option value="Quarto 3">Quarto 3</option>
                <option value="Cozinha">Cozinha</option>
                <option value="Banheiro">Banheiro</option>
              </select>
              <br />
              <label className="block text-gray-700 text-sm font-bold mb-2">Força (Watts) *</label>
              <input className="border border-gray-300 rounded py-2 px-3 text-gray-700" type="text" id="forca" name="forca" value={forca} onChange={(e) => setForca(e.target.value)} required /> Watts
            </div>
          </div>
          <button type="button" onClick={enviarProduto} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            Adicionar Eletrodoméstico
          </button>
        </form>
      </div>

    </div>
  );
}

export default Produto;