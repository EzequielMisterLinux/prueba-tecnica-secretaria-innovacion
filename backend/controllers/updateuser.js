import NewModelUser from "../models/newuser.js";

const createNewuser = async(req, res) => {

    const {name, email , password, direccion} = req.body
    const id = req.id

    try {
        
        const newUser = await NewModelUser(id,{name, email , password, direccion},{new:true})
        newUser.save()
        res.status(201).json({mjs : "usuario actualizado exitosamente"})

    } catch (error) {
        console.log("hubo un problema al actualizar al usuario",error);
        
    }
}

export default createNewuser