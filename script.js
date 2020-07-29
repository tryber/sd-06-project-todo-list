const ol = document.getElementById('lista-tarefas');

addTask = () => {
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
  li.appendChild(document.createTextNode(itemValue));
  return li;
}
