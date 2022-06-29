import { useState, useEffect, ChangeEvent } from 'react'
import { api } from '../services/api'


export default function App() {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [editora, setEditora] = useState('')
    const [autor, setAutor] = useState('')
    const [data, setData] = useState([])
    const [url, setUrl] = useState('')
    
    const handleUploadFile = (e: any) => setImage(e.target.files[0]);

    const hadleChange = (e: any) => {return e.target.value}

    useEffect(() => {
        const getImages = async () => {

            const reponse = await api.get('/biblioteca') 
    
            setData(reponse.data.bibliList)
            setUrl(reponse.data.url)
        }

        getImages()
    }, [])

    const uploadImage = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('editora', editora)
        formData.append('autor', autor)
        
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }
        console.log(formData)

       const response =  await api.post('/biblioteca', formData, headers)
         
       setData([...data, response.data.bibliList])

        setTitle('')
        setEditora('')
        setAutor('')
        setImage('')

        document.location.reload(true);

    }

    


    const excluir = async (id) => {
        const reponse = await api.delete(`/biblioteca/${id}`)

        if(reponse){
            setData(data.filter(note => note._id !== id))
        }
    }


   return(
    <div>
        <form onSubmit={uploadImage}>
            <input type="text" placeholder='Título da obra' value={title} onChange={e => setTitle(hadleChange(e))}/><br />
            <input type="text" placeholder='Nome da Editora' value={editora} onChange={e => setEditora(hadleChange(e))}/><br />
            <input type="text" placeholder='Nome do autor(a)' value={autor} onChange={e => setAutor(hadleChange(e))}/><br />
            <label>Imagem: </label><br />
            <input type="file" name='image' onChange={handleUploadFile} /><br/><br/>
            {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width='150' height='150'/>: 'Esperando uma imagem'}<br/><br/>
            <button type='submit'>Salvar</button>
        </form>
        <div>
            {data.map((data) => (
                <div key={data._id}>
                    <span>{data.title}</span><br />
                    <span>{data.editora}</span><br />
                    <span>{data.autor}</span><br />
                    <img src={url + data.image} alt="Ilustração" width='150px' /><br/>
                    <button onClick={() => excluir(data._id)}>Excluir</button><br />
                    {/* <button onClick={() => }>Editar</button> */}
                </div>
            ))}
        </div>
    </div>
   )
}


