const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Ariel Arreola');
})
app.get("/hola", (req, res) => {
    res.send('Bienvenidos a todos');
})

app.listen(port, ()=>{
    console.log('Escuchando el puerto',port);
})