import { useState } from "react";
import GrandParent from "./GrandParent";

function GrandGrandParent() {
    const [name,setName]  = useState('Skill Academy')
    return ( 
        <div>
            <h3>Grand Grand Parent</h3>
            <GrandParent name={name}/>
        </div>
        
     );
}

export default GrandGrandParent;