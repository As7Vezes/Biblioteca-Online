import express from 'express'
export const routes = express.Router()

import bibliController from './controllers/BibliController'

// Rota Produtos
routes.get('/biblioteca', bibliController.read)
routes.post('/biblioteca', bibliController.create)
routes.post('/updatBiblioteca/:id',bibliController.update)
routes.delete('/biblioteca/:id', bibliController.delete)

 