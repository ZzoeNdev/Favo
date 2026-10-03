import { useState, useEffect } from "react";

import editIcon from "../assets/editIcon.png";

function Infos() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [foto, setFoto] = useState("");
    const [arquivoFoto, setArquivoFoto] = useState(null);
    const [mensagemErroFoto, setMensagemErroFoto] = useState("");

    useEffect(() => {
        fetch("https://favo.alwaysdata.net/buscarDados.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                setNome(json.nome);
                setEmail(json.email);
                setFoto(json.foto);
            });
    }, []);

    useEffect(() => {

        const formData = new FormData();
        formData.append("foto", arquivoFoto);

        fetch("https://favo.alwaysdata.net/trocarFoto.php", {method: "POST", credentials: "include", body: formData, })
            .then(resposta => resposta.json())
            .then(json => {
                if (json.foto) {
                    setFoto(json.foto);
                    setMensagemErroFoto(json.message);
                } else {
                    setMensagemErroFoto(json.message);
                    console.log(json.message);
                }
            });
    }, [arquivoFoto]);

    return (
        <div className="flex flex-col items-center justify-center w-full bg-white rounded-4xl shadow-lg p-8 pb-25 mt-[10%]">
            <img src={`https://favo.alwaysdata.net/fotoUsuarios/${foto}`} alt="Foto do usuário" className="w-67 h-67 rounded-full -mt-40 border-6 border-white" />
            <label htmlFor="foto" className="cursor-pointer bg-[#F68412] text-white p-3 rounded-full -mt-15 ml-50"><img src={editIcon} alt="Editar foto" /></label>
            <input type="file" className="hidden" id="foto" onChange={(e) => setArquivoFoto(e.target.files[0])} />
            {mensagemErroFoto == "Formato de arquivo inválido. Apenas JPG, JPEG, PNG e GIF são permitidos." ? <p className="text-red-500 font-semibold mt-2">{mensagemErroFoto}</p> : ""}
            <p className="text-4xl font-semibold mt-8">Olá! {nome.split(" ")[0]}</p>
            <p className="text-xl font-regular text-gray-500">Como podemos te ajudar hoje?</p>
        </div>
    );
}

export default Infos;