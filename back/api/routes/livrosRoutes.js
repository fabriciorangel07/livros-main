const controller = require('../controllers/livrosControllers.js')

server.get('livros', controller.livrosMenu)

server.get('/livros/listar', controller.livrosGetAll)

