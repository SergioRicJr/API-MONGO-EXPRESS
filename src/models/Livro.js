import mongoose, { Mongoose } from "mongoose";

// esse arquivo vai ser um schema
// modelo de livro/schema no banco
// define campos, tipo dos dados e se sao obrigatorios com o required
const livroSchema = new mongoose.Schema(
    {
        id: {type:String}, //id é criado automaticamente
        titulo: {type:String, required: true}, 
        autor: {type:String, required: true},
        editora: {type:String, required: true},
        numeroPaginas: {type:Number}
    }
)
// coleção = livros e seguem o schema livroSchema
// criacao de colecao
const livros = mongoose.model('livros', livroSchema)

export default livros

//o campo v: no banco é de versao, caso mude o documento