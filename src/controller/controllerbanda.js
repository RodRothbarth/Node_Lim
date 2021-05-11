import Banda from '../models/banda.model'

class ControllerBanda{

    async  get(res, req){
        return await Banda
        .findAll({ })
        .then((banda) => res.status(200).json(banda))
        .catch((error)=>{res.status(400).json(error)})     
    };

async post(res, req){
        return await Banda
        .create({})
        .then((banda) => res.status(200).json(banda))
        .catch((error)=>{res.status(400).json(error)})
    };

async put(res, req){
    return await Banda
    .findByPk(req.params.id)
    .then( banda => {
        if(!banda){return res.status(404).send({msg: "banda não encontrado"})
    }
        return banda
        .update({})
        .then((banda) => res.status(200).json(banda))
        .catch((error)=>{res.status(400).json(error)})
    })
    .catch((error)=>{res.status(400).json(error)});
};

async delete(res, req){
    return await Banda
    .findByPk(req.params.id)
    .then( banda => {
        if(!banda){return res.status(404).send({msg: "banda não encontrado"});
    }
        return banda
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
        })
        .catch((error)=>{res.status(400).json(error)});
        };
};

export default new ControllerBanda();