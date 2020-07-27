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
    myItem.className = 'itemList'
    myItem.innerText = document.getElementById('texto-tarefa').value;
    myList.appendChild(myItem);     
    clearInput();   
    color();
    doubleClick();
});
}

function clearInput () {
    document.getElementById('texto-tarefa').value = null;
}

function color () {
    let saveValue=0;
    let myListItem = document.getElementsByTagName('li');
    for (let i = 0 ; i < myListItem.length ; i += 1){
        myListItem[i].addEventListener('click',function(){
            myListItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
            saveValue=i;
            for (let x = 0 ; x < myListItem.length ; x += 1) {
                if (x != i) {
                    myListItem[x].style.backgroundColor = 'transparent';
                }
           }
        });
    }
}

function doubleClick(){
    let contador1 = 0;
    let contador2 = 0;
    let myItem = document.getElementsByTagName('li');
    for (let i = 0 ; i < myItem.length ; i += 1){
        myItem[i].addEventListener('dblclick',function(){
            if ( myItem[i].className == 'itemList') {
                myItem[i].className = 'completed';   
            } else if ( myItem[i].className == 'completed'){
                myItem[i].className = 'itemList';
            } 
        });
    }
    
}
