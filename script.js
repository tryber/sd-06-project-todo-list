window.onload = function () {
  
 /* fazendo a parte da adição de texto pelo botão */
  const botao = document.getElementById('criar-tarefa');
  
  botao.addEventListener('click', function (){
    let texto = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const listaOl = document.createElement('li');
    listaOl.innerHTML = texto.value;
    lista.appendChild(listaOl);
  })
}
