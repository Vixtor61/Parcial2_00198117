const mongoose = require('mongoose');
const Comida = require('../models/comida');

const comidaController = {};

comidaController.index = function (req,res,next){
    
    comida = Comida.find({}).then(comida=>{
        res.send(comida);
        return res.status(200)
    });
    
   
    
   // console.log(comida);
 //   res.send(comida);
    
}
comidaController.create = function (req,res,next) {
  //  console.log(req);
    /*
    let comida = new Comida({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio
    })
    */
   console.log(req.body);
   console.log("asds");
   
   
    let comida = new Comida({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio
    })
    //console.log(comida);

    comida.save(function (err) {
        if (err) {
            console.log("bad");
            return res.status(400).json({err:err});            
            
        }
        else{
            return res.status(200).json(comida);
        }
           
    })
    
}
comidaController.delete = function (req,res,next) {
    //  console.log(req);
      /*
      let comida = new Comida({
          nombre: req.body.nombre,
          tipo: req.body.tipo,
          precio: req.body.precio
      })
      */
     console.log(req.params.id);
     
     comida = Comida.findById(req.params.id)
     
     
     
     
      Comida.findByIdAndRemove(req.params.id,function (err) {
        if (err) return res.status(400).json({err:err});
        else return res.status(200).json({message: "sads"});   
        // deleted at most one tank document
      });
      
      
  }
  comidaController.modify = function (req,res,next) {
    //  console.log(req);
      /*
      let comida = new Comida({
          nombre: req.body.nombre,
          tipo: req.body.tipo,
          precio: req.body.precio
      })
      */
     console.log(req.params.id);
     
     
     
      Comida.findByIdAndRemove(req.params.id,function (err) {
        if (err) return res.status(400).json({err:err});
        else return res.status(200).json(comida);   
        // deleted at most one tank document
      });
      
      
  } 
module.exports= comidaController;
