import { useState, useEffect } from "react";

function Pessoal() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("https://favo.alwaysdata.net/buscarDados.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                setNome(json.nome);
                setEmail(json.email);
            });
    }, []);


    return (
        <div className="flex flex-col items-center px-4 py-6 bg-white rounded-4xl shadow-lg w-full mt-8">
            <h1 className="text-3xl font-semibold mb-4">Informações Pessoais</h1>
            <p>Nome Completo</p>
            <p className="text-lg font-medium">{nome}</p>
            <p>Email</p>
            <p className="text-lg font-medium">{email}</p>
        </div>
    )

}

export default Pessoal;