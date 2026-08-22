import { useState } from "react"

function Forms() {

    const [modo, setModo] = useState("login")

    return (
        <div className={modo === "login" ? "flex flex-col md:flex-row bg-gradient-to-r from-[#B2B2B2]/12 to-[white]/12 border border-[#F8F8F8]/35 rounded-[12px_12px_12px_12px] m-9 md:ml-120 md:mr-120 h-133 transition-all duration-800" : "flex flex-col md:flex-row md:justify-between bg-gradient-to-r from-[#B2B2B2]/12 to-[white]/12 border border-[#F8F8F8]/35 rounded-[12px_12px_12px_12px] m-9 md:ml-120 md:mr-120 h-148 transition-all duration-800"}>
            <form className={modo === "login" ? "order-1 relative bg-white p-6 md:p-10 rounded-[12px_12px_0px_0px] md:rounded-[12px_0px_0px_12px] md:w-[50%]" : "order-2 relative bg-white p-6 md:p-10 rounded-[0px_0px_12px_12px] md:rounded-[0px_12px_12px_0px] md:w-[50%]"} action="" method="post">

                <h1 className="text-3xl md:text-4xl font-semibold md:mt-3">{modo === "login" ? "Acesse sua conta" : "Crie sua conta"}</h1>
                <p className="text-xs md:text-sm mb-3">{modo === "login" ? "Não possui uma conta?" : "Já tem uma conta?"} <a href="#" className="text-[#F68412]">{modo === "login" ? "Cadastre-se" : "Entre"}</a></p>

                <div className={modo === "cadastro" ? "inline" : "hidden"}>
                    <p className="text-xs font-semibold"> Nome Completo <span className="text-[#F68412]">*</span></p>
                    <input className="border border-[#C3C3C3] bg-[#E7E7E7] text-black/40 rounded-md p-1 md:p-2 w-full text-sm" type="email" placeholder="ex, Vinícius..." name="" id="" />
                </div>

                <div className="mt-3">
                    <p className="text-xs font-semibold"> Email <span className="text-[#F68412]">*</span></p>
                    <input className="border border-[#C3C3C3] bg-[#E7E7E7] text-black/40 rounded-md p-1 md:p-2 w-full text-sm" type="email" placeholder="ex, vinicius@..." name="" id="" />
                </div>

                <div className={modo === "cadastro" ? "flex w-full gap-2 mt-3" : "mt-3"}>
                    <div>
                        <p className="text-xs font-semibold"> Senha <span className="text-[#F68412]">*</span></p>
                        <input className="border border-[#C3C3C3] bg-[#E7E7E7] text-black/40 rounded-md p-1 md:p-2 w-full text-sm" type="password" placeholder="Insira sua senha" name="" id="" />
                    </div>

                    <div className={modo === "cadastro" ? "inline" : "hidden"}>
                        <p className="text-xs font-semibold"> Senha <span className="text-[#F68412]">*</span></p>
                        <input className="border border-[#C3C3C3] bg-[#E7E7E7] text-black/40 rounded-md p-1 md:p-2 md:w-[108%] text-sm" type="password" placeholder="Insira sua senha" name="" id="" />
                    </div>
                </div>

                <button className="bg-[#F68412] text-white text-xs p-2 md:p-4 w-full rounded-lg mt-6">{modo === "login" ? "Acessar Conta" : "Criar Conta"}</button>

                <div className="h-[1px] w-full bg-gray-300 mt-3"></div>

                <button className="border border-[#C3C3C3] w-full text-xs p-1 font-semibold mt-3 rounded-lg">Acessar conta pelo Google</button>

            </form>

            <div className={modo === "login" ? "order-2 p-4 md:p-8" : "order-1 p-4 md:p-8"}>
                <img src="../assets/favoWLogo.png" alt="Favo Logo" className="h-2 md:h-4" />
                <h1 className="text-white text-4xl md:text-5xl w-60 md:w-70 font-semibold mt-2 md:mt-6">{modo === "login" ? "Ainda não tem conta?" : "Já tem sua conta?"}</h1>
                <p className="text-sm md:text-lg text-white">{modo === "login" ? "Clique e crie a sua agora!" : "Acesse sua conta agora!"}</p>
                <button className="border border-[#F8F8F8]/35 text-sm text-white p-2 md:p-4 w-full md:w-[139%] rounded-lg mt-5" onClick={() => setModo(modo === "login" ? "cadastro" : "login")}>{modo === "login" ? "Fazer Cadastro" : "Fazer Log-in"}</button>
            </div>
        </div>

    )
}

export default Forms