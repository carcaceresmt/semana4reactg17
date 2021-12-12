import React,{useState} from 'react'
import Componente3 from './componente3'
const Componente2 = (props) => {
    const [user,setUser] = useState(props.param)
    return (
        <div>
            <p>Componente 2</p>
           <p>{user.nombre}</p>
           <p>{user.apellido}</p> 
           <p>{user.edad}</p>
           <Componente3 param={user}>               
           </Componente3>
        </div>
    )
}

export default Componente2
