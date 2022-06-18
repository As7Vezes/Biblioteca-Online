import mongoose from 'mongoose'

const dbConfig = 'mongodb+srv://user:user@cluster0.dz3fg.mongodb.net/produtos'

export const connection = mongoose.connect(dbConfig)