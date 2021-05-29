import Banda from '../models/banda.model'

class ControllerBanda{

    async  get(res, req){
        try { const banda = await Banda
        .findAll()
        return  res.status(200).json(banda)
        }catch(error){res.status(400).json(error)}     
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