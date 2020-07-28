const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
addButton.addEventListener('click', function () {
  const tarefas = document.getElementById('tarefas')
  var list = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(list);
  list.innerText = input.value;
  list.className = 'tarefa'
  input.value = ''
  list.addEventListener('click', function (){
    list.style.background = 'rgb(128, 128, 128)'; 
    if(list.style.background === 'rgb(128, 128, 128)') {
      list.addEventListener('click', function (){
        list.style.background = 'white'
      })
    }
  })
  list.addEventListener('dblclick', function () {
    list.classList.add('completed')
    if (list.classList.contains('completed')) {
      list.addEventListener('dblclick', function(){
        list.classList.remove('completed')
      })
    }
  })
})







