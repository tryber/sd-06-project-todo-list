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

taskList.addEventListener('click', function(e){
  changeCollorOnSelect(e.target);
})
