window.onload = () => {

    // removeSelectedItem();

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
        if (node.classList.contains('done')) {
            node.classList.remove('done');
        } else {

            node.classList.add('done');
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



// let removeSelectedItem = () => {

//     let removeSelected = document.getElementById("#remover-selecionado");

//     removeSelected.addEventListener("click", () => {

//         let selected = document.


//     })


// }