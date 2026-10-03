import { useState, useEffect } from "react";

function ConfigConta({abrirPopSenha}) {

    function sairConta() {
        fetch("https://favo.alwaysdata.net/sairConta.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                if (json.logout) {
                    window.location.href = "https://favo-cadastro.vercel.app"
                } else {
                    console.log("Erro ao sair da conta");
                }
            });
    }

    return (
        <div className="flex flex-col items-center px-4 py-6 bg-white rounded-4xl shadow-lg w-full mt-8">
            <h1 className="text-3xl font-semibold mb-4">Configurações da Conta</h1>
            <button onClick={abrirPopSenha}>Alterar Senha</button>
            <button onClick={sairConta}>Sair da Conta</button>
        </div>
    );
}

export default ConfigConta;