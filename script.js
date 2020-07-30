
window.onload = function () {
  /* parte da criação do botão */
  const bottonList = document.getElementById('criar-tarefa');
  /* parte do botão funcionar*/
  bottonList.addEventListener('click', function () {
    const texto = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const listOl = document.createElement('li');
    listOl.innerHTML = texto;
    list.appendChild(listOl);
    /* o que for relacionado a lista ol tem que sair daqui, pois é aqui que é criada */
    /* parte da alteração de cor */
    listOl.addEventListener('click', backColor);
    /* duplo click */
    listOl.addEventListener('dblclick', function () {
      listOl.classList.toggle('completed');
    });
    /* botão apagar tudo */
    const bottonListDelete = document.getElementById('apaga-tudo');
    bottonListDelete.addEventListener('click', deleteList);
    /* botão remover finalizados */
    const bottonRemove = document.getElementById('remover-finalizados');
    bottonRemove.addEventListener('click', removeComplet);
  });
  /* fazendo a parte do reset da imput*/
  function resetTexto() {
    document.querySelector('#texto-tarefa').value = '';
  }
  const text = document.querySelector('#criar-tarefa');
  text.addEventListener('click', resetTexto);
  /* mudando a cor de fundo */
  function backColor() {
    let listOl = document.querySelectorAll('li');
    listOl = event.target;
    const bgColor = document.querySelector('.bgColor');
    if (bgColor) {
      bgColor.classList.remove('bgColor');
    }
    listOl.classList.add('bgColor');
  }
  /* botão apaga tudo */
  function deleteList() {
    const list = document.getElementById('lista-tarefas');
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  /* botão apaga selecionados */
  function removeComplet() {
    const removeText = document.querySelectorAll('.completed');
    for(let i = 0; i <= removeText.length; i += 1){
      removeText[i].remove(removeText[i]);
    }      
  }
};
