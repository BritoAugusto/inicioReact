import { useState } from "react";
const Contador = () => {
    //aqui va la mayor parte de logica
    const [numero, setNumero] = useState(0)
    // let numero = 0;
    
    const sumar = ()=>{
    
    setNumero(numero +1)
     
     
    }
    const restar = ()=>{
  
    setNumero(numero -1)
    
    
    }

    return (
        <section className="text-center container">
            <h2>Practica Contador</h2>
            <p>{numero}</p>
            <button className="btn btn-primary" onClick={sumar}>+1</button>
            <button className="btn btn-danger" onClick={restar}>-1</button>
        </section>
    );
};

export default Contador;