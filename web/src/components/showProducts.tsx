import React from 'react'

export function Notes({ data }){
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