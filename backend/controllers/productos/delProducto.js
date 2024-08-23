import NewModelUser from "../../models/NewProduct";

const deleteProduct = async(req, res) => {
    
    const id = req.id

    try {
        
        const deluser = await NewModelUser.findByIdAndDelete(id)
        res.status(200).json({mjs: "usuario eliminado exitosamente"})
        return deluser
    } catch (error) {
        
        console.log(error);
        
    }
}

export default deleteProduct