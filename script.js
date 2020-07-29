const buttonText =  document.querySelector('#criar-tarefa');
const listjobs =  document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');


function listing() {
    const aux = document.createElement('li');
   aux.innerHTML = textInput.value;
   listjobs.appendChild(aux);
   textInput.value="";
   //return aux;
}
console.log(aux);
buttonText.addEventListener('click', function () {
   console.log(aux);
   
   aux.addEventListener('click',() => {
       console.log('vamos la bagaça');
       aux.style.backgroundColor = 'rgb(128, 128, 128)';
        
   })
   console.log(aux); 
})

  function blkclk() {  
      console.log(aux);
      aux.addEventListener('dblclick', (e) => {
        const dbclk = e.target;
        if(!dbclk.classList.contains('completed')){
            dbclk.className = 'completed';
        }else {
            dbclk.classList -= 'completed';
        }       
     })  
  }

 