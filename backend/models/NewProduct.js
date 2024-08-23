import mongoose from "mongoose";

const NewSchemaProducto = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require:true
    },
    stock: {
        type: Number,
        require: true
    }

})

const NewModelProducto = mongoose.model("users", NewSchemaProducto)

export default NewModelProducto
