const express = require('express')
const consign = require('consign')

server = express()

server.set('porta', 3011)

consign({cwd: 'api'})
    .include('model')
    .then('controllers')
    .then('routes')
    .into(server)

module.exports = server