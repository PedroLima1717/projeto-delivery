import Avatar from './components/Avatar';

function app() {
    return (
        <div>
            <h2>Usuários</h2>
            <div>
                <Avatar nome="João" foto="1" online={true}/>
                <Avatar nome="Maria" foto="2" online={false}/>
                <Avatar nome="Pedro" foto="3" online={true}/>
            </div>
        </div>
    )
}
export default app
