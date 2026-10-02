import { useState, useEffect } from "react";

function Infos() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [foto, setFoto] = useState("");

    useEffect(() => {
        fetch("https://favo.alwaysdata.net/buscarDados.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                setNome(json.nome);
                setEmail(json.email);
                setFoto(json.foto);
            });
    }, []);



    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Informações</h1>
            <p className="text-lg text-gray-600">Aqui você pode ver informações detalhadas sobre o seu perfil.</p>
            <img src={`https://favo.alwaysdata.net/fotoUsuarios/${foto}`} alt="Foto do usuário" className="w-32 h-32 rounded-full mt-4" />
            <p className="text-lg font-semibold mt-4">Nome: {nome}</p>
            <p className="text-lg font-semibold mt-2">Email: {email}</p>
        </div>
    );
}

export default Infos;