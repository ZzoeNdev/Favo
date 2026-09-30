import { useState, useEffect } from 'react';

function Aparelhos() {
    const [aparelhos, setAparelhos] = useState([])
    const [comodosFiltro, setComodosFiltro] = useState([])
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('https://favo.free.nf/listarAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setAparelhos(json)
                console.log(json)
            });
    }, [atualizar])

    function alternar(idEletro) {
        fetch("https://favo.free.nf/alternarEstado.php", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id_eletro: idEletro })
        })
            .then(resposta => resposta.json())
            .then(() => setAtualizar(v => v + 1))
    }

    const aparelhosFiltrados = comodosFiltro.length === 0 ? aparelhos : aparelhos.filter(a => comodosFiltro.includes(a.nomeComodo))

    return(
        <div>
            <div>
                {aparelhosFiltrados.map(a => (
                    <div key={a.id}>
                        <p>{a.nomeComodo}</p>
                        <p>{a.nome}</p>
                        <p>{a.id}</p>
                        <input type="checkbox" checked={a.estado === 'ligado'}
                        onChange={() => alternar(a.id)}/>
                        <p>{a.watts}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default Aparelhos