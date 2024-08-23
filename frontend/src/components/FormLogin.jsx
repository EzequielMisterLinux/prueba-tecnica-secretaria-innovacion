import React from "react";
import {getAndLogin} from "../hooks/useUsers"

const FormLogin = () => {



    return (
        <>
        <div>
            {                 
                <form onChange={getAndLogin()} method="post">
                <label htmlFor="">Login</label>
                
                <input type="email" />
                <input type="password" />
                
                <button>Register</button>
                <a href="">no tienes una tienes una cuenta? click aqui!</a>
            </form>
                
            }
        </div>
        </>
    )
}

export default FormLogin