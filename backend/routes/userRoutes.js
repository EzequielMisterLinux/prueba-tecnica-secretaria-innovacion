import express from "express"
import createNewuser from "../controllers/users/adduser.js"


const routes = express.Router()

routes.post("/add-user", createNewuser)

export default routes