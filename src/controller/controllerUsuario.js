import Usuario from '../schema/usuario.model'

class ControllerUsuario{

 async  get(res, req){
        const usuario = await Usuario.findAll()
        return res.json(lugar)
    };

    post(res, req){
        return res.json(req.body)
    };

    put(res, req){
        return res.json(req.body)
    };

    delete(res, req){
        return res.json(req.body)
    };
};

export default new ControllerUsuario();