window.onload = () => {
    const initialState = [];

    const addNewTodo = (i) => {

        let todoAdd = document.querySelector('#texto-tarefa').value;

        initialState.push({
            todo: todoAdd
        });

        let ul = document.querySelector('#todoList');
        let node = document.createElement('LI');
        let textNode = document.createTextNode(initialState[i].todo);
        node.className = "todoLi";
        node.appendChild(textNode);
        ul.appendChild(node);

        node.addEventListener('click', () => {
            node.className = "todoLi selected";
        });

        node.addEventListener('dblclick', () => {
            node.className = "todoLi done";
        })

    }
    const upTodo = () => {
        initialState.sort((a, b) => {

        });
    }



    let buttonAddTodo = document.querySelector('#newTodoButton');
    let i = 0;

    buttonAddTodo.addEventListener('click', () => {
        addNewTodo(i);
        i += 1;
    });

    let upLiButton = document.querySelector('#upLiButton');

    upLiButton.addEventListener('click', () => {
        upTodo();
    })


}