import express from 'express';
import ControllerBanda from "./controller/controllerbanda";
import ControllerEvento from "./controller/controllerEvento";
import ControllerUsuario from "./controller/controllerUsuario";
import ControllerEstabelecimento from "./controller/controllerEstabelecimento";

import './database/database'

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("logado na porta " + port)
});

app.get('/banda', ControllerBanda.get);
app.get('/estabelecimento', ControllerEstabelecimento.get);

app.post('avaliacao', ControllerBanda.post)

app.get('/eventos', ControllerEvento.get);
app.get('/estabelecimento/:idlocal/eventos', ControllerEvento.getMeuEvento);
app.put('/evento/:idevento', ControllerEvento.put);
app.post('estabelecimento/:idlocal/evento/:idevento', ControllerEvento.post);
app.delete('/evento/:idevento', ControllerEvento.delete);


app.listen(port, ()=>{
    console.log("logado na porta " + port)
});