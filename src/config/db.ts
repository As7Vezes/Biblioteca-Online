import mongoose from 'mongoose'

const dbConfig = process.env.DB_CONFIG

export const connection = mongoose.connect(dbConfig)