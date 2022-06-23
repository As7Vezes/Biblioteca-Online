import mongoose from "mongoose";

const BibliDataSchema = new mongoose.Schema({
    title: String,
    editora: String,
    autores: String
})

export default mongoose.model('biblioteca', BibliDataSchema)