window.onload = function () {
  const btnIncluir = document.getElementById('criar-tarefa');
  const btnApagarTudo = document.getElementById('apaga-tudo');
  btnIncluir.addEventListener('click', clickBtnCriarTarefa);
  btnApagarTudo.addEventListener('click', clickBtnApagarTudo);
}
/* *********************************************** */
function pegaTexto() {
  const texto = document.getElementById('texto-tarefa');
  return texto.value;
}
/* *********************************************** */
function limparTabela() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(itens[i]);
  }
}
/* *********************************************** */
function criarTarefa() {
  const texto = pegaTexto();
  if (texto !== '') {
    criarTabela();
  } else {
    alert('Campo tarefa precisa ser preenchido!!!');
  }
}
/* *********************************************** */
function criarTabela() {
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(item);
  item.style.cursor = 'pointer';
}
/* *********************************************** */
function limpaTexto() {
  const tarefa = document.getElementById('texto-tarefa');
  tarefa.value = '';
  tarefa.focus();
}
/* *********************************************** */
function desmarcaSelecionado() {
  let item = document.querySelectorAll('li')
  for (let i = 0; i < item.length; i += 1) {
    item[i].style.backgroundColor = 'transparent';
  }
}
/* *********************************************** */
function atribuirFuncaoDbClick() {
  var item = document.querySelectorAll('li')
  for (let i = 0; i < item.length; i += 1) {
    item[i].addEventListener('click', function (e) {
      if (item[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        item[i].style.backgroundColor = 'transparent';
      } else {
        item[i].style.backgroundColor = 'rgb(128,128,128)';
      }
    });
  }
}
/* *********************************************** */
function clickBtnCriarTarefa() {
  criarTarefa();
  limpaTexto();
  atribuirFuncaoDbClick();
}
function clickBtnApagarTudo() {
  limparTabela();
}
