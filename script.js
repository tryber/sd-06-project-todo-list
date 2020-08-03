window.onload = () => {

    removeSelectedItem();
    cleanList();
    saveTask();
    loadTask();

}


const initialState = [];

const addNewTodo = (i) => {

    let todoAdd = document.querySelector('#texto-tarefa').value;

    initialState.push({
        todo: todoAdd
    });

    let ul = document.querySelector('#lista-tarefas');
    let node = document.createElement('LI');
    let textNode = document.createTextNode(initialState[i].todo);
    node.className = "todoLi";
    node.appendChild(textNode);
    ul.appendChild(node);


    node.addEventListener('click', () => {
        let oldSelectedItem = document.querySelector('.selected');
        node.classList.add("selected");

        if (oldSelectedItem) {
            oldSelectedItem.classList.remove('selected');
        }
    });

    node.addEventListener('dblclick', () => {
        if (node.classList.contains('completed')) {
            node.classList.remove('completed');
        } else {

            node.classList.add('completed');
        }
    })

    clearFieldInput();

}
const upTodo = () => {
    initialState.sort((a, b) => {

    });
}



let buttonAddTodo = document.querySelector('#criar-tarefa');
let i = 0;

buttonAddTodo.addEventListener('click', () => {
    addNewTodo(i);
    i += 1;
});

let moverCima = document.querySelector('#mover-cima');

moverCima.addEventListener('click', () => {
    upTodo();
})

let clearFieldInput = () => {
    document.getElementById('texto-tarefa').value = '';
}



let removeSelectedItem = () => {

    let removeButton = document.getElementById("remover-selecionado");

    removeButton.addEventListener("click", () => {
        let selected = document.querySelector('.selected');
        if (selected) {
            selected.remove();
        }
    })

}
let cleanList = () => {

    let cleanButton = document.getElementById("apaga-tudo");

    cleanButton.addEventListener("click", () => {
        let allTodos = document.querySelectorAll('.todoLi');
        if (allTodos) {
            for (let index = 0; index < allTodos.length; index++) {
                allTodos[index].remove();
            }
        }
    })

}



let saveTask = () => {

    let saveTaskButton = document.getElementById("salvar-tarefas");
    saveTaskButton.addEventListener("click", () => {

        let List = document.querySelector("#lista-tarefas");

        localStorage.setItem("List", List.innerHTML);




    })

}

let loadTask = () => {


    let List = document.querySelector("#lista-tarefas");
    List.innerHTML = localStorage.getItem("List");

}

// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem("firsname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"