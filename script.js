addEventListener('click', function insertText() {
    const text = document.getElementById('texto-tarefa');
    document.getElementById('lista-tarefas').innerHTML = text.value;
  });