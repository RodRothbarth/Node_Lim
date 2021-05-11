import Sequelize from 'sequelize';
import Estabelecimento from'../models/estabelecimento.model';
import Banda from '../models/banda.model'
import Evento from '../models/evento.model';
import Usuario from '../models/usuario.model';

class DataBase{

    constructor(){
        this.postgres()
    }

    postgres(){
        this.connection = new Sequelize({"dialect":"pg-hstore", "host":"localhost", "port": "5432", "username":"rodrigo", "password":"123456", "database":"dbbarletapp"})
        console.log(this.connection)
        Estabelecimento.init(this.connection);
        Banda.init(this.connection);
        Evento.init(this.connection);
        Evento.join
        Usuario.init(this.connection);

    }

}

export default new DataBase(); 