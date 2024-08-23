import express from "express"
import Createconnectionmongo from "./database/mongo.db.js"
import routes from "./routes/userRoutes.js"
import cors from "cors"



const app = express()
Createconnectionmongo()


app.use("/api", routes)
app.use(express.json())
app.use(cors())

const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`servidor corriendo ${port}`))