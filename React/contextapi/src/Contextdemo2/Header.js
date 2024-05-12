import { useLoginContext } from "../Contextdemo3/loginContext";

function Header() {
    const {loggedIn,login}=useLoginContext();
    return ( 
        <div>
            <h3>Header Component</h3>
            <p>{loggedIn? 'DashBoard':'Login'}</p>
        </div>
     );
}

export default Header;