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
      "task": "Pasear al toby",
      "priority": "priority-high",
      "id": 0
    },
    {
      "task": "Hacer preguntas en Slack",
      "priority": "priority-low",
      "id": 1
    },
    {
      "task": "Limpiar el cuarto",
      "priority": "priority-medium",
      "id": 2
    },
    {
      "task": "Pasear al toby",
      "priority": "priority-high",
      "id": 3
    },
    {
      "task": "Pasear al toby",
      "priority": "priority-high",
      "id": 4
    },
    {
      "task": "asdsada",
      "priority": "priority-low",
      "id": 6
    },
    {
      "task": "Agregar un elemento",
      "priority": "priority-medium",
      "id": 7
    },
    {
      "task": "sadasdas",
      "priority": "priority-low",
      "id": 8
    },
    {
      "task": "dsadasdas",
      "priority": "priority-low",
      "id": 9
    },
    {
      "task": "asdsadas",
      "priority": "priority-medium",
      "id": 10
    },
    {
      "task": "dasdsad",
      "priority": "priority-high",
      "id": 11
    },
    {
      "task": "asdasdsa",
      "priority": "priority-medium",
      "id": 12
    },
    {
      "task": "sfdsfs",
      "priority": "priority-low",
      "id": 13
    },
    {
      "task": "asdsada",
      "priority": "priority-low",
      "id": 14
    },
    {
      "task": "asdas",
      "priority": "priority-high",
      "id": 15
    },
    {
      "task": "sadsa",
      "priority": "priority-low",
      "id": 16
    },
    {
      "task": "sadasd",
      "priority": "priority-medium",
      "id": 17
    },
    {
      "task": "sadsad",
      "priority": "priority-medium",
      "id": 18
    }
  ]






module.exports = router;