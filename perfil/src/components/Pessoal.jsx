import { useState, useEffect } from "react";

function Pessoal() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/api/buscarDados.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                setNome(json.nome);
                setEmail(json.email);
            });
    }, []);


    return (
        <div className="flex flex-col items-start px-10 py-10 bg-white rounded-4xl shadow-lg w-full mt-4">
            <h1 className="text-3xl font-semibold mb-4">Informações Pessoais</h1>
            <p className="text-black/40 font-medium">Nome Completo</p>
            <p className="text-xl font-medium">{nome}</p>
            <p className="text-black/40 font-medium">Email</p>
            <p className="text-xl font-medium">{email}</p>
        </div>
    )

}

export default Pessoal;