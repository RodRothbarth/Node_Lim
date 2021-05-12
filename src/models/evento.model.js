import Sequelize, { Model } from 'sequelize';


class Evento extends Model{
    static init(sequelize){
        super.init({
            "idevento": { type: Sequelize.SMALLINT, primarykey: true},
            "dtevento": Sequelize.DATE,
            "Hora_inicio_evento": Sequelize.DATE,
            "valor_evento": Sequelize.SMALLINT,
            "hora_fim_evento": Sequelize.DATE,
        }, {sequelize, modelName: 'Evento', timestamps: false})
        this.removeAttribute("id");
        return this
    }

    static associate(model){
        this.belongsTo(model.Banda, {
            constraint: false, 
            foreignKey:'idbanda', 
            targetKey:'idbanda'
        });
        this.belongsTo(model.Estabelecimento, {
            constraint: false,
            foreignKey:'idestabelecimento',
            targetKey:'idestabelecimento'
        });
        // this.belongsTo(model.Usuario, {
        //     constraint: false, 
        //     foreignKey:'idusuario', 
        //     targetKey:'idusuario'
        // })
    } 
}

export default Evento;