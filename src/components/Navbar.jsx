import React, { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import Display from './Display'

const Navbar = () => {
    const {isAuthorized,login,logout}=useContext(AuthContext)
  return (
    <div>Todo
        <button onClick={()=>{
            if(isAuthorized)logout();
            else login("R","Z");
        }}>
            {isAuthorized ? "Logout":"Login"}
        </button>
        {isAuthorized && <Display/>}
    </div>
  )
}

export default Navbar