import React,{useState} from 'react'
import { UserContext } from '../../contexto/contexto'
import Comp2 from './comp2'
import Comp4 from './comp4'
const Comp1 = () => {

    const objetoUsuario={
        "nombre":"carlos",
        "apellido":"caceres",
        "edad":42
    }
    const [user,setUser] = useState(objetoUsuario)

    return (
        <div>
               <p>Componente 1</p> 
               <UserContext.Provider value={user}>
                    <Comp2></Comp2>
                    <Comp4></Comp4>
               </UserContext.Provider>
            
        </div>
    )
}

export default Comp1
