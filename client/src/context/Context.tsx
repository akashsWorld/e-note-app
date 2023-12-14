import { createContext, useState } from "react";
import { Context } from "types/index";



const MyContext = createContext<Context|null>(null);

let obj=null;

const ContextProvider = ({children}:{children:React.ReactNode})=>{


    const contextObj={
        session:null,
        stateChangefunction:{
            createNote:()=>console.log("Hello")
        }

    }
    const [session,setSession ] = useState(contextObj);

    obj = setSession;

    return <MyContext.Provider value={session}>{children}</MyContext.Provider>
}

export {MyContext,ContextProvider,obj};

