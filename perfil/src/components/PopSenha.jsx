import {useState} from "react";

function PopSenha({fecharPopSenha}) {

    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    function trocarSenha() {
        fetch("https://favo.alwaysdata.net/trocarSenha.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({senhaAtual: senhaAtual, novaSenha: novaSenha})
        })
    }

    return (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[30%] h-auto">
                <button onClick={fecharPopSenha}>Fechar</button>
                <form action="">
                    <input
                        type="password"
                        placeholder="Senha atual"
                        onChange={(e) => setSenhaAtual(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Nova senha"
                        onChange={(e) => setNovaSenha(e.target.value)}
                    />
                    <button type="button" onClick={trocarSenha}>
                        Trocar senha
                    </button>
                </form>
            </div>
        </div>
    )

}

export default PopSenha