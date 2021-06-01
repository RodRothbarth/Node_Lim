import Sequelize from 'sequelize';
import Estabelecimento from'../models/estabelecimento.model';
import Banda from '../models/banda.model'
import Evento from '../models/evento.model';
import Usuario from '../models/usuario.model';

const models = [Evento, Banda, Estabelecimento, Usuario]

class DataBase{

    constructor(){
        this.postgres()
    }

    postgres(){
        this.connection = new Sequelize({"dialect": "postgres", "host": "localhost", "port": '5432', "username": "postgres", "password": "alfa0611", 'database':'dbLetItMusic', define: { timestamp: false, underscored: false, underscoredAll: false}})
        
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))

        this.connection.authenticate().then(()=> console.log("connected to database")).catch(err=> console.log("Error: " +err))
    }

}

export default new DataBase(); 
