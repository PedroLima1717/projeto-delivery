import ItemCardapio from './components/ItemCardapio';

function App() {
    return (
        <>
            <h1>Senai Delivery</h1>
            <ItemCardapio
                nome="Hamburguer de picanha"
                descricao="Hamburguer com carne de picanha, queijo, alface e tomate"
                preco={29.9}
            />
            <ItemCardapio
                nome="Pizza Portuguesa"
                descricao="Pizza com queijo muçarela, presunto, ovos cozidos, cebola, azeitonas, ervilhas"
                preco={35.9}
            />
            <ItemCardapio
                nome="Pastel de pizza"
                descricao="Pastel com queijo muçarela, presunto, tomate, cebola fatiada e orégano"
                preco={12.9}
            />
        </>
    );
}

export default App;
