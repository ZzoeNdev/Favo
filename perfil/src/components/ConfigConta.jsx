import { useState, useEffect } from "react";

function ConfigConta() {

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
        <div className="flex flex-col items-center justify-center h-screen">
            <button onClick={sairConta}>Sair da Conta</button>
        </div>
    );
}

export default ConfigConta;