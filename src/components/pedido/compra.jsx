import React,{useState,useEffect} from 'react'
import { consumirApiProductoGet } from '../../modelo/api'
/**
 * Autor Carlos Caceres Ochoa
 * Componente Compra
 */
const Compra = () => {
    //Llamado al Api Producto peticion Get
    const resp=consumirApiProductoGet()
    /**estados */
    const [data,setData] = useState([])

    /**
     * useEffect para llamar los datos del APi
     */
    useEffect(()=>{

        resp.then(data=>{
            setData(data.data)
            console.log(data.data)
        })

    },[])


    return (
        <div class="container">

            <table className="table table-striped text-center">
                <thead>
                    <th>
                        Id
                    </th>
                    <th>
                        Producto
                    </th>
                    <th>
                        Precio
                    </th>
                    <th>
                        Categoria
                    </th>
                    <th>
                        Stock
                    </th>
                    <th>
                        Descripción
                    </th>
                </thead>
                <tbody>
                    {
                       data.map(item=>
                        
                            <tr key={item.id}>

                                 <td>{item.id}</td>   
                                 <td>{item.nomprod}</td>
                                 <td>{item.precio}</td>
                                 <td>{item.categoria}</td>
                                 <td>{item.stock}</td>
                                 <td>{item.descripcion}</td>
                            </tr> 
                        
                    ) 

                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Compra
