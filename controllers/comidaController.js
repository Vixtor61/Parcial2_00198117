const mongoose = require('mongoose');
const Comida = require('../models/comida');

const comidaController = {};

comidaController.index = function (req,res,next){
    comida = Comida.find();
    return res.status(200).json(comida)
}
comidaController.create = function (res) {
    
}

module.exports= comidaController;
