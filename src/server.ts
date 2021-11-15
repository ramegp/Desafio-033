import express from 'express';

const app = express();

app.get('/',(req:express.Request, res:express.Response)=>{
    res.json({msj:"Hola"})
})
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("escuchando puerto 5000");
    
})