window.onload = function () {
  
 /* fazendo a parte da adição de texto pelo botão */
  const botao = document.getElementById('criar-tarefa');
  
  botao.addEventListener('click', function (){
    let texto = document.getElementById('texto-tarefa').value;
    const lista = document.getElementById('lista-tarefas');
    const listaOl = document.createElement('li');
    listaOl.innerHTML = texto;
    lista.appendChild(listaOl);
  });
 
  /* fazendo a parte do reset da imput*/
  function resetTexto () {
   document.querySelector('#texto-tarefa').value = '';
 }
 const text = document.querySelector('#criar-tarefa');
 text.addEventListener('click', resetTexto);

}
