let ElementOl =  document.createElement('ol');
ElementOl.id = "lista-tarefas";
document.body.appendChild(ElementOl);
console.log(ElementOl);

let button = document.getElementById("criar-tarefa");
let activity = document.getElementById("texto-tarefa");



button.addEventListener("click", function() {

    let elementLi = document.createElement('Li');   

    elementLi.innerHTML = activity.value;
    ElementOl.appendChild(elementLi);

    activity.value = "";
});

ElementOl.addEventListener('click', function(event) {
    let listItem  = event.target;
    listItem.style.backgroundColor = "gray";
});