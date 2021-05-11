import Estabelecimento from '../schema/estabelecimento.model';

class ControllerEstabelecimento{

async  get(res, req){
        const estabelecimento = await Estabelecimento.findAll()
        return console.log(estabelecimento)
       
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

export default new ControllerEstabelecimento();