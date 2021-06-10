import Sequelize, { Model } from 'sequelize';


class Usuario extends Model{
    static init(sequelize){
        super.init({
            "ideusuario": {type: Sequelize.SMALLINT, autoIncrement: true},
            "email": Sequelize.STRING,
            "senha": Sequelize.STRING,
        }, {sequelize, modelName: 'Usuario',timestamps: false})
        this.removeAttribute("id");
        return this
    } 
}

export default Usuario;