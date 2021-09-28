const express = require('express');
const app = express();
app.use(express.static('public'));



app.get('/', (req,res)=>{
    res.sendFile(__dirname + './views/home.html');
});

app.get('/crear-producto', (req,res)=>{
    res.sendFile(__dirname + './views/crear-producto.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + './views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + './views/login1.html');
});


app.listen(3000 || process.env.PORT, ()=> console.log('Servidor funcionando en el 3000'));