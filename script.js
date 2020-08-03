// Variáveis

const buttonNewTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

buttonNewTask.addEventListener('click', function(){
  const textList = inputText.value;
  const itenList = document.createElement('li')
  itenList.innerText = textList;

  taskList.appendChild(itenList);
})

function changeCollorOnSelect(select) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}

taskList.addEventListener('click', function(event) {
  changeCollorOnSelect(event.target);
})

function completTask(complete) {
  if (complete.classList.contains('completed')) {
    complete.classList.remove('completed');
  } else {
    complete.className += ' completed';
  }
}

taskList.addEventListener('dblclick', function(event) {
  completTask(event.target);
});
