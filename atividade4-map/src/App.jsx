const listaDeCores = ["vermelho", "azul", "laranja", "amarelo", "roxo"];

function App() {
    return (
        <div>
            <h2>Lista de Cores</h2>
                <ul>
                    {listaDeCores.map((corAtual, index) => (
                        <li key={index}>
                            {corAtual}
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default App;
