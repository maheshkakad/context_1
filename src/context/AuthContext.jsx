import React, { createContext, useState } from 'react'

export const AuthContext = createContext() 
export const AuthProvider=({children})=> {
    const[isAuthorized,setIsAuthorised]=useState(false);

    const login=(username,password)=>{
        if(username && password){
            setIsAuthorised(true);
        }
    }

    const logout=()=>{
       setIsAuthorised(false);
    }
    
  return (
    <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>
  )
}
