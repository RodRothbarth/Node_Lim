import express from 'express';
import ControllerBanda from "./controller/controllerbanda";
import ControllerEvento from "./controller/controllerEvento";
import ControllerEstabelecimento from "./controller/controllerEstabelecimento";
import ControllerUsuario from "./controller/controllerUsuario"

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
app.post('/usuario', ControllerUsuario.post);


app.get('/usuario', ControllerUsuario.get);
app.post('/evento', ControllerEvento.post);
app.post('/estabelecimento/:idlocal/evento', ControllerEvento.post); //este é o correto
app.post('/avaliacao/:idlocal', ControllerBanda.post)


app.delete('/estabelecimento/:idlocal/eventos/:idevento', ControllerEvento.delete);

app.get('/estabelecimento/:idlocal/eventos', ControllerEvento.getMeuEvento);
app.put('/estabelecimento/:idlocal/eventos/:idevento', ControllerEvento.put);

// app.post('estabelecimento/:idlocal/evento/:idevento', ControllerEvento.post);

app.listen(port, ()=>{
    console.log("logado na porta " + port)
});