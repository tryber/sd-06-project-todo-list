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
      item.classList.add('selected');
  })
})
}

function clearBgFromList(){
  document.querySelectorAll('li').forEach(item => {
   item.style.backgroundColor = "";
   item.classList.remove('selected');
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

document.getElementById("remover-finalizados").addEventListener('click', function(){
  document.querySelectorAll('.completed').forEach(item => {
    item.remove();
 })
})

document.getElementById('teste').addEventListener('click', function(){
  for (i = 0; i <= 5; i += 1){
  let liTag = document.createElement('li');
  liTag.innerHTML = 'TESTE';
  oList.appendChild(liTag);
  }
  addClickChangeColor();
  addRiskOnDblClick();
})

document.getElementById('remover-selecionado').addEventListener('click', function(){
  document.querySelector('.selected').remove();
})