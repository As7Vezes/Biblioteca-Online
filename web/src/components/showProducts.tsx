import React, { useState } from 'react'
import { api } from '../../services/api'

export function Notes({ data }){

/*   const [valormenos, setValorMenos] = useState([])

  async function subtrair(params){
    const response = await api.post(`/products/${params}`,{
      valormenos
    })
  
    setAllNotes(response)  
  } */
  
    return (
      <>
        <li>
          <div>
            <strong>{data.title}</strong>
          </div>
          <div>{data.quant}</div>
           
        </li>
      </>
    )
}