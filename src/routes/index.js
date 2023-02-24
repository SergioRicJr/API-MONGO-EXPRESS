import express from 'express'
import livros from './livrosRoutes.js'

// definindo as rotas

const routes = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de Node.js"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes