import express from "express"
import createNewuser from "../controllers/adduser.js"


const routes = express.Router()

routes.post("/add-user", createNewuser)

export default routes