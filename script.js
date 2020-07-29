//let cor = 'white';
window.onload = function () {

 /* fazendo a parte da adição de texto pelo botão */
  const botao = document.getElementById('criar-tarefa');
  
  botao.addEventListener('click', function (){
    let texto = document.getElementById('texto-tarefa').value;
    const lista = document.getElementById('lista-tarefas');
    const listaOl = document.createElement('li');
    listaOl.innerHTML = texto;
    lista.appendChild(listaOl);
    listaOl.className = 'bgColor';
  
    /*o que for realicionado ao li tem que ser chamado aqui*/
    // listaOl.style.backgroundColor = 'white';
    document.querySelector('.bgColor').style.backgroundColor = "white";
   let cor = document.querySelector('.bgColor').style.backgroundColor.value;
   
   if (cor!== 'white'){
    listaOl.addEventListener('click',fundoDeCor);
   }
  
   //duplo click//
   listaOl.addEventListener('dblclick', function() {
    listaOl.classList.toggle('completed');
    })
   
  
  });
 
 
  /* fazendo a parte do reset da imput*/
  function resetTexto () {
    document.querySelector('#texto-tarefa').value = '';
  }
 const text = document.querySelector('#criar-tarefa');
 text.addEventListener('click', resetTexto);

 /*alterando a cor de fundo de um lista da lista*/
   function fundoDeCor(){
   let item = event.target;
   //item.style.backgroundColor = 'rgb(128, 128, 128)';
   document.querySelector('.bgColor').style.backgroundColor = 'rgb(128, 128, 128)' ;
   }
  
  
}
 