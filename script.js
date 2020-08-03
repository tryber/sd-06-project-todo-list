window.onload = loadList();

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

document.getElementById('remover-selecionado').addEventListener('click', function(){
  document.querySelector('.selected').remove();
})

function findIndex(itemToMoveUp){
  let itemListCheck = document.querySelectorAll('li');
  for(i = 0; i < itemListCheck.length; i += 1){
    if(itemToMoveUp === itemListCheck[i].innerHTML){
      return i;
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', function(){
  if(document.querySelector('.selected') !== null){
  let itemToMoveUp = document.querySelector('.selected').innerHTML;
  let indexSelected = findIndex(itemToMoveUp);
  if(indexSelected > 0){
  let previousItem = document.querySelectorAll('li')[indexSelected-1].innerHTML;
  document.querySelectorAll('li')[indexSelected-1].innerHTML = itemToMoveUp;
  document.querySelectorAll('li')[indexSelected].innerHTML = previousItem;
  document.querySelectorAll('li')[indexSelected-1].classList.add('selected');
  document.querySelectorAll('li')[indexSelected].classList.remove('selected');
  document.querySelector('.selected').style.backgroundColor = 'rgb(128, 128, 128)';
  document.querySelectorAll('li')[indexSelected].style.backgroundColor = "";
  if(document.querySelectorAll('li')[indexSelected].classList.contains("completed") && document.querySelectorAll('li')[indexSelected-1].classList.contains("completed") == false){
    document.querySelectorAll('li')[indexSelected-1].classList.add('completed');
    document.querySelectorAll('li')[indexSelected].classList.remove('completed');
    } else if(document.querySelectorAll('li')[indexSelected].classList.contains("completed")== false && document.querySelectorAll('li')[indexSelected-1].classList.contains("completed")){
      document.querySelectorAll('li')[indexSelected].classList.add('completed');
      document.querySelectorAll('li')[indexSelected-1].classList.remove('completed');
    }
  }} 
}) 

document.getElementById('mover-baixo').addEventListener('click', function(){
  if(document.querySelector('.selected') !== null){
  let itemToMoveUp = document.querySelector('.selected').innerHTML;
  let indexSelected = findIndex(itemToMoveUp);
    if(indexSelected < document.querySelectorAll('li').length-1){
    let previousItem = document.querySelectorAll('li')[indexSelected+1].innerHTML;
    document.querySelectorAll('li')[indexSelected+1].innerHTML = itemToMoveUp;
    document.querySelectorAll('li')[indexSelected].innerHTML = previousItem;
    document.querySelectorAll('li')[indexSelected+1].classList.add('selected');
    document.querySelectorAll('li')[indexSelected].classList.remove('selected');
    document.querySelector('.selected').style.backgroundColor = 'rgb(128, 128, 128)';
    document.querySelectorAll('li')[indexSelected].style.backgroundColor = "";
    if(document.querySelectorAll('li')[indexSelected].classList.contains("completed") && document.querySelectorAll('li')[indexSelected+1].classList.contains("completed") == false){
    document.querySelectorAll('li')[indexSelected+1].classList.add('completed');
    document.querySelectorAll('li')[indexSelected].classList.remove('completed');
    } else if(document.querySelectorAll('li')[indexSelected].classList.contains("completed")== false && document.querySelectorAll('li')[indexSelected+1].classList.contains("completed")){
      document.querySelectorAll('li')[indexSelected].classList.add('completed');
      document.querySelectorAll('li')[indexSelected+1].classList.remove('completed');
    }
  }}  
}) 

document.getElementById("salvar-tarefas").addEventListener('click', function(){
  let list = document.querySelector('#lista-tarefas');
  localStorage.setItem('list', list.innerHTML);
})

function loadList(){
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('list');
  addClickChangeColor();
  addRiskOnDblClick();
}
