const express = require('express');
const app = express();
const path = require('path');

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