import NewModelUser from "../../models/newuser.js";

const UpdateUser = async(req, res) => {

    const {name, email , password, direccion} = req.body

    try {
        
        const newUser = await NewModelUser({name, email , password, direccion})
        newUser.save()
        res.status(201).json({mjs : "usuario creado exitosamente"})

    } catch (error) {
        console.log("hubo un problema al agregar al usuario",error);
        
    }
}

export default UpdateUser