import express from 'express';
import ControllerBanda from "./controller/controllerbanda";
import ControllerEvento from "./controller/controllerEvento";
import ControllerEstabelecimento from "./controller/controllerEstabelecimento";

import './database/database'

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("logado na porta " + port)
});

app.get('/bandas', ControllerBanda.get);
app.get('/estabelecimentos', ControllerEstabelecimento.get);
app.get('/eventos', ControllerEvento.get);
app.post('/evento', ControllerEvento.post);

app.post('/avaliacao', ControllerBanda.post)
app.get('/avaliacao', ControllerBanda.get)

app.get('/estabelecimento/:idlocal/eventos', ControllerEvento.getMeuEvento);
app.put('/evento/:idevento', ControllerEvento.put);
// app.post('estabelecimento/:idlocal/evento/:idevento', ControllerEvento.post);
app.delete('/evento/:idevento', ControllerEvento.delete);

app.listen(port, ()=>{
    console.log("logado na porta " + port)
});