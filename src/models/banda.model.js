import Sequelize, { Model } from 'sequelize';


class Banda extends Model{
    static init(sequelize){
        super.init({
            "idbanda": Sequelize.SMALLINT,
            "nome_banda": Sequelize.STRING,
            "cpf_cnpj": Sequelize.STRING,
            "cidade": Sequelize.STRING,
            "integrantes": Sequelize.STRING,
            "genero_banda": Sequelize.STRING,
            "avaliacao_estabelecimento": Sequelize.DECIMAL,
        }, {sequelize, modelName: 'Banda',timestamps: false})
        this.removeAttribute("id");
        return this
    }
}

export default Banda;