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
            return user(getAndLoginUser())
        }
        fetchData()  

    },{
        setuser
    },
    []
    )
}

const getAllUser =() => {
    const {users, setusers} = useState("")

    useEffect(()=>{
        const fetchData = () => {
            
            return setusers(getAllusers())
        }
        fetchData()
    },{
    users
    },
    []
    )
}

const Deleteuser = () => {

    const {users, setusers} = useState("")

    useEffect(() => {
        const fetchData = () => {
            return setusers(DeleteUser())
        }
        fetchData()
        ,{
            users
        },
        []
    })

}

const UpdateUser = () => {

    const {users, setusers} = useState("")

    useEffect(() => {
        const fetchData = () => {
            return setusers(updateUser())
        }
        fetchData()
        ,{
            users
        },
        []
    })

}

export {
    getAndLogin,
    getAllUser,
    Deleteuser,
    UpdateUser
}