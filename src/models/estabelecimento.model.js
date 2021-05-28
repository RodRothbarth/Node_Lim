import Sequelize, { Model } from 'sequelize';

class Estabelecimento extends Model{
    static init(sequelize){
        super.init({
            "idestabelecimento": {type: Sequelize.INTEGER, primaryKey: true},
            "razsocial": Sequelize.STRING,
            "cnpj": Sequelize.STRING,
            "logradouro": Sequelize.STRING,
            "numero": Sequelize.BIGINT,
            "bairro": Sequelize.STRING,
            "cep": Sequelize.STRING,
            "cidade": Sequelize.STRING,
            "pontodereferencia": Sequelize.STRING,
            "generobar": Sequelize.STRING,
            "latitude": Sequelize.DECIMAL,
            "longitude": Sequelize.DECIMAL,
            "avalestabelecimento": Sequelize.DECIMAL,
            "uf": Sequelize.STRING
        }, {sequelize, timestamps: false, freezeTableName: true})
        this.removeAttribute("id");
        return this
    }

//     static associate(model){
//         this.hasMany(model.Evento, {
//             foreignKey:"idevento",
//            targetKey:"idevento"
//         });
//     } 
}

export default Estabelecimento;