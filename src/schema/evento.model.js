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
        }, {sequelize, timestamps: false})
        this.removeAttribute("id");
        return this
    }

    static join(model){
        this.belongsTo(model.Banda, {foreignKey:idbanda});
        this.belongsTo(model.Estabelecimento, {foreignKey:idestabelecimento});
    } 
}

export default Evento;