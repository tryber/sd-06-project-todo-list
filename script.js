let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

function insertTask() {
  let task = document.querySelector('#texto-tarefa').value;
  const btn = document.createElement('li');
  // btn.className = 'item';
  btn.innerHTML = task;
  list.appendChild(btn);

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

