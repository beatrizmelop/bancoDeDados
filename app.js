import express from 'express';
import tarefaController from './src/controllers/tarefa-controller.js';
import UsauarioController from './src/controllers/usuario-controller.js';

const app = express();
const port = 3000;


tarefaController.getTarefa (app)
UsauarioController.getUsauarioController (app)



app.listen(`${port}`, () =>
console.log(`Servidor iniciado na porta ${port}`)
);


/*
app.get('/', (req, res) =>
res.send('Rota ativada com GET e recurso Página principal: Valores de Página principal devem ser retornados')
);

app.get('/tarefas', (req, res) =>
res.send('Rota ativada com GET e recurso Tarefas: Valores de Tarefas devem ser retornados')
);

app.get('/teste', (req, res) =>
res.send('Hello World')
);

app.get('/pessoas', (req, res) =>
res.send('Rota ativada com GET e recurso Pessoas: Valores de Pessoas devem ser retornados')
);

app.get('/diadasemana', (req, res) =>
res.send('Rota ativada com GET e recurso Dia da Semana: Valores de Dia da Semana devem ser retornados')
); */
