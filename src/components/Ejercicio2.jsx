import React, { useState } from "react";
import Task from "./domain/task";

const Ejercicio2 = () =>{
    
    const [task, setTask] = useState([]);
    const [priority, setPriority] = useState(0);
    const [sideB, setSideB] = useState(0);
    
           return (
            <>
                <h1>Lista de tareas</h1>

                <form>
                <input
                    id="tarea"
                    type="text"
                    name="tarea"
                    placeholder="Descripción de la tarea"
                />
                <select name="prioridad" id="prioridad">
                    <option disabled defaultValue>Prioridad</option>
                    <option value="prioridad-baja">baja</option>
                    <option value="prioridad-media">media</option>
                    <option value="prioridad-alta">alta</option>
                </select>
                <button id="agregar">Agregar!</button>
                </form>
                <span id="error-message"> </span>
                <h3>Tareas</h3>
                <ul id="lista-tareas">
                </ul>

                <p>
                Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
                interactuar con él
                </p>
            </>
   )
}



export default Ejercicio2
