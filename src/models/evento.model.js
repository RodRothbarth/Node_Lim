import Sequelize, { Model } from 'sequelize';

class Evento extends Model{
    static init(sequelize){
        super.init({
            "idevento": { type: Sequelize.INTEGER, primaryKey: true},
            "dtevento": Sequelize.DATE,
            "nomedoevento": Sequelize.STRING,
            "hrinicioevento": Sequelize.DATE,
            "valorevento": Sequelize.STRING,
            "hrfimevento": Sequelize.DATE
        }, {sequelize, modelName:"evento", tableName:'evento', timestamps: false, freezeTableName: true})
        this.removeAttribute("id");
        return this
    }


    // static associate(model){

    //     this.belongsTo(model.Banda, {
    //         foreignKey: "idbanda",
    //         targetKey:"idbanda"
    //     });

    //     this.belongsTo(model.Estabelecimento, {
    //         foreignKey:"idestabelecimento",
    //         targetKey: "idestabelecimento"
    //     });
    // } 
}

export default Evento;