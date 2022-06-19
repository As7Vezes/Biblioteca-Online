import axio from 'axios'
import { useState, useEffect } from 'react'
import { api } from '../services/api'
import { Notes } from './components/showProducts'

export default function App() {

  const [title, setTitle] = useState('')
  const [quant, setQuant] = useState('')
  const [allProducts, setAllProducts] = useState([])

useEffect(() => {
  async function getAllProducts() {
    const response = api.get('/products',)

    setAllProducts((await response).data)
  }

  getAllProducts()
}, [])
    
async function hadleSubmit(e: { preventDefault: () => void }){
  e.preventDefault()

  const response = await api.post('/products', {
    title,
    quant,
    repor: false
  })

  setTitle('')
  setQuant('')

  setAllProducts([...allProducts, response.data])
}

  return(
    <>
      <form onSubmit={hadleSubmit}>
        <input  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input  value={quant} onChange={(e) => setQuant(e.target.value)}/>

        <button type='submit'>Enviar</button>
      </form>

      <div>
        <ul>
          {allProducts.map(data => (
            <Notes data={data}/>
          ))}
        </ul>
      </div>
    </>
  ) 

}


