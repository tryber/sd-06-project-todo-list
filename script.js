let btn = document.getElementById("criar-tarefa");
let ol = document.getElementById('lista-tarefas');
// Adicionando tarefas na lista ordenada.
btn.addEventListener('click', function() {
    let lista = document.getElementById("texto-tarefa").value;
    let li = document.createElement('li');
    li.classList.add('conteudo');
    li.id = 'task'
    li.textContent = lista;
    document.getElementById("lista-tarefas").appendChild(li);
    document.getElementById('texto-tarefa').value = '';
    if(li){
        li.addEventListener('click',function(event){
           let old = document.getElementsByClassName('selected')[0];
           let select = event.target;
           if(old) {
            old.classList.remove('selected');
            select.classList.add('selected');
           } else {
            select.classList.add('selected');
           }// adicionar para alterar quest]oes do complete para apagar..
        });
        li.addEventListener('dblclick',function(event) {
         console.log('click duplo!!');
            let double = event.target;
         if(double.classList.contains('completed')) {
            double.classList.remove('completed');
         } else {
             double.classList.add('completed');
         }

        });

    }
});
//Adicionando botões de controle.
let btnClearAll = document.createElement('button');
btnClearAll.id = 'apaga-tudo';//btn apagar lista de tarefas.
btnClearAll.textContent = 'Limpar Lista.';
let divControle = document.getElementById('controller');
divControle.appendChild(btnClearAll);
let btnClearDone = document.createElement('button');
btnClearDone.textContent = 'Limpar Concluídas';
btnClearDone.id = 'remover-finalizados';
divControle.appendChild(btnClearDone);
//funcionalidade btnClearAll - apaga lista de tarefas.
let clickClearAll = document.getElementById('apaga-tudo');
clickClearAll.addEventListener('click',function(){
    document.querySelector('#lista-tarefas').innerHTML = '';
});
//funcionalidade tarefas concluidas.

btnClearDone.addEventListener('click',function(){
    const listLis = document.querySelectorAll('li');
  for (let i = 0; i < listLis.length; i += 1) {
    if (listLis[i].classList[1] === 'completed') {
      document.querySelector('#lista-tarefas').removeChild(listLis[i]);
    }else if(listLis[i].classList[2] === 'completed') {
      document.querySelector('#lista-tarefas').removeChild(listLis[i]);
    }
  }
});