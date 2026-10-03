import { useState, useEffect } from "react";

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
                } else {
                    setMensagemErroFoto(json.message);
                    console.log(json.message);
                }
            });
    }, [arquivoFoto]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Informações</h1>
            <p className="text-lg text-gray-600">Aqui você pode ver informações detalhadas sobre o seu perfil.</p>
            <img src={`https://favo.alwaysdata.net/fotoUsuarios/${foto}`} alt="Foto do usuário" className="w-32 h-32 rounded-full mt-4" />
            <input type="file" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onChange={(e) => setArquivoFoto(e.target.files[0])} />
            {mensagemErroFoto && <p className="text-red-500 font-semibold mt-2">{mensagemErroFoto}</p>}
            <p className="text-lg font-semibold mt-4">Nome: {nome}</p>
            <p className="text-lg font-semibold mt-2">Email: {email}</p>
        </div>
    );
}

export default Infos;