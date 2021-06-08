import Estabelecimento from '../models/estabelecimento.model';

class ControllerEstabelecimento{

    async  get(res, req){
        try { const estabelecimento = await Estabelecimento
            .findAll();
            return  res.json(estabelecimento)
            }catch(error){
                console.error(error)
            }
            return res.json({mensagem:'nao deu pra pegá ux Lugá, Rapazi'})     
    };

    async post(res, req){
        try { const estabelecimento = await Estabelecimento
        .findAll()
        return  res.status(200).json(estabelecimento)
        }catch(error){res.status(400).json(error)}     
    };

    async put(res, req){
        return await Estabelecimento
        .findOne(req.params.idestabelecimento)
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
        .findOne(req.params.idestabelecimento)
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