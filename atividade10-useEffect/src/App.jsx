import { useEffect, useState } from 'react';

function App() {
    const [notificacoes, setNotificacoes] = useState(0);
    useEffect(() => {
        if (notificacoes > 0) {
            document.title = `${notificacoes} novas notificações`;
        } else {
            document.title = `Sem mensagens`
        }
    }, [notificacoes]);
    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h2>O poder do Efeito Colateral</h2>
            <p style={{ fontSize: '1.2rem' }}>
                <br />
                <strong>Olhe para o topo da janela do seu navegador</strong>
            </p>
            <button
                onClick={() => setNotificacoes(notificacoes + 1)}
                style={{ padding: '10px 20px', fontSize: '1rem' }}>
                Adicionar Notificação
            </button>

        </div>
    );
}

export default App;
