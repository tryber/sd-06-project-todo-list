window.onload = () => {

    removeSelectedItem();
    cleanList()

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