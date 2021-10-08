const models = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetbyId,
    autoresAtivoInativo
}

function autoresMenu(req, res){
    res.send('Rota menu de autores encontrada')
    console.log('Rota menu de autores encontrada')
}

function autoresGetAll(req, res){
    //res.send('Rota listagem encontrada')
    console.log('Acessando listagem de Autores {MODEL}')
    models.getAllAutores(function (err, resposta){
        console.log('Retornando da {MODEL}')

        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}

function autoresGetbyId(req, res){
    //res.send('Rota listagem encontrada')
    const id = req.params.codigo
    console.log('Acessando listagem de Autores {MODEL}')
    models.getByIdAutores(id, function (err, resposta){
        console.log('Retornando da {MODEL}')

        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}

function autoresAtivoInativo(req, res){
    const id = req.params.codigo
    console.log('Acessando listagem de Autores {MODEL}')

    models.getByIdAutores(id, function (err, resposta){
        console.log('Retornando da {MODEL}')

        let p_ativo = resposta[0].aut_ativoinativo

        if(err){
            throw err
        }else{
            if(p_ativo == 'A'){
                p_ativo = 'I'
            }else{
                p_ativo = 'A'
            }
        }

        models.ativarInativar(id, p_ativo, function(err, result){
            if(err){
                throw err
            }
        })

    })
}

