var button = document.querySelector('#criar-tarefa');
var list = document.querySelector('#lista-tarefas')

button.addEventListener('click', insertTask);

function insertTask() {
    let task =  document.querySelector('#texto-tarefa').value;
    let btn = document.createElement('li');
    // btn.className = 'item';
    btn.innerHTML = task;
    list.appendChild(btn);

    let cleanInput = document.getElementById("texto-tarefa").value = "";
}

list.addEventListener('click', function(event) {
    let oldDiv = document.querySelector('.selected');  
    if (oldDiv !== null){
      oldDiv.classList.remove('selected');
    }

    let item = event.target; //quem recebe o click
    item.classList.add('selected') 
    console.log(item);
});

list.addEventListener('dblclick', function(event){
  let completed = event.target;
  
  if(completed.classList.contains('completed')) {
    completed.classList.remove('completed');
    console.log(completed);
  } else {
    completed.classList.add('completed');
    console.log(completed);
  }
})

