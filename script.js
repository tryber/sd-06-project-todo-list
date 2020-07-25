/* Função para adicionar uma nova tarefa */
const task = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
function createTask() {
  if (task.value.length !== 0) { /* Verifica se o input não está vazio */
    const li = document.createElement('li'); /* Acessa a lista do html */
    taskList.appendChild(li); /* Cria um filho na lista passando o conteúdo recebido no input */
    li.innerText = task.value; /* Adiciona tarefa na lista */
    task.value = ''; /* Limpa o input */
  }
}
btnCreateTask.addEventListener('click', createTask);

/* Função para apagar tudo */
const btnDelete = document.getElementById('apaga-tudo');
function clear() {
  taskList.innerText = '';
}
btnDelete.addEventListener('click', clear);
