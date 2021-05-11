import Sequelize from 'sequelize';
import Estabelecimento from'../schema/estabelecimento.model';
import Banda from '../schema/banda.model'
import Evento from '../schema/evento.model';
import Usuario from '../schema/usuario.model';

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
        Evento.join(this.connection.models)
        Usuario.init(this.connection);
    }

}

export default new DataBase(); 