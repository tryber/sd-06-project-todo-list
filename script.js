
const boxText = document.querySelector('#texto-tarefa');
const liSelected = document.querySelector("#lista-tarefas");
const buttonNewTask = document.querySelector("#criar-tarefa");
const buttonClear = document.querySelector("#apaga-tudo");
const listItem = document.getElementById('lista-tarefas');

function newTask() {
  const novoItem = document.createElement("li");
  novoItem.innerHTML = boxText.value;
  document.getElementById("lista-tarefas").appendChild(novoItem);
  document.getElementById('texto-tarefa').value = "";
}

buttonNewTask.addEventListener("click", newTask);

function clearAll() {
  console.log("apagando");
  document.getElementById('lista-tarefas').innerHTML = ''
}

buttonClear.addEventListener("click", clearAll);

// function selectLi(event) {
//    console.log("chamou?")
//    document.querySelector('selected').classList.remove('selected');
//    event.target.classList.add('selected');
// }

// liSelected.addEventListener('click', selectLi)

function selecionaItem(event) {
  const selectedItem = event.target;
  const taskList = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].classList.contains('selected')) {
      taskList[i].classList.remove('selected');
    }
  }
  selectedItem.classList.add('selected');
}
listItem.addEventListener('click', selecionaItem)

