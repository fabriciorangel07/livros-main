const models = require('../models/livrosModels.js')

module.exports = {
    livrosMenu,
    livrosGetAll
}

function livrosMenu(req, res){
    console.log('Rota menu livros encontrado')
}


function livrosGetAll(req, res){
    
    console.log('Acessando listagem de Livros {MODEL}')

    models.getAlllivros(function (err, resposta){
        console.log('Retornando da {MODEL}')

        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}