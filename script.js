function criaLista() {
  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  document.body.appendChild(lista);
}

criaLista();
