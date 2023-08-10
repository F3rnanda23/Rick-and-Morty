// solo vamos atener el puerto escuchando y la conexion a la bd

const server =require('./app')
const PORT=3001;
const { conn }=require('./DB_connection')


conn.sync({force: false}).then (()=>{
    server.listen(PORT, ()=>{
        `server raised in port:${PORT} `
    });
} )


