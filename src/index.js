
import express from "express";
import prodRouter from "../src/routes/prod.router.js";
//import morgan from "morgan";
//process.loadEnvFile()
const app = express()

// config()

const PORT = 3000

// middlewares
app.use(express.json())
//app.use(morgan('combined'))

app.use('/api', prodRouter)


app.listen(PORT, ()=>{
    console.log('Corriendo en produccion ');
    
})