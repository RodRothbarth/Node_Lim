import Banda from '../models/banda.model'

class ControllerBanda{

    async  get(req, res){
        try { const banda = await Banda
            .findAll();
            return  res.json(banda)
            }catch(error){
                console.error(error)
            }
            return res.json({mensagem:'nao deu pra pegá ax Banda'})     
    };

    async post(res, req){
        try { const banda = await Banda
        .create({
            attributes: [avaliacao],
            where:{
                idbanda:req.params.idbanda
            }
        })
        return  res.status(200).json(banda)
        }catch(error){res.status(400).json(error)}     
    };

};

export default new ControllerBanda();