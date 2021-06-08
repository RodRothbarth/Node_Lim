// import Banda from '../models/banda.model'
import Evento from '../models/evento.model'
// import Estabelecimento from '../models/estabelecimento.model'

class ControllerEvento{

    async  get(req, res){
        try { const evento = await Evento
        .findAll();
        return  res.json(evento)
        }catch(error){
            console.error(error)
        }
        return res.json({mensagem:'nao deu pra pegar o evento'})      
    };

    async  getMeuEvento(req, res){
        try { 
            const evento = await Evento
        .findAll({
            attributes: ['nomedoevento', 'dtevento', 'hrinicioevento', 'hrfimevento', 'valorevento'],
            where: {
                idestabelecimento:{
                    [Op.iLike]: 'parametros do local'
                }
            }
        });
        console.log(evento)
        return  res.json(evento)
        }catch(error){
            console.error(error)
        }
        return res.json({mensagem:'nao deu'})      
    };

    async post(req, res){
        try { const evento = await Evento
        .create({nomedoevento, dtevento, hrinicioevento, hrfimevento, valorevento })
        return  res.json(evento)
        }catch(error){
            console.error(error)
        }
        return res.json({mensagem:'nao deu pa fazer o eventu, KIRIDU!'})      
    }; 

    async put(req, res){
        return await Evento
        .findOne(req.params.idevento)
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

    async delete(req, res){
        return await Evento
        .findOne(req.params.idevento)
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
