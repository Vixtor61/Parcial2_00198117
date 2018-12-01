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
let Comida = moongose.model('comida',comidaSchema);
/*
Comida.save(function (err) {
    if(err) return err    
})
*/

module.exports = Comida