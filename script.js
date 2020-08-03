// Variáveis

const buttonNewTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const buttonClean = document.getElementById('apaga-tudo');

buttonNewTask.addEventListener('click', function(){
  const textList = inputText.value;
  const itenList = document.createElement('li')
  itenList.innerText = textList;

  if(textList === '') {
    const span =document.createElement('span');
    span.innerText = 'Digite Titulo para sua tarefa.';
    span.className = 'span';
    document.querySelector('#tarefas').appendChild(span);
  } else {
    taskList.appendChild(itenList);
    inputText.value = '';
  }

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



buttonClean.addEventListener('click', function() {
  let itens = document.getElementsByTagName('li');

  for (let c = 0; c < itens.length; c += 1){
    taskList.removeChild(itens[c]);
  }
})
