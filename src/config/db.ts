import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbConfig = process.env.REACT_APP_DB_CONFIG_DATA

export const connection = mongoose.connect(dbConfig)