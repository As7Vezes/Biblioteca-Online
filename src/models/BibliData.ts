import mongoose from "mongoose";

const BibliDataSchema = new mongoose.Schema({
    title: {
        type: String
    },
    editora: {
        type: String
    },
    autor: {
        type: String
    },
    image: {
        type: String
    }
})

export default mongoose.model('biblioteca', BibliDataSchema)