const{Router}= require("express");
const{
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosDELETE
} = require("../controllers/usuarios");

const router=Router();

//localhots:3001/usuarios/

router.get("/",usuariosGET);
router.post("/",usuariosPOST);
router.put("/",usuariosPUT);
router.delete("/",usuariosDELETE); 


module.exports=router;