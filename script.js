let oList = document.getElementById('lista-tarefas');
document.getElementById("criar-tarefa").addEventListener('click', function(){
  inputText = document.getElementById("texto-tarefa").value;
  let liTag = document.createElement('li');
  liTag.innerHTML = inputText;
  oList.appendChild(liTag);
  document.getElementById("texto-tarefa").value = null;
  addClickChangeColor()
})

function addClickChangeColor(){
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
    item.style.backgroundColor = 'rgb(128, 128, 128)';
  })
})
}