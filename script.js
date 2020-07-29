function getInputValue(){
  let listBuilder = document.getElementById('lista-tarefas');
  let inputVal = document.getElementById("texto-tarefa");  
  let listElement = document.createElement('li');
  listElement.innerText = inputVal.value;
  inputVal.value = '';
  listBuilder.appendChild(listElement);
};

function elementsBackgroundColor(event) {
  let oldSelectedElement = document.querySelector('.selected');
  let currentSelectedElement = event.target;
  currentSelectedElement.classList.add('selected');
  oldSelectedElement.classList.remove('selected');
}