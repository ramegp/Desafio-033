import express from 'express';

const app = express();

app.get('/',(req:express.Request, res:express.Response)=>{
    res.json({msj:"Hola"})
})

app.listen(5000,()=>{
    console.log("escuchando puerto 5000");
    
})