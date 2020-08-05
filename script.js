const btn = document.getElementById('criar-tarefa');
const listOl = document.getElementById('lista-tarefas');

btn.addEventListener('click', function() {
  const lista = document.getElementById("texto-tarefa").value;
  const listaLi = document.createElement('li');
  listaLi.classList.add('conteudo');
  listaLi.id = 'task';
  listaLi.textContent = lista;
  document.getElementById('lista-tarefas').appendChild(listaLi);
  document.getElementById('texto-tarefa').value = '';
  if(listaLi) {
        listaLi.addEventListener('click', function(event) {
          const old = document.getElementsByClassName('selected')[0];
          const select = event.target;
          if (old) {
            old.classList.remove('selected');
            select.classList.add('selected');
            } else {
              select.classList.add('selected');
          }
      });
      listaLi.addEventListener('dblclick', function(event) {
        console.log('click duplo!!');
            const double = event.target;
        if(double.classList.contains('completed')) {
            double.classList.remove('completed');
          } else {
              double.classList.add('completed');
        }
        });
    }
});

  let btnClearAll = document.createElement('button');
  btnClearAll.id = 'apaga-tudo';
  //btnClearAll.textContent = 'Limpar Lista.';
  let divControle = document.getElementById('controller');
  divControle.appendChild(btnClearAll);
  let btnClearDone = document.createElement('button');
  //.textContent = 'limpar lista';
  btnClearDone.id = 'remover-finalizados';
  divControle.appendChild(btnClearDone);
  let clickClearAll = document.getElementById('apaga-tudo');
  clickClearAll.addEventListener('click', function() {
  document.querySelector('#lista-tarefas').innerHTML = '';
  });
  btnClearDone.addEventListener('click', function() {
    const listLis = document.querySelectorAll('li');
    for (let i = 0; i < listLis.length; i += 1) {
      if (listLis[i].classList[1] === 'completed') {
        document.querySelector('#lista-tarefas').removeChild(listLis[i]);
      } else if(listLis[i].classList[2] === 'completed') {
        document.querySelector('#lista-tarefas').removeChild(listLis[i]);
    }
  }
});
