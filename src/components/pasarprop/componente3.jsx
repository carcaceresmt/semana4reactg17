import React,{useState} from 'react'

const Componente3 = (props) => {

    const [user,setUser] = useState(props.param)
    return (
        <div>
            <p>Componente 3</p>
           <p>{user.nombre}</p>
           <p>{user.apellido}</p> 
           <p>{user.edad}</p>
        </div>
    )
}

export default Componente3
