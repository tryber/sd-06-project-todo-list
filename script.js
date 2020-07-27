function initialLoad () {
    localStorage.clear();
    createTask();
    
    //localStorage.isColored = true;
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
console.log(listToDelete)
deleteButton.addEventListener('click',function(){
    while (listToDelete.length > 0){
        document.getElementsByTagName('li')[0].remove();
    }
});