const categorias = ['Todos', 'Pizzas', 'Hambúrgueres', 'Bebidas', 'Sobremesas'];

function App() {
    return (
        <div>
            <h2>Categorias</h2>
            <ul>
                {categorias.map((categoria, index) => (
                    <button key={index} style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}>
                        {categoria}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default App;
