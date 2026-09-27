import { useState, useEffect } from 'react';

function ResumoAparelhos() {
    const [card, setCard] = useState({ cadastrados: 0, ativos: 0 })
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('http://localhost/api/resumoAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setCard(json)
                console.log(json)
            });
    }, [atualizar])

    return (
        <div>
            <div>
                <div>Consumo Total</div>
                <div>Cadastrados: {card.cadastrados}</div>
                <div>Ativos Agora: {card.ativos}</div>
            </div>
        </div>
    )
}

export default ResumoAparelhos;