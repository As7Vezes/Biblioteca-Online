import express from 'express'
import { routes } from './routes'
import bodyParser from 'body-parser'
import './config/db'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(express.json())

app.listen(3434, () => {
    console.log('Ainda está funcionando Man.')
})