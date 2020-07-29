let listBackground = document.getElementById('lista-tarefas');

function getInputValue(){
  let listBuilder = document.getElementById('lista-tarefas');
  let inputVal = document.getElementById("texto-tarefa");  
  let listElement = document.createElement('li');
  listElement.innerText = inputVal.value;
  inputVal.value = '';
  listBuilder.appendChild(listElement);
};

listBackground.addEventListener('click', function (event) {
  let oldSelectedElement = document.querySelector('.selected');
  let currentSelectedElement = event.target;
  if(oldSelectedElement) {
    currentSelectedElement.classList.add('selected');
    oldSelectedElement.classList.remove('selected')
  } else {
    currentSelectedElement.classList.add('selected');
  }
});