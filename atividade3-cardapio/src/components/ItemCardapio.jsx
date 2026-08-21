function ItemCardapio({ nome, descricao, preco }) {
    return (
        <div style={{ border: '1px solid grey', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p style={{ color: 'green', fontWeight: 'bold', }}>Preço: R$ {preco.toFixed(2)}</p>
        </div>
    );
}

export default ItemCardapio;
