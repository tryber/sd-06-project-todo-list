function initialLoad () {
   //localStorage.clear();
   createTask();
   saveList();
}
window.onload = initialLoad;

function createTask(){
let addButton = document.querySelector("#criar-tarefa");
addButton.addEventListener('click',function () {
    let myList = document.querySelector("#lista-tarefas");
    let myItem = document.createElement('li');
    myItem.id = "itemListID"
    myItem.className = 'itemList'
        myItem.addEventListener('dblclick',function(){
            switch (myItem.className){
                case 'completed':
                    myItem.className='itemList';
                break;
                case 'itemList':
                    myItem.className='completed';
                break;
            }
        });     
    myItem.innerText = document.getElementById('texto-tarefa').value;
    myList.appendChild(myItem);     
    clearInput();   
    color();
});
}

function clearInput () {
    document.getElementById('texto-tarefa').value = null;
}

function color () {
    let myListItem = document.getElementsByTagName('li');
    for (let i = 0 ; i < myListItem.length ; i += 1){
        myListItem[i].addEventListener('click',function(){
            myListItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
            for (let x = 0 ; x < myListItem.length ; x += 1) {
                if (x != i) {
                    myListItem[x].style.backgroundColor = 'transparent';
                }
           }
        });
    }
}

let deleteButton = document.getElementById('apaga-tudo');
let listToDelete = document.getElementsByTagName('li');
deleteButton.addEventListener('click',function(){
    while (listToDelete.length > 0){
        document.getElementsByTagName('li')[0].remove();
    }
});

let deleteButton2 = document.getElementById('remover-selecionado');
let listToDelete2 = document.getElementsByTagName('li');
deleteButton2.addEventListener('click',function(event){
    for(let i = 0 ; i < listToDelete2.length ; i+=1){
        if(listToDelete2[i].style.backgroundColor === 'rgb(128, 128, 128)'){
        document.getElementsByTagName('li')[i].remove();
        }
    }
});

let moveCima = document.getElementById('mover-cima');
let itemToMove = document.getElementsByTagName('li');
moveCima.addEventListener('click',function(event){
    for(let i = 0 ; i < itemToMove.length ; i+=1){
        if(itemToMove[i].style.backgroundColor === 'rgb(128, 128, 128)'){
        document.getElementsByTagName('li')[i].add;
        }
    }
});

let deleteDoneButton = document.getElementById('remover-finalizados');
let itemsToDelete = document.getElementsByClassName('completed');
deleteDoneButton.addEventListener('click',function(){
    while (itemsToDelete.length > 0){
        document.getElementsByClassName('completed')[0].remove();
    }
});

let saveTasksButton = document.getElementById('salvar-tarefas');
let listToSave = document.getElementsByTagName('li');
saveTasksButton.addEventListener('click',saveTask);

function clearLocalStorage(){
    localStorage.clear();
}
function saveTask(){
    clearLocalStorage();
    for (let i=0 ; i<listToSave.length ; i+=1){
       localStorage.setItem([i],listToSave[i].innerText);
    }
}

function saveList(){
    for(let i = 0 ; i < localStorage.length ; i += 1){
        let myList = document.querySelector("#lista-tarefas");
        let myItem = document.createElement('li');
        myItem.id = "itemListID";
        myItem.className = 'itemList'
        myItem.innerText =  localStorage.getItem(i , localStorage[i]);
        myItem.addEventListener('dblclick',function(){
            switch (myItem.className){
                case 'completed':
                    myItem.className='itemList';
                break;
                case 'itemList':
                    myItem.className='completed';
                break;
            }
        });     
        myList.appendChild(myItem);
        color(); 
    }
}