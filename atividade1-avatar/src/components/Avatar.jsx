function Avatar({ nome, foto, online   }) {

    const corBorda = online ? "lime" : "gray";

    return (
        <div style={{textAlign: 'center', margin: '15px'}}>
            <img
                src={`https://i.pravatar.cc/150?img=${foto}`}
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    border: `2px solid ${corBorda}`,
                }}
            />
            <p>{nome}</p>
        </div>
    )
}

export default Avatar
