import biblioteca from '../models/BibliData'
import { Request, Response } from 'express'

// interface typeModel {
//     title: string,
//     editora: string,
//     autor: string,
//     image: string       
// }

export default {

    

    async create(req: Request, res:Response){
        const { title, editora, autor, image } = req.body

        if(!title || !autor){
            return res.status(400).json({ error: 'É necessário um titulo/foto'})
        }

        const bibliCreat = await biblioteca.create({
            title,
            editora,
            autor,
            image
        })
        
        return res.json(bibliCreat)
    },
    
    async read(req: Request, res:Response){
        const bibliList = await biblioteca.find()

        return res.json(bibliList)
    },

    async update(req: Request, res:Response){

        const { id } = req.params
        const { title, editora, autor, image } = req.body

        const bibli = await biblioteca.findById({ _id: id })

        if(title){
            bibli.title = title
        }

        if(editora){
            bibli.editora = editora
        }

        if(autor){
            bibli.autor = autor
        }
        if(image){
            bibli.image = image
        }

        await bibli.save()

        return res.json(bibli)
    },

    async delete(req: Request, res:Response){
        const { id } = req.params

        const bibliDeleted = await biblioteca.findByIdAndDelete({ _id: id})

        if(bibliDeleted){
            res.json(bibliDeleted)
        }
    }
}