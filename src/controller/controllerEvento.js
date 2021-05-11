import Evento from '../models/evento.model'

class ControllerEvento{

    async  get(res, req){
        return await Evento
        .findAll({ })
        .then((evento) => res.status(200).json(evento))
        .catch((error)=>{res.status(400).json(error)})     
    };

async post(res, req){
        return await Evento
        .create({})
        .then((evento) => res.status(200).json(evento))
        .catch((error)=>{res.status(400).json(error)})
    };

async put(res, req){
    return await Evento
    .findByPk(req.params.id)
    .then( evento => {
        if(!evento){return res.status(404).send({msg: "evento não encontrado"})
    }
        return evento
        .update({})
        .then((evento) => res.status(200).json(evento))
        .catch((error)=>{res.status(400).json(error)})
    })
    .catch((error)=>{res.status(400).json(error)});
};

async delete(res, req){
    return await Evento
    .findByPk(req.params.id)
    .then( evento => {
        if(!evento){return res.status(404).send({msg: "evento não encontrado"});
    }
        return evento
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
        })
        .catch((error)=>{res.status(400).json(error)});
        };
};

export default new ControllerEvento();