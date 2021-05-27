const { request, response } = require('express');

const controllGet = (req, res) => {
    res.send({
        body: req.body,
        query: req.query

    })
}

const controllPost = (req, res) => {

    const body = req.body
    res.send({
        req: body,
        query: req.query

    })
}

const controllPut = (req, res) => {
    res.send('Hola a Todos...')
}


const controllPatch = (req, res) => {
    res.send('Hola a Todos...')
}

const controllDelete = (req, res) => {
    res.send('Hola a Todos...')
}

module.exports = {
    controllGet,
    controllPost,
    controllPut,
    controllPatch,
    controllDelete
}