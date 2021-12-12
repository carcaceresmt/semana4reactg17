import axios from "axios"

export const consumirApiProductoGet=async()=>{

    const enpoint="http://localhost:8080/api/Producto/all"
    try{
        const resp=await axios.get(enpoint)
        return resp
    }

    catch(e){
        console.log(e)
    }

}