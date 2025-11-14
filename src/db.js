import pg from "pg";
//process.loadEnvFile()

export const pool = new pg.Pool({
    user: process.env.USER_PG,
    host: process.env.HOST_PG,
    database: 'carrito',
    port: process.env.PORT_PG,
    password: 'Chileylau025'
})

pool.query('SELECT NOW()').then(result =>{
    //console.log('resultado de la db:', result);}
})