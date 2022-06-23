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
    },

    async update(req,res){

        const { id } = req.params
        const { valorMenos } = req.body

        const product = await products.findOne({ _id: id })

        if(product){
            product.quant = product.quant - Number(valorMenos)
        }

        await product.save()

        return res.json(product.quant)
    }
}