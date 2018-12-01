const mongoose = require('mongoose');
const comida = require('./keys')
module.exports = mongoose.connect(comida.URI, {
    useNewUrlParser: true,
    useCreateIndex: true,

}).then(message => console.log("nice")
);