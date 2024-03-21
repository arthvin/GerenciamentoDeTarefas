import { Schema, model } from 'mongoose'

const usuarioSchema = new Schema({
    title: String,
    author: String,
    ISBN: String,
    pageNumber: Number
}, {
    timestamps: true
})

export default model('Usuarios', usuarioSchema)
