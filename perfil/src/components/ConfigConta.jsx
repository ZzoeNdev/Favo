import { useState, useEffect } from "react";
import AlterarSenha from "../assets/AlterarSenha.svg";
import SairdaConta from "../assets/SairdaConta.svg";

function ConfigConta({abrirPopSenha}) {

    function sairConta() {
        fetch("https://favo.alwaysdata.net/sairConta.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                if (json.logout) {
                    window.location.href = "https://www.favo.center/cadastro"
                } else {
                    console.log("Erro ao sair da conta");
                }
            });
    }

    return (
        <div className="flex flex-col items-center px-4 py-6 bg-white rounded-4xl shadow-lg w-full mt-8">
            <h1 className="text-3xl font-semibold mb-4">Configurações da Conta</h1>
            <button onClick={abrirPopSenha} className="flex justify-between bg-[#F9F9FF] p-[2vh] w-[25vw] rounded-[20px] items-center gap-[0.75vw] cursor-pointer">
                <div className="flex flex-row">
                    <img src={AlterarSenha} alt=""/>
                    <p className="text-[1.5rem] font-semibold">Alterar Senha</p>
                </div>
            </button>
            <button onClick={sairConta}>Sair da Conta</button>
        </div>
    );
}

export default ConfigConta;