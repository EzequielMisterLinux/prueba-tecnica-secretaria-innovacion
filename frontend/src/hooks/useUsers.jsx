import { useState, useEffect } from "react";
import {
    getAndLoginUser,
    getAllusers,
    DeleteUser,
    updateUser
} from "../hooks/users.jsx"

const getAndLogin =() => {
    const {user, setuser} = useState("")

    useEffect(()=>{
        const fetchData = () => {
            return getAndLoginUser()
        }
        fetchData()
    },{
    getAndLoginUser
    },
    []
    )
}

const getAllUser =() => {
    const {user, setuser} = useState("")

    useEffect(()=>{
        const fetchData = () => {
            return getAndLoginUser()
        }
        fetchData()
    },{
    getAndLoginUser
    },
    []
    )
}

export {getAndLogin}