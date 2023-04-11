import Tarefa from "../model/Tarefa.js"
import Usuario from "../model/Usuario.js"
const bdUsuario = []
const bdTarefas = []

const usuario = new Usuario ("Beatriz Melo", "beatrizmelop@gmail.com", "jhdsfusgu234235")
bdUsuario.push(usuario)

const tarefa = new Tarefa("titulo da tarefa", "descrição da tarefa", "incompleto", new Date ())
bdTarefas.push(tarefa)

export { bdTarefas, bdUsuario}
