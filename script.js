window.onload = function () {
  //evento para criar lista
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    const areaTexto = document.querySelector('#texto-tarefa').value;
    const tagli = document.createElement('li');
    tagli.innerHTML = areaTexto;
    document.querySelector('#lista-tarefas').appendChild(tagli);
  });
  //evento para limpar input
  botao.addEventListener('click', function () {
    document.getElementById('texto-tarefa').value = '';
  });
  oneLineSelection();
  addItembackgroundColor();
  scratch();
  erase();
};

function addItembackgroundColor () {
  const changeColor = document.querySelector('#lista-tarefas');
  changeColor.addEventListener('click', function (event) {
    const backgoundItem = event.target;
    backgoundItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
}

function oneLineSelection () {
  const lineWhite = document.querySelector('#lista-tarefas');
  lineWhite.addEventListener('click', function(event){
    const count = document.querySelector('#lista-tarefas').children;
    const color = document.getElementsByTagName('li');
    //tirar duvida do index do for
    for(index = 0; index < count.length; index += 1){
      color[index].style.backgroundColor = 'white';
    }
  });
}

function scratch () {
  const eventSelect = document.querySelector('#lista-tarefas');
  eventSelect.addEventListener('dblclick', function (event) {
    let scratchItem = event.target;
    scratchItem.classList.add('completed');  
  });
}

function erase () {
  const eventSelect = document.querySelector('#lista-tarefas');
  eventSelect.addEventListener('dblclick', function (event) {
    let eraseItem = event.target;
    eraseItem.classList.remove('completed');
  });

}