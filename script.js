let lista = [];
const btnIncluir = document.getElementById('criar-tarefa');
const btnApagarTudo = document.getElementById('apaga-tudo');
/* *********************************************** */
function pegaTexto() {
  const texto = document.getElementById('texto-tarefa');
  return texto.value;
}
/* *********************************************** */
function criarArray() {
  const texto = pegaTexto();
  if (texto !== '') {
    lista.push(texto);
  } else {
    alert('Campo tarefa precisa ser preenchido!!!');
  }
}
/* *********************************************** */
function limparTabela() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(itens[i]);
  }
}
/* *********************************************** */
function criarTabela() {
  for (let i = 0; i < lista.length; i += 1) {
    const tarefa = document.createElement('li');
    tarefa.innerHTML = lista[i];
    document.getElementById('lista-tarefas').appendChild(tarefa);
  }
}
/* *********************************************** */
function limpaTexto() {
  const tarefa = document.getElementById('texto-tarefa');
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
btnApagarTudo.addEventListener('click', function () {
  clickBtnApagarTudo();
});
