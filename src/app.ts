import express, { Express } from "express"

const app: Express = express()

// Middleware básico
app.use(express.json())

export default app
