// const http = require("http") //importação
// const port = 3000  //porta para escutar as requisições, escolher a porta -- da pra criar variiavel q define porta automaticamente
// // instalar nodemon p salvar e atualizar servidor --- -D p nao ir pra producao
// const rotas = {
//     '/': 'Curso de node',
//     '/livros': 'entrei na página de livros', //dando erro na acentuacao 
//     '/autores': 'listagem de autores',
//     '/editora': 'página de editora'
// }

// //sempre q o server receber requisicao essa funcao callback será passada
// const server = http.createServer((req,res)=>{ //função de callback, oq devolver quando chamar o server
//     res.writeHead(200, {"Content-Type": "text=plain"})//define status, 200 ok, e tipo de conteudo 
//     res.end(rotas[req.url]) //end para definir oq mandar para o navegador
//     //definiu as rotas, se tal rota, tal mensagem e passa url como parametro
// })

// server.listen(port, ()=>{ //p rodar servidor na porta e definir callback quando der certo
// console.log(`servidor escutando em http://localhost:${port}`)
// })


import app from "./src/app.js"

const port = process.env.PORT || 3000 //para escolher automaticamente a porta

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})