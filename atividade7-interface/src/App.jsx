import { useState } from 'react';

function App() {
    const [curtidas, setCurtidas] = useState(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h2>Aprendendo Estado no React</h2>
            <p style={{ fontSize: '1.2rem' }}>
                <strong>{curtidas}</strong> pessoas curtiram a nova embalagem do Delivery!
            </p>
            <button onClick={() => setCurtidas(curtidas + 1)}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#ff4757',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Curtir
            </button>

        </div>
    );
}

export default App;
