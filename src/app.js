import express from 'express'

const app = express()

app.use(express.json()) //para que seja interpretado oq chega via post ou put em json p consegui manipular e armazenar
//app.use para conseguir adicionar
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id:2, "titulo": "O hobbit"}
] 

app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node");
})

app.get("/livros", (req, res)=>{
    res.status(200).json(livros) //a resposta vai ser um json
})

app.get("/livros/:id", (req, res)=>{ // :id para indicar que esse parametro vai chegar depois
    let index = buscaLivro(req.params.id)
    res.json(livros[index])// o default é status 200
})

app.post("/livros", (req, res)=>{
    livros.push(req.body) //vai adicionar o corpo da requisicao nos livros
    res.status(201).send("o livro foi cadastrado com sucesso") //201 ok, criado
})
// no put vem parametros no URI e no corpo da requisição
app.put("/livros/:id", (req, res)=>{ // :id para indicar que esse parametro vai chegar depois
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo 
    res.status(200).json(livros)// o default é status 200
})

app.delete("/livros/:id", (req, res)=>{ //o mesmo que req.params.id
    let {id} = req.params   //atribuição via desetruturação -- atribuir a outra variavel valor retirado de array ou objeto(como a requisicao)
    let index = buscaLivro(id)  
    livros.splice(index,1)
    res.json(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex((livro) => livro.id == id) //pede uma funcao para comparar oq é aquele elemento
} //para cada item na funcao vai chamar de livro e ver se bate com o id inserido

export default app //vai exportar tudo que tem aqui para outros