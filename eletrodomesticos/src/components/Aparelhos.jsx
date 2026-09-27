import { useState, useEffect } from 'react';

function Aparelhos() {
    const [aparelhos, setAparelhos] = useState([])
    const [comodosFiltro, setComodosFiltro] = useState([])
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('http://localhost/api/listarAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setAparelhos(json)
                console.log(json)
            });
    }, [atualizar])

    function alternar(idEletro) {
        fetch("http://localhost/api/alternarEstado.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: idEletro })
        })
            .then(resposta => resposta.json())
            .then(() => setAtualizar(v => v + 1))
    }

    const aparelhosFiltrados = comodosFiltro.length === 0 ? aparelhos : aparelhos.filter(a => comodosFiltro.includes(a.nomeComodo))

    return(
        <div>
            <div>
                {aparelhosFiltrados.map(a => (
                    <div>
                        <p>{a.nomeComodo}</p>
                        <p>{a.nome}</p>
                        <input type="checkbox" checked={a.estado === 'ligado'} onChange={() => alternar(a.id)}/>
                        <p>{a.watts}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default Aparelhos