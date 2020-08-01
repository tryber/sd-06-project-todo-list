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
           }
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
/*function change(event) {
    let old = document.getElementsByClassName('selected');
    let secondclick = event.target;
    old.classList.remove('selected');
    secondclick.classList.add('selected');
};
*/


