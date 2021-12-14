const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const Task = require('../domain/task')

const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`) // Example for postgres



router.get('/', async(req, response)=>{
  
  const config ={
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE
  }

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const client = new Client(config)
  await client.connect()
  const res = await client.query('SELECT * FROM tasks');
  let tasks = res.rows 
  await client.end()

  response.send({
      tasks: res.rows
  })
})

router.get('/:id', function(req, res){
    console.log(req.params.id)
    const task = tasks.find(u => u.id == req.params.id);
    if (task){
        return res.send ({success: true, task: task});
    }
    else{
        return res.send(
            {
                success: false,
                message: `La tarea con id ${req.params.id} is re undefined`
            }
        );
    }
});

router.post('/', async(req, res)=>{
  
    const task = await Task.create(req.body)
    res.send({Message: 'La tarea se ha agregado con exito', task: task});
 
  // let task = req.body;
  // let id = tasks.sort((a, b)=> b.id - a.id)[0].id + 1 || 1 ;
  // task.id = id;
  // tasks.push(task);
  // res.send({
  //   success: true,
  //   message: `La tarea con id ${id} llegó good`,
  //   task:task
  //         });
})

router.delete('/:id',(req, res)=>{
  tasks = tasks.filter(task => task.id != req.params.id);
  res.send({
    success: true,
    message: `La tarea con id ${req.params.id} se borró bien`,
    tasks:tasks
          });

});



// let tasks = [
//     {
//       "task": "Pasear al toby",
//       "priority": "priority-high",
//       "id": 0
//     },
//     {
//       "task": "Hacer preguntas en Slack",
//       "priority": "priority-low",
//       "id": 1
//     },
//     {
//       "task": "Limpiar el cuarto",
//       "priority": "priority-medium",
//       "id": 2
//     },
//     {
//       "task": "Pasear al toby",
//       "priority": "priority-high",
//       "id": 3
//     },
//     {
//       "task": "Pasear al toby",
//       "priority": "priority-high",
//       "id": 4
//     },
//     {
//       "task": "asdsada",
//       "priority": "priority-low",
//       "id": 6
//     },
//     {
//       "task": "Agregar un elemento",
//       "priority": "priority-medium",
//       "id": 7
//     },    
//     {
//       "task": "sadsad",
//       "priority": "priority-medium",
//       "id": 8
//     }
//   ]






module.exports = router;