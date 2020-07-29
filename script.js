function getInputValue(){
  let listBuilder = document.getElementById('lista-tarefas');
  let inputVal = document.getElementById("texto-tarefa");  
  let listElement = document.createElement('li');
  listElement.innerText = inputVal.value;
  inputVal.value = '';
  listBuilder.appendChild(listElement);
};
