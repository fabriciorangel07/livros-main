const models = require('../models/indexModels.js')

module.exports = {
    index,
}

function index(req, res){
    res.send('Rota raiz encontrada')
    console.log('Rota Raiz encontrada')
}