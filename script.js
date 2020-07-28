const buttonText =  document.querySelector('#criar-tarefa');
const listjobs =  document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
console.log("aaaaaa");
buttonText.addEventListener('click', function() {
   const aux = document.createElement('li');
   aux.innerHTML = textInput.value;
   listjobs.appendChild(aux);
   //Até aqui enviou os li's ao ol como filhos
   let optionJob = document.querySelectorAll('li');
   optionJob.forEach(item => {
      item.addEventListener('click', () => {
          optionJob.forEach(item => {
              item.classList.remove('selected');
          }) //a partir de cada click é enviado o conteudo presente em option (um array) para a lista e add e remove quando pedir
          item.classList.add('selected');
      })
  })
})

lista.addEventListener('dblclick', (e) => {
   const dbclk = e.target;
   if(!dbclk.classList.contains('completed')){
       dbclk.className = 'completed';
   } else {
       dbclk.classList -= 'completed';
   }
}) 