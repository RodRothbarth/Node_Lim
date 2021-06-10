import Usuario from '../models/usuario.model'

class ControllerUsuario{

    async  get(res, req){
        try { const usuario = await Usuario
        .findOne(req.body.email)
        
        if (usuario && usuario.senha == req.body.senha){
            const perfil = {}
            if(usuario.idbanda){
                perfil.id = id.banda
                perfil.perfil = 'banda'
            }else if(usuario.idestabelecimento){
                perfil.id=idestabelecimento
                perfil.perfil = "estabelecimento"
            }
            return res.json(perfil)
        }else{"deu zica, mazanza!"}
       
        }catch(error){res.json(error)}     
    }; 
};

export default new ControllerUsuario();