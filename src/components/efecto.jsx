import React,{useState,useEffect} from 'react'

const Efecto = () => {
  
    const [nombre,setNombre]=useState("")
    const [edad,setEdad]=useState(0)
    const [user,setUser]=useState("")

    const cambiar=(e)=>{
        e.preventDefault()
        setNombre("juan")
        setEdad(30)
    }
    useEffect(() => {
        console.log("Se actualizo el componente")
    }, []);

    useEffect(()=>{
        console.log("Se actualizo el Estado nombre")
        localStorage.setItem("nombre",nombre)
        setUser(localStorage.getItem("nombre"))
        
    },[nombre])

    useEffect(()=>{
        console.log("Se actualizo esl Estado edad")
        localStorage.setItem("edad",edad)
    },[edad])
  
  
    return (
        <div>
            <form>
                <p>User:{user}</p>
                <p>Nombre:{nombre}</p>
                <p>Edad:{edad}</p> 
                <button onClick={cambiar}>Cambiar de Estado</button>  
            </form>   
        </div>
    )
}

export default Efecto
