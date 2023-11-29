import React,{useState} from "react";
const AppCounter=React.createContext()

export const NewStates=({children})=>{
    const [persons,setPersons]=useState(1)
    const[dataUser,setDataUser]=useState({
        userAmount:'0'
      })
    const [percent,setPercent]=useState(10)

    return(
        <AppCounter.Provider value={{persons,setPersons,dataUser,setDataUser,percent,setPercent}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter