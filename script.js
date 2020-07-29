var button = document.querySelector('#criar-tarefa');
var list = document.querySelector('#lista-tarefas')

button.addEventListener('click', insertTask);

function insertTask() {
    let task =  document.querySelector('#texto-tarefa').value;
    let btn = document.createElement('li');
    btn.className = 'item';
    btn.innerHTML = task;
    list.appendChild(btn);

    let cleanInput = document.getElementById("texto-tarefa").value = "";
}

function changeSelected(select){

}

list.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    console.log(event.target);

    if (event.target.className === 'item'){
      event.target.classList.add('selected')
    } else if(event.target.item.className === 'item selected'){

    }
    

});



// function handlePalletItemEvent(event){
//     let oldSelectedDiv = document.querySelector('.selected');
//     let currentSelectedDiv = event.target;
//     let backgroundColor = currentSelectedDiv.style.backgroundColor;
//     console.log(backgroundColor);

//     oldSelectedDiv.classList.remove('selected');
//     currentSelectedDiv.classList.add('selected');
    
//     selectedColor = backgroundColor;     
// }