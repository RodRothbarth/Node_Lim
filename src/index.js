import express from 'express';
import ControllerBanda from "./controller/controllerbanda";
import ControllerUsuario from "./controller/controllerUsuario";
import ControllerEvento from "./controller/controllerEvento";
import ControllerEstabelecimento from "./controller/controllerEstabelecimento";

import './database/database'

const app = express();
const port = 3333;

app.use(express.json());


app.get('/banda', ControllerBanda.get);
app.put('/banda', ControllerBanda.put);
app.delete('/banda', ControllerBanda.delete);
app.post('/banda', ControllerBanda.post);

app.get('/usuario', ControllerUsuario.get);
app.put('/usuario', ControllerUsuario.put);
app.delete('/usuario', ControllerUsuario.delete);
app.post('/usuario', ControllerUsuario.post);

app.get('/eventos', ControllerEvento.get);
app.put('/eventos', ControllerEvento.put);
app.delete('/eventos', ControllerEvento.delete);
app.post('/eventos', ControllerEvento.post);

app.get('/estabelecimento', ControllerEstabelecimento.get);
app.put('/estabelecimento', ControllerEstabelecimento.put);
app.delete('/estabelecimento', ControllerEstabelecimento.delete);
app.post('/estabelecimento', ControllerEstabelecimento.post);

app.listen(port, ()=>{
    console.log("logado na porta " + port)
});