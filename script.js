const buttonText =  document.querySelector('#criar-tarefa');
const listjobs =  document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
let aux;

function listing() {
    const aux = document.createElement('li');
   aux.innerHTML = textInput.value;
   listjobs.appendChild(aux);
   textInput.value="";
   return aux;
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

 //Até aqui enviou os li's ao ol como filhos
   //let optionJob = document.querySelectorAll('li');

  /*optionJob.forEach(item => {
      item.addEventListener('click', () => {
          optionJob.forEach(item => {
              item.classList.remove('selected');
              
          }) //a partir de cada click é enviado o conteudo presente em option (um array) para a lista e add e remove quando pedir
          item.classList.add('selected');
      })
  })*/


 