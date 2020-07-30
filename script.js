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
    console.log(oldDiv);
    if (oldDiv !== null){
      oldDiv.classList.remove('selected');
    }

    item = event.target; //quem recebe o click
    item.classList.add('selected') 
    console.log(item);
 



});
