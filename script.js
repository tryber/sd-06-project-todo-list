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

/* Função para alterar a cor do item da lista */
function changeItemColor(event) {
  let allTasks = document.getElementsByTagName('li');
  let itemSelected = event.target;
  for (let index = 0; index < allTasks.length; index += 1) {
    if (itemSelected === allTasks[index] && !(itemSelected.classList.contains('selected'))) {
    allTasks[index].classList.add('selected');
    } else {
      allTasks[index].classList.remove('selected');
    }
  }
}
taskList.addEventListener('click', changeItemColor);

/* Função para riscar os itens completados */
function completedItens (e) {
  let completedItens = e.target;
  if (!(completedItens.classList.contains('completed'))) {
    completedItens.classList.add('completed');

  } else {
    completedItens.classList.remove('completed');
  }
}
taskList.addEventListener('dblclick' , completedItens);

/* Função para remover os itens finalizados */

