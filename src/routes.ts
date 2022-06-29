import express from 'express'
import { Request, Response } from 'express'
import multer from 'multer'
import { multerConfig } from './config/multer'
export const routes = express.Router()

import bibliController from './controllers/BibliController'

// Rota Biblioteca
routes.get('/biblioteca', bibliController.read)
routes.post('/biblioteca',  multer(multerConfig).single('image'), bibliController.create)
routes.put('/updatBiblioteca/:id',bibliController.update)
routes.delete('/biblioteca/:id', bibliController.delete)




