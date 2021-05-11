import Evento from '../database/evento.model'

class ControllerEvento{

 async  get(res, req){
        const evento = await Evento.findAll()
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

export default new ControllerEvento();