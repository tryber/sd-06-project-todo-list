
const ol = document.getElementById('lista-tarefas');

addTask = () => {
  event.preventDefault();

  if (document.getElementById('texto-tarefa').value != '') {
    const item = document.getElementById('texto-tarefa');
    const itemId = ol.childElementCount;

    const li = createItemEl(item.value, itemId);
    ol.appendChild(li);
    item.value = '';
  }
}

createItemEl = (itemValue, itemId) => {
  const li = document.createElement('li');
  li.setAttribute('index', itemId);
  li.className = ('task');
  li.appendChild(document.createTextNode(itemValue));
  return li;
}

removeTask = () => {
  if (document.getElementById('lista-tarefas').innerHTML.value != ''){    
    document.querySelectorAll('.task').forEach(e => e.remove());
  }
}
