function newWork() {
  let caixaTarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let novoItem = document.createElement('li');
  lista.appendChild(novoItem);
  let box = document.getElementsByTagName('li');
  let lastItem = box[box.length - 1];
  lastItem.classList.add('not-completed');
  lastItem.setAttribute('ondblclick', 'complete()');
  lastItem.setAttribute('onclick', 'select()');
  lastItem.innerText = caixaTarefa;
  document.getElementById('texto-tarefa').value = '';
}
