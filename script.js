//Botão Adicionar
let buttonAdd = document.createElement('button');
buttonAdd.id = 'botao-adcionar';
let labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton)
document.querySelector('.entrada-dados').appendChild(buttonAdd);
buttonAdd.addEventListener('click', generateItemList)

//Cria a lista ordenada
let taskList = document.createElement('ol');
taskList.id='lista-tarefas'
document.querySelector('.lista-tarefas').appendChild(taskList);

function generateItemList() {
    //let cores = ['vermelho', 'verde', 'azul', 'amarelo', 'preto']
    let task = document.querySelector('#texto-tarefa').value
    console.log(task)
    itemList = document.createElement('li')
    itemList.appendChild(document.createTextNode(task))
    taskList.appendChild(itemList)
};

