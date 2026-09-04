import { useEffect, useState } from 'react';
import './App.css';

function ItemCardapio({ item, quantidade, alterarQuantidade }) {
    return (
        <div className="item-card">
            {item.tag && <span className="item-tag">{item.tag}</span>}
            <div className="item-header">
                <span className="item-emoji">{item.emoji}</span>
                <div className="item-titulos">
                    <h4>{item.nome}</h4>
                    <span className="item-categoria">{item.categoria}</span>
                </div>
            </div>
            <p className="item-descricao">{item.descricao}</p>
            <div className="item-rodape">
                <span className="item-preco">R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                {quantidade === 0 ? (
                    <button
                        className="btn-add-inicial"
                        onClick={() => alterarQuantidade(item.id, 1)}>
                        + Adicionar
                    </button>
                ) : (
                    <div className="seletor-qtd">
                        <button onClick={() => alterarQuantidade(item.id, -1)}>-</button>
                        <span>{quantidade}</span>
                        <button onClick={() => alterarQuantidade(item.id, 1)}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

function App() {
    const [carrinho, setCarrinho] = useState({});
    const [cardapio, setCardapio] = useState([]);
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
    const [endereco, setEndereco] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');
    const [restauranteAberto] = useState(true);

    const categorias = ['Todos', 'Lanches', 'Acompanhamentos', 'Doces', 'Bebidas'];

    function alterarQuantidade(id, delta) {
        setCarrinho((prev) => {
            const atual = prev[id] || 0;
            const novaQtd = atual + delta;
            if (novaQtd <= 0) {
                const cop = { ...prev };
                delete cop[id];
                return cop;
            }
            return { ...prev, [id]: novaQtd };
        });
    }

    const totalItens = Object.values(carrinho).reduce((acc, q) => acc + q, 0);

    const valorTotal = Object.entries(carrinho).reduce((total, [id, qtd]) => {
        const prod = cardapio.find((p) => p.id === Number(id));
        return total + (prod ? prod.preco * qtd : 0);
    }, 0);

    function exibirMensagem(texto) {
        setMensagemModal(texto);
        setModalAberto(true);
    }

    function finalizarCompra() {
        if (!restauranteAberto) {
            exibirMensagem('O restaurante está fechado no momento!');
            return;
        }
        if (totalItens === 0) {
            exibirMensagem('Coloque algo no carrinho!');
            return;
        }
        if (!endereco.trim()) {
            exibirMensagem('Informe o endereço de entrega!');
            return;
        }

        exibirMensagem(
            `Pedido de R$ ${valorTotal.toFixed(2).replace('.', ',')} finalizado com sucesso!`,
        );
        setCarrinho({});
        setEndereco('');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCardapio([
                {
                    id: 101,
                    nome: 'Combo Master',
                    descricao: '2 lanches artesanais + refri 2L',
                    preco: 65.0,
                    categoria: 'Lanches',
                    tag: 'Mais Pedido',
                },
                {
                    id: 102,
                    nome: 'Hambúrguer Grão de Bico',
                    descricao: 'Vegano, queijo de castanhas e molho especial',
                    preco: 28.0,
                    categoria: 'Lanches',
                    tag: 'Vegano',
                },
                {
                    id: 103,
                    nome: 'Açaí na Tigela',
                    descricao: '500ml com morango e leite condensado',
                    preco: 18.0,
                    categoria: 'Doces',
                },
                {
                    id: 104,
                    nome: 'Pizza Brotinho',
                    descricao: 'Calabresa com massa de longa fermentação',
                    preco: 32.0,
                    categoria: 'Lanches',
                },
                {
                    id: 105,
                    nome: 'Batata Frita Suprema',
                    descricao: 'Porção 400g com molho de queijo e bacon',
                    preco: 24.5,
                    categoria: 'Acompanhamentos',
                    tag: 'Novo',
                },
                {
                    id: 106,
                    nome: 'Suco Natural Laranja',
                    descricao: 'Jarra de 500ml 100% fruta',
                    preco: 10.0,
                    categoria: 'Bebidas',
                },
                {
                    id: 107,
                    nome: 'Pudim Caseiro',
                    descricao: 'Fatia individual cremosa e calda de caramelo',
                    preco: 12.0,
                    categoria: 'Doces',
                },
                {
                    id: 108,
                    nome: 'Anéis de Cebola',
                    descricao: 'Porção crocante de 300g com molho barbecue',
                    preco: 19.9,
                    categoria: 'Acompanhamentos',
                },
            ]);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const cardapioFiltrado =
        categoriaAtiva === 'Todos'
            ? cardapio
            : cardapio.filter((item) => item.categoria === categoriaAtiva);

    if (cardapio.length === 0) {
        return (
            <div className="loading-screen">
                <h2>Preparando o cardápio do restaurante...</h2>
            </div>
        );
    }

    return (
        <div className="desktop-layout">
            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal-card">
                        <p>{mensagemModal}</p>
                        <button className="btn-modal" onClick={() => setModalAberto(false)}>
                            Entendido
                        </button>
                    </div>
                </div>
            )}

            {/* Topbar horizontal */}
            <header className="desktop-topbar">
                <div className="brand">
                    <h1>Senai Delivery</h1>
                    <span className="status-badge">🟢 Restaurante Aberto</span>
                </div>
                <div className="topbar-info">
                    <span>
                        ⏱️ Tempo estimado: <strong>30-45 min</strong>
                    </span>
                </div>
            </header>

            {/* Conteúdo em 2 colunas para tela cheia */}
            <div className="desktop-main-container">
                {/* Coluna Esquerda: Filtros e Grade de Produtos */}
                <section className="menu-section">
                    <div className="categorias-bar">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                className={`btn-categoria ${categoriaAtiva === cat ? 'ativa' : ''}`}
                                onClick={() => setCategoriaAtiva(cat)}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="cardapio-grid">
                        {cardapioFiltrado.map((item) => (
                            <ItemCardapio
                                key={item.id}
                                item={item}
                                quantidade={carrinho[item.id] || 0}
                                alterarQuantidade={alterarQuantidade}
                            />
                        ))}
                    </div>
                </section>

                {/* Coluna Direita: Sidebar Fixo do Carrinho + Checkout */}
                <aside className="carrinho-sidebar">
                    <h3>🛒 Seu Pedido</h3>

                    <div className="itens-carrinho-lista">
                        {totalItens === 0 ? (
                            <div className="carrinho-vazio">
                                <p>Seu carrinho está vazio</p>
                                <span>Adicione itens do cardápio para começar</span>
                            </div>
                        ) : (
                            Object.entries(carrinho).map(([id, qtd]) => {
                                const prod = cardapio.find((p) => p.id === Number(id));
                                if (!prod) return null;
                                return (
                                    <div key={id} className="item-resumo">
                                        <div className="item-resumo-detalhes">
                                            <span>
                                                {prod.emoji} {prod.nome}
                                            </span>
                                            <small>
                                                {qtd}x R$ {prod.preco.toFixed(2).replace('.', ',')}
                                            </small>
                                        </div>
                                        <strong>
                                            R$ {(prod.preco * qtd).toFixed(2).replace('.', ',')}
                                        </strong>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className="resumo-financeiro">
                        <div className="linha-financeira">
                            <span>Subtotal</span>
                            <span>R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div className="linha-financeira">
                            <span>Taxa de entrega</span>
                            <span className="gratis">Grátis</span>
                        </div>
                        <div className="linha-financeira total">
                            <span>Total</span>
                            <strong>R$ {valorTotal.toFixed(2).replace('.', ',')}</strong>
                        </div>
                    </div>

                    <div className="checkout-box">
                        <label htmlFor="input-endereco">Endereço de Entrega</label>
                        <input
                            id="input-endereco"
                            type="text"
                            className="input-endereco"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            placeholder="Rua, Número, Bairro e Complemento"
                        />
                        <button className="btn-finalizar" onClick={finalizarCompra}>
                            Finalizar Pedido • R$ {valorTotal.toFixed(2).replace('.', ',')}
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default App;
