import express from "express"
import cors from "cors"
import cursosRoutes from "./routes/cursos.routes.js"
import morgan from "morgan"

import config from "./config.js"

const app = express()

app.set("port", config.port)

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded( { extended: false }))

app.use("/api", cursosRoutes)

export default app