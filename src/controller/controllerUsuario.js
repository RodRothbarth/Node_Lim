import Usuario from '../models/usuario.model'

class ControllerUsuario{

    async  get(res, req){
        try { const usuario = await Usuario
        .findAll()
        return  res.status(200).json(usuario)
        }catch(error){res.status(400).json(error)}     
    };

    async post(res, req){
        try { const usuario = await Usuario
        .findAll()
        return  res.status(200).json(usuario)
        }catch(error){res.status(400).json(error)}     
    };

    async put(res, req){
        return await Usuario
        .findOne(req.params.idusuario)
        .then( usuario => {
            if(!usuario){return res.status(404).send({msg: "usuario não encontrado"})
        }
            return usuario
            .update({})
            .then((usuario) => res.status(200).json(usuario))
            .catch((error)=>{res.status(400).json(error)})
        })
        .catch((error)=>{res.status(400).json(error)});
    };

    async delete(res, req){
        return await Usuario
        .findOne(req.params.idusuario)
        .then( usuario => {
            if(!usuario){return res.status(404).send({msg: "usuario não encontrado"});
        }
            return usuario
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
            })
            .catch((error)=>{res.status(400).json(error)});
            };
};

export default new ControllerUsuario();