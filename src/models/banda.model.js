import Sequelize, { Model } from 'sequelize';


class Banda extends Model{
    static init(sequelize){
        super.init({
            "idbanda": { type: Sequelize.INTEGER, primaryKey: true},
            "nomebanda": Sequelize.STRING,
            "cpfcnpj": Sequelize.STRING,
            "cidade": Sequelize.STRING,
            "integrantes": Sequelize.STRING,
            "generobanda": Sequelize.STRING,
            "uf": Sequelize.STRING,
            "avalbanda": Sequelize.DECIMAL,
        }, {sequelize, modelName:"banda", tableName:'banda', timestamps: false, freezeTableName: true})
        this.removeAttribute("id");
        return this
    }
    // static associate(model){
    //     this.hasMany(model.Evento, {
    //         foreignKey:"idevento",
    //         targetKey:"idevento"
    //     });
    // } 
}

export default Banda;