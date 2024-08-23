import NewModelProducto from "../../models/NewProduct.js";

const AddProduct = async(req, res) => {

    const {name, descripcion , precio, stock} = req.body

    try {
        
        const newProducto = await NewModelProducto.findByIdAndUpdate({name, descripcion , precio, stock})
        newProducto.save()
        res.status(201).json({mjs : "producto creado exitosamente"})

    } catch (error) {
        console.log("hubo un problema al agregar el producto",error);
        
    }
}

export default AddProduct