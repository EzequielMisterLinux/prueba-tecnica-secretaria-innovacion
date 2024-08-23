import NewModelProducto from "../../models/NewProduct";

const UpdateProducto = async(req, res) => {

    const {name, descripcion , precio, stock} = req.body

    try {
        
        const newProducto = await NewModelProducto({name, descripcion , precio, stock})
        newProducto.save()
        res.status(201).json({mjs : "producto actualizado exitosamente"})

    } catch (error) {
        console.log("hubo un problema al actualizar el producto",error);
        
    }
}

export default UpdateProducto