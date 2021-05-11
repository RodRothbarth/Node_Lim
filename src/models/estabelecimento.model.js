import Sequelize, { Model } from 'sequelize';

class Estabelecimento extends Model{
    static init(sequelize){
        super.init({
            "idestabelecimento": {type: Sequelize.SMALLINT, primarykey: true},
            "razao_social": Sequelize.STRING,
            "cnpj": Sequelize.STRING,
            "logradouro": Sequelize.STRING,
            "numero": Sequelize.BIGINT,
            "bairro": Sequelize.STRING,
            "cep": Sequelize.STRING,
            "cidade": Sequelize.STRING,
            "ponto_de_referencia": Sequelize.STRING,
            "genero_bar": Sequelize.STRING,
            "latitude": Sequelize.DECIMAL,
            "longitude": Sequelize.DECIMAL,
            "avaliacao_estabelecimento": Sequelize.DECIMAL,
        }, {sequelize, modelName: 'Estabelecimento', timestamps: false})
        this.removeAttribute("id");
        return this
    }
}

export default Estabelecimento;