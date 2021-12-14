import React, { useState, useEffect } from 'react'
import { consumirApiProductoGet } from '../../modelo/api'
/**
 * Autor Carlos Caceres Ochoa
 * Componente Compra
 */
const Compra = () => {
    //Llamado al Api Producto peticion Get
    const resp = consumirApiProductoGet()
    /**estados */
    const [data, setData] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)
    /**
     * Agregar Compra
     **/

    const agregar = (producto) => {

        if (cantidad == 0) {
            alert("Digite la Cantidad de Productos")
        }
        else if (cantidad > producto.stock) {
            alert("Excede el Stock")
        }
        else {
            let array = pedido
            if (validar(producto, array) === 0) {

                const objetoProducto = {
                    id: producto.id,
                    nomprod: producto.nomprod,
                    precio: producto.precio,
                    cantidad: cantidad,
                    descripcion: producto.descripcion,
                    subtotal: cantidad * producto.precio,
               
                }    

                array.push(objetoProducto)
                localStorage.setItem("carrito", JSON.stringify(array))
                setPedido(JSON.parse(localStorage.getItem("carrito")))
                calculoTotal(array)

            }//if de validar

            else{
                alert("Producto se Encuentra Agregado")
            }//else
            }
        }
    
    /**
     * calcular el total del pedido
     */

    const calculoTotal = (array) => {
        const valortotal = array.reduce((total, a) => total + a.subtotal, 0)
        let total = 0
        setTotal(valortotal)
        localStorage.setItem("total", valortotal)
    }

    const validar = (producto, array) => {
        let cont = 0
        array.forEach(element => {
            if (element.id === producto.id) {
                cont++
            }
        })

        return cont
    }

    const remover = (index)=>{
        let array = pedido
        if(index>0){
            array.splice(index,1)
        }
        else{
            array.pop()
        }

        localStorage.setItem("carrito",JSON.stringify(array))
        setPedido(JSON.parse(localStorage.getItem("carrito")))
        calculoTotal(array)

    }

    /**
     * useEffect para llamar los datos del APi
     */
    useEffect(() => {

        resp.then(data => {
            setData(data.data)
            console.log(data.data)
        })

        if (localStorage.getItem("carrito") != null) {
            setPedido(JSON.parse(localStorage.getItem("carrito")))
        }
        if (localStorage.getItem("total") != null) {
            setTotal(localStorage.getItem("total"))
        }

    }, [])


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-3">Lista de Producto</h1>
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
                        Cantidad
                    </th>

                    <th>
                        Descripción
                    </th>
                    <th>
                        Acción
                    </th>
                </thead>
                <tbody>
                    {
                        data.map(producto =>

                            <tr key={producto.id}>

                                <td>{producto.id}</td>
                                <td>{producto.nomprod}</td>
                                <td>{"$"}{new Intl.NumberFormat("de-DE").format(parseInt(producto.precio))}</td>
                                <td>
                                    <input type="number" min="1" id={`id${producto.id}`}
                                        name={`id${producto.id}`}
                                        onClick={(e) => setCantidad(e.target.value)}
                                        onChange={(e) => setCantidad(e.target.value)} />
                                </td>
                                <td>{producto.descripcion}</td>
                                <td><button className="btn btn-success" onClick={(e) => { agregar(producto) }}>
                                    Agregar(+)
                                </button>
                                </td>
                            </tr>

                        )

                    }
                </tbody>
            </table>

            <h1 class="text-center">Pedidos</h1>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Descripción</td>
                        <td>Subtotal</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    {

                        pedido.map((item,index) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nomprod}</td>
                                <td>{"$"}{new Intl.NumberFormat("de-DE").format(parseInt(item.precio))}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.descripcion}</td>
                                <td>{"$"}{new Intl.NumberFormat("de-DE").format(parseInt(item.subtotal))}</td>
                                <td><button className="btn btn-danger" onClick={(e)=>{remover(index)}}>
                                    Remover(-)
                                </button></td>
                            </tr>

                        )

                    }

                </tbody>

            </table>
            <hr className="mt-5" />
            <h1 className="text-right">{"Total a Pagar "}{new Intl.NumberFormat("de-DE").format(parseInt(total))}</h1>
        </div>
    )
}

export default Compra
