const buttonText =  document.querySelector('#criar-tarefas');
const listjobs =  document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');

function listing() {
    aux = document.createElement('li');
  aux.innerHTML = textInput.value;
  listjobs.appendChild(aux);
  textInput.value="";
  return aux;
}
aux = listing();

 buttonText.addEventListener('click', function() {
    const aux = listing();
    console.log(aux);
    aux.addEventListener('click',() => {
        console.log('vamos la bagaça');
        aux.style.backgroundColor = 'rgb(128, 128, 128)';  
    })
    console.log(aux); 
 })


  