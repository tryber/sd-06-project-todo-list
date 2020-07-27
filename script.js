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
    myItem.className = 'itemList';
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
    let myListItem = document.getElementsByClassName('itemList');
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

// function doubleClick(event){
//     let doubleCheck = document.getElementsByClassName('itemList');
    
//     for (let i = 0 ; i < doubleCheck.length ; i += 1){
       
//         if (doubleCheck[i].style.backgroundColor == 'rgb(128, 128, 128)'){
//             console.log(event.target);
//             doubleCheck[i].addEventListener('dblclick',function(){
//             doubleCheck[i].style.className = 'completed';
            
//             });
//         }
//     }               
// }

