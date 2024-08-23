import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

const URL = process.env.MONGOURL

const Createconnectionmongo = () => {

    try {
        
        mongoose.connect(URL)
        console.log("conexion exitosa a mongodb");
        


    } catch (error) {
        console.error("hubo un problema al intentar conectar con el servidor");
        
    }
}

export default Createconnectionmongo