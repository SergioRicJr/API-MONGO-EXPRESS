import livros from '../models/Livro.js'

//documento para criar funcoes para pagina de rotas
// métodos no tipo estatico para não precisar instanciar?
class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{ //callback caso haja erro e casa hala sucesso
            res.status(200).json(livros)
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body) //criacao de um novo livro baseado no corpo da req
        //livro.save para salvar no banco de dados

        livro.save((err)=>{
            // function callback caso haja erro
            // err.message é um atributo que mostra o erro especifico do save no banco de dados
            if(err){ // as mensagens estao sendo enviadas em json por isso em chaves
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else { //se n tiver erro
                res.status(201).send(livro.toJSON())
            }
        }) 
    }
}

export default LivroController