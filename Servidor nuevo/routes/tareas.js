const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        success:true,
        tasks: tasks
    });
});

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

let tasks = [
    {
      "titulo": "Pasear al toby",
      "prioridad": "prioridad-alta",
      "id": 0
    },
    {
      "titulo": "Hacer preguntas en Slack",
      "prioridad": "prioridad-alta",
      "id": 1
    },
    {
      "titulo": "Limpiar el cuarto",
      "prioridad": "prioridad-media",
      "id": 2
    },
    {
      "titulo": "Pasear al toby",
      "prioridad": "prioridad-alta",
      "id": 3
    },
    {
      "titulo": "Pasear al toby",
      "prioridad": "prioridad-alta",
      "id": 4
    }   
  ]






module.exports = router;