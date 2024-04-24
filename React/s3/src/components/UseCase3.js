import { useState } from "react";

function UseCase3() {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');

    const nameHandler=(e)=>{
        setName(e.target.value);
    }

    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }

    return ( 
        <div>
            <h1>Your details</h1><hr/>
            <h3>Welcome: {name.toUpperCase()}</h3>
            <h3>Email: {email.toLowerCase()}</h3>
            <input type="text" placeholder="Enter your Name"
            onChange={nameHandler}/>
            <input type="email" placeholder="Enter your Email"
            onChange={emailHandler}/>
        </div>
     );
}

export default UseCase3;