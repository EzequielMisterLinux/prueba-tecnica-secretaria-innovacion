import express from "express"
import createNewuser from "../controllers/users/adduser.js"
import deleteUser from "../controllers/users/deleteUser.js"
import UpdateUser from "../controllers/users/adduser.js"

const routes = express.Router()

routes.post("/add-user", createNewuser)
routes.delete("/delete-user", deleteUser)
routes.update("update-user", UpdateUser)

export default routes