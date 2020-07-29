let oList = document.getElementById('lista-tarefas');
document.getElementById("criar-tarefa").addEventListener('click', function(){
  inputText = document.getElementById("texto-tarefa").value;
  let liTag = document.createElement('li');
  liTag.innerHTML = inputText;
  oList.appendChild(liTag);
  document.getElementById("texto-tarefa").value = null;
  addClickChangeColor();
  addRiskOnDblClick();
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

function addRiskOnDblClick(){
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('dblclick', event => {
      item.classList.add("completed");
      removeRiskOnDblClick();
  })
})
}

function removeRiskOnDblClick(){
  document.querySelectorAll('.completed').forEach(item => {
    item.addEventListener('dblclick', event => {
      item.classList.remove('completed');
      addRiskOnDblClick();
  })
})
}

document.getElementById("apaga-tudo").addEventListener('click', function(){
  document.getElementById('lista-tarefas').innerHTML = '';
})