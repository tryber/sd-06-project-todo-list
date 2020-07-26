const inputElement = document.querySelector('#texto-tarefa');
const createButton = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');
const tasks = [];

function createElementLiAndAppendToElementOl(orderedList, value) {
  const elementLi = document.createElement('li');
  elementLi.innerText = value;
  orderedList.appendChild(elementLi);
  return elementLi;
}

createButton.addEventListener('click', () => {
  if (inputElement.value) {
    tasks.push(createElementLiAndAppendToElementOl(elementOl, inputElement.value));
    inputElement.value = '';
  }
});
