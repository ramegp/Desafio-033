import express from 'express'

const app = express()

app.get('/',(req:express.Request,res:express.Response)=>{
    res.json({msg:"Hola mundo"})
})

const PORT = process.env.PORT || 8001;

app.listen(PORT,()=>{
    console.log(`Escuchando ${PORT}`);
    
})