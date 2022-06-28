import express from 'express'
import { Request, Response } from 'express'
import multer from 'multer'
import { multerConfig } from './config/multer'
export const routes = express.Router()

import bibliController from './controllers/BibliController'

// Rota Biblioteca
routes.get('/biblioteca', bibliController.read)
routes.post('/biblioteca', bibliController.create)
routes.put('/updatBiblioteca/:id',bibliController.update)
routes.delete('/biblioteca/:id', bibliController.delete)

// Upload Image

routes.post('/upload', multer(multerConfig).single('file'), (req: Request, res: Response) => {
    console.log(req.file)
    return res.json(req.file)
})



