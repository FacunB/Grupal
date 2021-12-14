const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();


//cors, configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const taskRoutes = require ('./routes/tareas');


app.use(function(req, res, next){
    console.log('Hora', Date.now());
    next();
});

app.use('/tasks', taskRoutes);


app.get('/', function(req, res){
    res.send('Hello')
});



app.listen(5000);