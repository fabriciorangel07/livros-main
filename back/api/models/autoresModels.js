
let conexao = require('../../config/conexao.js')

module.exports = {
    getAllAutores,
    autoresGetbyId,
    ativarInativar
}

function getAllAutores(callback){
    conexao.query('select * from autores', callback);
}

function autoresGetbyId(id, callback){
    conexao.query('select * from autores where aut_codigo = ' + id, callback);
}

function ativarInativar(id, ativo, callback){
    const m_sql = "update autores set aut_ativoinativo = '" + ativo + "'where aut_codigo = '" + id + "'"

    conexao.query(m_sql, callback);
}