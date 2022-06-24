import biblioteca from '../models/BibliData'

export default {

    async create(req,res){
        const { title, editora, autores, url } = req.body

        if(!title || !autores){
            return res.status(400).json({ error: 'É necessário um titulo/foto'})
        }

        const bibliCreat = await biblioteca.create({
            title,
            editora,
            autores,
            url
        })
        
        return res.json(bibliCreat)
    },
    
    async read(req, res){
        const bibliList = await biblioteca.find()

        return res.json(bibliList)
    },

    async update(req,res){

        const { id } = req.params
        const { title, editora, autores } = req.body

        const bibli = await biblioteca.findOne({ _id: id })

        if(title){
            bibli.title = title
        }

        if(editora){
            bibli.editora = editora
        }

        if(autores){
            bibli.autores = autores
        }

        await bibli.save()

        return res.json(bibli)
    },

    async delete(req,res){
        const { id } = req.params

        const bibliDeleted = await biblioteca.findByIdAndDelete({ _id: id})

        if(bibliDeleted){
            res.json(bibliDeleted)
        }
    }
}