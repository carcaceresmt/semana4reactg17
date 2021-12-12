import React,{useContext} from 'react'
import { UserContext } from '../../contexto/contexto'

const Comp3 = () => {
    const user=useContext(UserContext)
    return (
        <div>
            <p>Componente 3</p>
            <p>Nombre {user.nombre}</p>
            <p>Apellido {user.apellido}</p>
        </div>
    )
}

export default Comp3
