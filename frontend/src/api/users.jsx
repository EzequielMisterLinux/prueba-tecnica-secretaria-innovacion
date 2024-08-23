import axios from "axios"
const URLBASE = "http://localhost:3000/"



const getAndLoginUser = async(req, res) => {

    try {
        
        const response = await axios.post(`${URLBASE}/add-user`)
        return response.data

    } catch (error) {
        console.log(error);
        
    }
}

const getAllusers = async(req, res) => {
    try {
        
        const response = await axios.get(`${URLBASE}/get-users`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}


const DeleteUser = async(req, res) => {

    try {
        const response = await axios.delete(`${URLBASE}/delete-user`)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}

const updateUser = async(req, res) => {

    try {
        const response = await axios.update(`${URLBASE}/update-user`)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}

export {
    getAndLoginUser,
    getAllusers,
    DeleteUser,
    updateUser
}