import React,{useState} from 'react'
import Componente2 from './componente2'
const Componente1 = () => {

    const objetoUsuario={
        "nombre":"carlos",
        "apellido":"caceres",
        "edad":42
    }
    const [user,setUser] = useState(objetoUsuario)

    return (
        <div>
            <p>Componente 1</p>
            <Componente2 param={user}></Componente2>
        </div>
    )
}

export default Componente1
