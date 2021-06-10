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
                    [Op.iLike]: 'idlocal = 1'
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
        try { 
            const {idevento, nomedoevento, dtevento, hrinicioevento, hrfimevento, valorevento} = req.body
            const evento = await Evento
        .create({idevento, nomedoevento, dtevento, hrinicioevento, hrfimevento, valorevento })
        return  res.json(evento)
        }catch(error){
            console.error(error)
        }
        return res.json({mensagem:'nao deu pa fazer o eventu, KIRIDU!'} + error)      
    }; 

    async put(req, res){
    const {idestabelecimento, idevento} = req.params
    const {nomedoevento, dtevento, hrinicioevento, hrfimevento, valorevento} = req.body
        
        try { const evento = await Evento
            .findOneAndUpdate({idestabelecimento, idevento},  {nomedoevento, dtevento, hrinicioevento, hrfimevento, valorevento })
            return  res.json(evento)
            }catch(error){
                console.error(error)
            }
            return res.json({mensagem:'nao deu pra apagar o evento'})      
        };

    async delete(req, res){

        try { const evento = await Evento
            .deleteOne(req.params);
            return  res.json(evento)
            }catch(error){
                console.error(error)
            }
            return res.json({mensagem:'nao deu pra apagar o evento'})      
        };
    };

export default new ControllerEvento();
