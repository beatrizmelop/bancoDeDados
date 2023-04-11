import Tarefa from "../model/Tarefa.js"
import { bdTarefas } from "../infra/db.js";

class tarefaController {

    static getTarefa( app ) {
        //rota para o recurso tarefa
        app.get('/Tarefa', (req, res) => {
            res.send('Rota ativada com GET e NODEMON')
         })

        app.post('/Tarefa', (req, res) => {
            const {titulo, descricao, status, data} = req.body
            const tarefaAInserir = new Tarefa (titulo, descricao, status, data)
            bdTarefas.push(tarefaAInserir)
            console.log(titulo, descricao, status, data)
            res.send("ROTA COM POST")
         });
    }
    static listar
}

export default tarefaController;