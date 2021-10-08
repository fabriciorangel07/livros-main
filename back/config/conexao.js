
const mysql = require('mysql2')
const database = 'dados212n' // colocar o nome dado ao banco de dados que criei


// instanciar objeto de acesso ao banco de dados

const conexao = mysql.createConnection({
    user: 'root',
    password: '', //verificar a senha de conexão
    host: 'localhost',
    port: '3306'
})

conexao.connect((err) =>{
    if(err){
        console.log('Erro ao conectar com MySQL')
        return
    }
    conexao.query('USE ' + database)
    console.log('\nConexão estabilizada com sucesso')
})

module.exports = conexao