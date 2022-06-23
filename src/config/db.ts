import mongoose from 'mongoose'

const dbConfig = 'mongodb+srv://user:user@cluster0.6hegt.mongodb.net/biblioteca'

export const connection = mongoose.connect(dbConfig)