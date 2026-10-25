import {useState} from "react";
import img from "../assets/senhaImg.png"
import x from "../assets/XIcon.png"

function PopSenha({fecharPopSenha}) {

    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    function trocarSenha() {
        fetch("https://favo.alwaysdata.net/trocarSenha.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({senhaAtual: senhaAtual, novaSenha: novaSenha})
        })
        .then(resposta => resposta.json())
        .then(json => {
            setMensagem(json.message);
        });
    }

    return (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[30%] h-[60%]">
                <button onClick={fecharPopSenha} className="cursor-pointer"><img src={x} alt="sairSenha" className="w-8 ml-65 md:ml-80 lg:ml-110" /></button>
                <img src={img} alt="senhaImg" className="w-25 md:w-30" />
                <p className="font-semibold text-3xl mb-5">Troque sua senha</p>
                <form action="">
                    <label htmlFor="" className="font-semibold text-sm">Senha antiga *</label>
                    <br />
                    <input
                        type="password"
                        placeholder="Senha atual"
                        onChange={(e) => setSenhaAtual(e.target.value)}
                        className="bg-gray-400/20 border-1 border-gray-400/50 h-10 w-60 md:w-90 rounded-lg p-2"
                    />
                    <br />
                    <label htmlFor="" className="font-semibold text-sm">Senha nova *</label>
                    <br />
                    <input
                        type="password"
                        placeholder="Nova senha"
                        onChange={(e) => setNovaSenha(e.target.value)} 
                        className="bg-gray-400/20 border-1 border-gray-400/50 h-10 w-60 md:w-90 rounded-lg p-2 mb-8"
                    />
                    <br />
                    {mensagem && <p className="w-90 text-center bg-orange-400/10 text-orange-400 mb-2 rounded-md">{mensagem}</p>}
                    <button type="button" onClick={trocarSenha} className="bg-orange-400 w-60 md:w-90 p-3 text-white rounded-lg cursor-pointer">
                        Trocar senha
                    </button>
                </form>
            </div>
        </div>
    )

}

export default PopSenha