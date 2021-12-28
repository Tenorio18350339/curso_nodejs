const { request, response } = require("express");


const usuariosGET = (req=request, res=response)=>{
    res.json({msg:"Hola a todos desde GET"});
};
const usuariosPOST=(req=request, res=response)=>{
    const data = req.body;
    res.status(201).json({msg:"Hola a todos desde POST", data});
};
const usuariosPUT=(req, res)=>{
    const data = req.params;
    res.status(400).json({msg:"Hola a todos desde PUT", data});
};
const usuariosDELETE=(req, res)=>{
    const data = req.query;
    res.status(500).json({msg:"Hola a todos desde DELETE", data});
};

module.exports={usuariosGET,usuariosPOST,usuariosPUT,usuariosDELETE};