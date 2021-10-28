import React, { useState } from "react";
import { Task } from "./domain/task";

const Ejercicio2 = () =>{
    
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [taskList, setTasklist] =useState([]);

    const addTask = () =>{
        setTasklist(taskList.concat(new Task(task, priority)))
        console.log(taskList)
    }
    
           return (
            <>
                <h1>Lista de tareas</h1>

                <form>
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="tarea"
                    type="text"
                    name="tarea"
                    placeholder="Descripción de la tarea"
                />
                <select name="prioridad" id="prioridad" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option disabled defaultValue>Prioridad</option>
                    <option value="prioridad-baja">baja</option>
                    <option value="prioridad-media">media</option>
                    <option value="prioridad-alta">alta</option>
                </select>
                <button id="agregar" onClick={addTask} type="button">Agregar!</button>
                </form>
                <span id="error-message"> </span>
                <h3>Tareas</h3>
                <ul                    
                    id="lista-tareas"
                >
                    {
                        taskList.map((value, index)=>{
                            return (
                                <li key={index}>
                                    {value.task}
                                </li>
                            )
                        })
                    }
                </ul>

                <p>
                Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
                interactuar con él
                </p>
            </>
   )
}



export default Ejercicio2
