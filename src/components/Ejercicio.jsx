import { render } from "@testing-library/react";
import React, { useState } from "react";

const Ejercicio1 = () =>{

     const [sideA, setSideA] = useState(0);
     const [sideB, setSideB] = useState(0);
     const [sideC, setSideC] = useState(0);
     const [triangles, setTriangles] = useState([]);

     const triangle = () =>{
        if (sideA <= 0 || sideB <= 0 || sideC <= 0){
             console.log("Eso no es un triangulo man")
             
                }else{
                    if (sideA == sideB && sideB == sideC){
                        console.log("Tu triangulo es equilatero")
                        setTriangles(triangles.concat('Equilatero'))
                        console.log(triangles)
                    }else if (sideA == sideB || sideB == sideC || sideA == sideC){
                        console.log("Tu triangulo es isoceles")
                        setTriangles(triangles.concat('Isoceles'))
                        console.log(triangles)
                    }else{
                            console.log("Tu triangulo es escaleno")
                            setTriangles(triangles.concat('Escaleno'))
                            console.log(triangles)  
                    }   
                    
                }
            }
            
    


            return (
                <>
            <form>
            <input name="sideA" value={sideA} onChange={(e) => setSideA(e.target.value)} type="number" placeholder="side A"/>
            <input name="sideB" value={sideB} onChange={(e) => setSideB(e.target.value)}  type="number" placeholder="side B"/>
            <input name="sideC" value={sideC} onChange={(e) => setSideC(e.target.value)}  type="number" placeholder="side C"/>
            <button type="button" onClick={triangle} >Calcular</button>
            <div id="message">
                {
                    triangles.map((value, index)=>{
                        return (
                            <p key={index}>
                                {value}
                            </p>
                        )
                    })
                }
            </div>
            </form>
        </>
    )
}

export default Ejercicio1