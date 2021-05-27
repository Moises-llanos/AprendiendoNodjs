const { request, response } = require('express');
const Usuario = require('../models/usuario');



const controllGet = (req, res) => {
    res.send({
        body: req.body,
        query: req.query

    })
}

const controllPost = async(req, res) => {

    const body = req.body
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        usuario,
        nombre: "juam"

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