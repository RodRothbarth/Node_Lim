import Estabelecimento from '../models/estabelecimento.model';

class ControllerEstabelecimento{

    async  get(res, req){
            return await Estabelecimento
            .findAll({ })
            .then((estabelecimento) => res.status(200).json(estabelecimento))
            .catch((error)=>{res.status(400).json(error)})     
        };

    async post(res, req){
            return await Estabelecimento
            .create({})
            .then((estabelecimento) => res.status(200).json(estabelecimento))
            .catch((error)=>{res.status(400).json(error)})
        };

    async put(res, req){
        return await Estabelecimento
        .findByPk(req.params.id)
        .then( estabelecimento => {
            if(!estabelecimento){return res.status(404).send({msg: "Estabelecimento não encontrado"})
        }
            return estabelecimento
            .update({})
            .then((estabelecimento) => res.status(200).json(estabelecimento))
            .catch((error)=>{res.status(400).json(error)})
        })
        .catch((error)=>{res.status(400).json(error)});
    };

    async delete(res, req){
        return await Estabelecimento
        .findByPk(req.params.id)
        .then( estabelecimento => {
            if(!estabelecimento){return res.status(404).send({msg: "Estabelecimento não encontrado"});
        }
            return estabelecimento
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
            })
            .catch((error)=>{res.status(400).json(error)});
            };
    };

export default new ControllerEstabelecimento();