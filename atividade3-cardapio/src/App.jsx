import { useEffect, useState } from 'react';
import ItemCardapio from './components/ItemCardapio';

function App() {
    const [itensCarrinho, setItensCarrinho] = useState(0);
    const [cardapio, setCardapio] = useState([]);
    const [endereco, setEndereco] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    function finalizarCompra() {
        if (itensCarrinho === 0) {
            setMensagemModal('Coloque algo no carrinho!');
            setModalAberto(true);
            return;
        }

        if (endereco === '') {
            setMensagemModal('Informe o endereço de entrega!');
            setModalAberto(true);
            return;
        }

        setMensagemModal('Pedido finalizado com sucesso!');
        setModalAberto(true);
        setItensCarrinho(0);
        setEndereco('');
    }

    useEffect(() => {
        console.log('Conectando ao servidor...');
        setTimeout(() => {
            setCardapio([
                {
                    id: 101,
                    nome: 'Combo Master',
                    descricao: 'Dois lanches + refri 2L',
                    preco: 65.0,
                },
                {
                    id: 102,
                    nome: 'Hambúrguer de Grão de Bico',
                    descricao: 'Opção Vegana',
                    preco: 28.0,
                },
                {
                    id: 103,
                    nome: 'Açaí na Tigela',
                    descricao: '500ml com morango e leite condensado',
                    preco: 18.0,
                },
            ]);
        }, 2000);
    }, []);

    if (cardapio.length === 0) {
        return <h2>Carregando restaurante...</h2>;
    }

    return (
        <>
            {modalAberto && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    <div
                        style={{
                            padding: '24px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                        }}>
                        <p>{mensagemModal}</p>
                        <button onClick={() => setModalAberto(false)}>OK</button>
                    </div>
                </div>
            )}
            <h1>Senai Delivery</h1>
            <h3>🛒 Carrinho: {itensCarrinho} itens</h3>
            {cardapio.map((item) => (
                <ItemCardapio
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                    adicionarItem={() => setItensCarrinho((itensAtuais) => itensAtuais + 1)}
                />
            ))}
            <div>
                <h2>Checkout</h2>
                <input
                    type="text"
                    value={endereco}
                    onChange={(evento) => setEndereco(evento.target.value)}
                    placeholder="Rua e Número da Entrega"
                    aria-label="Rua e Número da Entrega"
                />
                <button onClick={finalizarCompra}>Finalizar Pedido</button>
            </div>
        </>
    );
}

export default App;
