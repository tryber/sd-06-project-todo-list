const inputElement = document.querySelector('#texto-tarefa');
const createButton = document.querySelector('#criar-tarefa');
const deleteAllButton = document.querySelector('#apaga-tudo');
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

deleteAllButton.addEventListener('click', () => {
  while (elementOl.firstChild) {
    elementOl.removeChild(elementOl.lastChild);
    tasks.pop();
  }
});
