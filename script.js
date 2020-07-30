let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

function insertTask() {
  let lista = document.querySelector('#texto-tarefa').value;
  const task = document.createElement('li');
  task.className = 'item';
  task.innerHTML = lista;
  list.appendChild(task);

  const cleanInput = document.getElementById('texto-tarefa').value = "";
}
button.addEventListener ('click', insertTask);

list.addEventListener ('click', function(event) {
  const oldDiv = document.querySelector('.selected');  
  if (oldDiv !== null) {
    oldDiv.classList.remove('selected');
  }
  const item = event.target; // quem recebe o click
  item.classList.add('selected');
  console.log(item);
});

list.addEventListener ('dblclick', function(event){
  const completed = event.target;
  if (completed.classList.contains('completed')) {
    completed.classList.remove('completed');
  } else {
    completed.classList.add('completed');
  }
})

let cleanUp = document.querySelector('#apaga-tudo');

cleanUp.addEventListener ('click', function(){
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    list.lastChild.remove();
  }
})

