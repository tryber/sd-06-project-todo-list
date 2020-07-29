let oList = document.getElementById('lista-tarefas');
document.getElementById("criar-tarefa").addEventListener('click', function(){
  inputText = document.getElementById("texto-tarefa").value;
  let liTag = document.createElement('li');
  liTag.innerHTML = inputText;
  oList.appendChild(liTag);
  document.getElementById("texto-tarefa").value = null;
  addClickChangeColor();
  addClickToRisk();
})

function addClickChangeColor(){
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
      clearBgFromList();
      item.style.backgroundColor = 'rgb(128, 128, 128)';
  })
})
}

function clearBgFromList(){
  document.querySelectorAll('li').forEach(item => {
   item.style.backgroundColor = "";
})
}

function addClickToRisk(){
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('dblclick', event => {
      item.className = "completed";
      item.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  })
})
}