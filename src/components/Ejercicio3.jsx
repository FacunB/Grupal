import React from 'react';
import { useState } from 'react/cjs/react.development';

const Ejercicio3 = () =>{

    const [name, setName] = useState ('')
    const [greet, setGreet] = useState(false)

   
    const greetType =()=>{
        if (name !== ""){
            return(
                <h1>Hello {name}!</h1>                
            ) 
        }else{
           return( 
            <h1>Hello Mai frien</h1>
           ) 
        }
    }
    
    
    return(
        <>
        <input 
        type="text"
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        onBlur = {()=>setGreet(true)}
        onFocus = {()=>setGreet(false)}
           />
        {
            greet &&        

                greetType()
            
        }

        </>

    )
}



export default Ejercicio3