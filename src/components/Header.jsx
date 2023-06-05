import './Header.css';

function Header({user, email, password, success, login}){
    return(
        <>
            { console.log(user) }
            <h3>{ user }</h3>
            <h3>{ email }</h3>
            <h3>{ password }</h3>
            <h3>{ success }</h3>
            <h3>{ login }</h3>
            <h1 className="text-success">This is Header</h1>

        </>
    );
}

export default Header;