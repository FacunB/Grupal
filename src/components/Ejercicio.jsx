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
                    let type = ''
                    if (sideA == sideB && sideB == sideC){
                        type= 'Equilatero'
                    }else if (sideA == sideB || sideB == sideC || sideA == sideC){
                        type= 'Isoceles'
                    }else{
                        type= 'Escaleno'
                    }   
                    
                    fetch('http://localhost:4000/triangulos', {
                        method:"POST",
                        headers: {
                            'Accept': 'application/json',
                        'Content-Type':'application/json'
                                },
                        body: JSON.stringify({
                            sideA: sideA,
                            sideB: sideB,
                            sideC: sideC,
                            type: type
                        })                     
                        
                    })
                    .then((data) => data.json())
                    .then(data =>setTriangles(triangles.concat(data))
                    )
                    .catch(e=> console.log(e))

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
                                {value.type}
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