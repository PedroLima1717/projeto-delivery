function Modal({ mensagem, onClose }) {
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Mensagem do pedido"
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
                <p>{mensagem}</p>
                <button type="button" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
}

export default Modal;
