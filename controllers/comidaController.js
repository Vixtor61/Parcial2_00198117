const mongoose = require('mongoose');
const Comida = require('../models/comida');

const comidaController = {};

comidaController.index = function (req,res,next){
    comida = Comida.find();
    return res.status(200).json(comida)
}
comidaController.create = function (req,res,next) {
    let comida = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio
    }
}

module.exports= comidaController;
