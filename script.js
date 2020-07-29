window.onload = function () {

 /* fazendo a parte da adição de texto pelo botão */
  const botao = document.getElementById('criar-tarefa');
  
  botao.addEventListener('click', function (){
    let texto = document.getElementById('texto-tarefa').value;
    const lista = document.getElementById('lista-tarefas');
    const listaOl = document.createElement('li');
    listaOl.innerHTML = texto;
    lista.appendChild(listaOl);
  
    /*o que for realicionado ao li tem que ser chamado aqui*/
    listaOl.style.backgroundColor = 'white';
    listaOl.addEventListener('click',fundoDeCor);

  });
 
  /* fazendo a parte do reset da imput*/
  function resetTexto () {
    document.querySelector('#texto-tarefa').value = '';
  }
 const text = document.querySelector('#criar-tarefa');
 text.addEventListener('click', resetTexto);

 /*alterando a cor de fundo de um lista da lista*/
  //const bgCor = document.querySelector('li');
  //bgCor.addEventListener('click',fundoDeCor);

  function fundoDeCor(){
   let item = event.target;
   item.style.backgroundColor = "rgb(128, 128, 128)";
  }
 

  

}
