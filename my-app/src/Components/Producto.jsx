import React,{useEffect} from "react"

function Producto({
  id,
  category,
  price
}){
 
   
  useEffect(
    ()=>{
     // console.log("Se modifico title",id)
    },
    [id]
  )

  return (
      <>
      <tr key={id}>
       <th scope="row">{id}</th>
        <td>{category}</td>
        <td>{price}</td>
        <td><button type="button" className="btn btn-outline-info">Ver Detalle</button></td>
      </tr>
      </>
  )
}

export default Producto
