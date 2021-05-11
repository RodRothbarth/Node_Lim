import Sequelize, { Model } from 'sequelize';


class Evento extends Model{
    static init(sequelize){
        super.init({
            "idevento": Sequelize.SMALLINT,
            "idbanda": Sequelize.SMALLINT,
            "idestabelecimento": Sequelize.SMALLINT,
            "dtevento": Sequelize.DATE,
            "Hora_inicio_evento": Sequelize.DATE,
            "valor_evento": Sequelize.SMALLINT,
            "hora_fim_evento": Sequelize.DATE,
        }, {sequelize, modelName: 'Evento', timestamps: false})
        this.removeAttribute("id");
        return this
    }

    static join(models){
        this.belongsTo(models.Banda, {foreignKey:'idbanda'});
        this.belongsTo(models.Estabelecimento, {foreignKey:'idestabelecimento'});
    } 
}

export default Evento;