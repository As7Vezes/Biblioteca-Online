import express from 'express'
import { routes } from './routes'
import bodyParser from 'body-parser'
import './config/db'

const app = express()

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(express.json())

app.listen(3434, () => {
    console.log('ainda funcionando')
})