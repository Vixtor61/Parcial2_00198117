const moongose = require('mongoose');
const {Schema} = moongose;
comidaSchema = new Schema({
    nombre: {
        type: "string",
        required: "true"
    },
    tipo: {
        type: "string",
        required: "true"
    },
    precio: {
        type: "string",
        required: "true"
    }

});



module.exports = moongose.model('comida',comidaSchema);