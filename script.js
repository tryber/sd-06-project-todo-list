window.onload = function () {
  //evento para criar lista
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    const areaTexto = document.querySelector('#texto-tarefa').value;
    const tagli = document.createElement('li');
    tagli.innerHTML = areaTexto;
    tagli.className = areaTexto;
    document.querySelector('#lista-tarefas').appendChild(tagli);
  });
  //evento para limpar input
  botao.addEventListener('click', function () {
    document.getElementById('texto-tarefa').value = '';
  });
  // addSelectedClass();
  // oneItemSelected();
  parafor();
  addItembackgroundColor();
};

// adding selected class to element
// function addSelectedClass () {
//   const itemLista = document.querySelector('#lista-tarefas');
//   itemLista.addEventListener('click', function(event){
//     const nome = event.target.className;
//     document.querySelector('.'+nome).classList.add('selected');
//   });
// }

// function oneItemSelected () {
//   const itemSelected = document.querySelector('#lista-tarefas');
//   itemSelected.addEventListener('click', function (event) {
//     const currentItem = document.querySelector('.selected');
//     const newItem = event.target;
//     currentItem.classList.remove('selected');
//     console.log(currentItem);
//     newItem.classList.add('selected');
//     console.log(newItem);
//   });
// }

function addItembackgroundColor () {
  const changeColor = document.querySelector('#lista-tarefas');
  changeColor.addEventListener('click', function (event) {
    const backgoundItem = event.target;
    backgoundItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
}

function parafor () {
  let variavel = document.querySelector('#lista-tarefas');
  variavel.addEventListener('click', function(event){
    let cont = document.querySelector('#lista-tarefas').children;
    let cor = document.getElementsByTagName('li');
    for(i = 0; i < cont.length; i++){
      cor[i].style.backgroundColor = 'white';
    }
  })
}

