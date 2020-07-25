var lista = [];
const btnIncluir = document.getElementById('criar-tarefa');
const btnApagarTudo = document.getElementById('apaga-tudo');
/* *********************************************** */
function pegaTexto() {
  let texto = document.getElementById('texto-tarefa');
  return texto.value;
}
/* *********************************************** */
function criarArray() {
  let texto = pegaTexto();
  if (texto !== '') {
    lista.push(texto);
    console.log(lista);
  } else {
    alert('Campo tarefa precisa ser preenchido!!!');
  }
}
/* *********************************************** */
function limparTabela() {
  let itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(itens[i]);
  }
}
/* *********************************************** */
function criarTabela() {
  for (let i = 0; i < lista.length; i += 1) {
    let tarefa = document.createElement('li');
    tarefa.innerHTML = lista[i];
    document.getElementById('lista-tarefas').appendChild(tarefa);
  }
}
/* *********************************************** */
function limpaTexto() {
  let tarefa = document.getElementById('texto-tarefa');
  tarefa.value = '';
}
/* *********************************************** */
function clickBtnCriarTarefa() {
  pegaTexto();
  criarArray();
  limparTabela();
  criarTabela();
  limpaTexto();
}
function clickBtnApagarTudo() {
  limparTabela();
  lista = [];
}
/* *********************************************** */
btnIncluir.addEventListener('click', function () {
  clickBtnCriarTarefa();
});
/* *********************************************** */
btnApagarTudo.addEventListener('click', function(){
  clickBtnApagarTudo();
});

