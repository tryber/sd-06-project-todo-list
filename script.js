// 1let cor = 'white';
window.onload = function () {

 /* parte da criação do botão */
  const bottonList = document.getElementById('criar-tarefa');
  
 /* parte do botão funcionar*/ 
 bottonList.addEventListener('click', function (){
    let texto = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const listOl = document.createElement('li');
    listOl.innerHTML = texto;
    list.appendChild(listOl);
   
   
    /* parte da alteração de cor */
    listOl.addEventListener('click',function(){
     let textList = document.getElementsByTagName("li");
    for(let i = 0; i < textList.length; i += 1) {
            textList[i].classList.remove("bgColor")
        }
        listOl.classList.add("bgColor")
        }
    );
   
  
   //duplo click//
   listOl.addEventListener('dblclick', function() {
    listOl.classList.toggle('completed');
    })
   
  
  });
 
 
  /* fazendo a parte do reset da imput*/
  function resetTexto () {
    document.querySelector('#texto-tarefa').value = '';
  }
 const text = document.querySelector('#criar-tarefa');
 text.addEventListener('click', resetTexto);
 
}
  
  

 