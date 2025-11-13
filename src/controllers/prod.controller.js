
import { pool } from "../db.js";

// get all
export const getAllProd = async(req, res)=>{

    const {rows} = await pool.query('SELECT * FROM prod')
    res.json(rows)

}


//post
export const postProd = async(req, res)=>{

    const {nombre_prod, precio_prod} = req.body

    await pool.query('INSERT INTO prod (nombre_prod, precio_prod) values ($1, $2)', [nombre_prod, precio_prod])
    res.json({"message": "Guardado!"})

}