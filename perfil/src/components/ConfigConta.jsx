import { useState, useEffect } from "react";
import AlterarSenha from "../assets/AlterarSenha.svg";
import SairdaConta from "../assets/SairdaConta.svg";

function ConfigConta({abrirPopSenha}) {

    function sairConta() {
        fetch("/api/sairConta.php", { credentials: "include" })
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
        <div className="flex flex-col gap-4 items-start px-10 py-10 bg-white rounded-4xl shadow-lg w-full mt-4">
            <h1 className="text-3xl font-semibold mb-4">Configurações da Conta</h1>
            <button onClick={abrirPopSenha} className="flex justify-between bg-[#F9F9FF] px-4 w-full  h-20 rounded-[20px] items-center gap-[0.75vw] cursor-pointer">
                <div className="flex flex-row gap-3">
                    <img src={AlterarSenha} alt=""/>
                    <div className="flex flex-col items-start">
                        <p className="text-md md:text-xl font-semibold">Alterar Senha</p>
                        <p className="text-xs md:text-md text-orange-500/80 text-start">A segurança vem em primeiro lugar</p>
                    </div>
                </div>
            </button>
            <button onClick={sairConta} className="flex justify-between bg-[#F9F9FF] px-4 w-full  h-20 rounded-[20px] items-center gap-[0.75vw] cursor-pointer">
            <div className="flex flex-row gap-3">
                    <img src={SairdaConta} alt=""/>
                    <div className="flex flex-col items-start">
                        <p className="text-md md:text-xl font-semibold">Sair da Conta</p>
                        <p className="text-xs md:text-md text-orange-500/80 text-start">Aproveite para gerenciar outra conta</p>
                    </div>
            </div>
            </button>
        </div>
    );
}

export default ConfigConta;