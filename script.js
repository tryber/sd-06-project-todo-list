const toDo = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', () => {
  const itemToDo = document.createElement('li');
  itemToDo.innerHTML = toDo.value;
  list.appendChild(itemToDo);
  toDo.value = null;
  const itemList = document.querySelectorAll('li');
  itemList.forEach((item) => {
    item.addEventListener('click', () => {
      itemList.forEach((item) => {
        item.classList.remove('selected');
      });
      item.classList.add('selected');
    });
  });
});

list.addEventListener('dblclick', (e) => {
  const completed = e.target;
  if (!completed.classList.contains('completed')) {
    completed.className = 'completed';
  } else {
    completed.classList -= 'completed';
  }
});