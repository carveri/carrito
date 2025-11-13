
import express from "express";
import prodRouter from "../src/routes/prod.router.js";
process.loadEnvFile()

const app = express()
// config()

const PORT = process.env.PORT ?? 3000

// middlewares
app.use(express.json())

app.use('/api', prodRouter)


app.listen(PORT, ()=>{
    console.log('Corriendo');
    
})