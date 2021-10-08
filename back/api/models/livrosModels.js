
let conexao = require('../../config/conexao.js')

module.exports = {
    getAlllivros
}

function getAlllivros(callback){

    conexao.query('select * from livros', callback)
}