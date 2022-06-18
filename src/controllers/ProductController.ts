import products from '../models/ProdutcData'

export default {
    
    async read(req, res){
        const productList = await products.find()

        return res.json(productList)
    },

    async create(req,res){
        const { title, quant, repor } = req.body

        if(!title || !quant){
            return res.status(400).json({ error: 'É necessário um nome/quantidade'})
        }

        const productCreat = await products.create({
            title,
            quant,
            repor
        })
        
        return res.json(productCreat)
    }
}