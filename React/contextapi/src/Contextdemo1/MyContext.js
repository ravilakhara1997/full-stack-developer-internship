import { createContext, useContext, useState } from "react";

const MyContext = createContext(); //creating context

//for providing context as Provider
function MyContextProvider({ children }) {
    const [data, setData] = useState('Msg from GrandGrand Parent')
    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;

//below one is to use Context to all other component
export const  useMyContext=()=>{
    return useContext(MyContext);
}