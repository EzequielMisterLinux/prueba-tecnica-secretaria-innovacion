import mongoose from "mongoose";

const NewSchemauser = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require:true
    },
    direccion: {
        type: String,
        require: true
    }

})

const NewModelUser = mongoose.model("users", NewSchemauser)

export default NewModelUser