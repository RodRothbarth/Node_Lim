import Banda from '../database/banda.model'

class ControllerBanda{

 async  get(res, req){
        const banda = await Banda.findAll()
        return res.json(banda)
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

export default new ControllerBanda();