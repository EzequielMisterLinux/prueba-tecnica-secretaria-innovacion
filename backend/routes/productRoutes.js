import express from "express"
import AddProduct from "../controllers/productos/newproducto.js"
import deleteProduct from "../controllers/productos/delProducto.js"
import UpdateProducto from "../controllers/productos/updateProducto.js"

const routesProduct = express.Router()

routes.post("/add-product", AddProduct)
routes.delete("/delete-product", deleteProduct)
routes.update("update-product", UpdateProducto)

export default routesProduct