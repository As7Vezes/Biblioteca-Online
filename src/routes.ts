import express from 'express'
export const routes = express.Router()

import ProductController from './controllers/ProductController'

// Rota Produtos
routes.get('/products', ProductController.read)
routes.post('/products', ProductController.create)


