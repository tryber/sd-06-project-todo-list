function okAudio() {
  document.getElementById('ok-audio').play();
}

function errorAudio() {
  document.getElementById('error-audio').play();
}

function completedTask() {
  const thisCompletedTask = this;
  const thisCompletedTaskClass = this.classList;
  for (let i = 0; i < thisCompletedTaskClass.length; i += 1) {
    if (thisCompletedTaskClass[i] === 'completed') {
      thisCompletedTask.classList.remove('completed');
      return;
    }
  }
  thisCompletedTask.classList.add('completed');
}

function selectedTask() {
  const otherTasks = document.querySelectorAll('.selected');
  for (let i = 0; i < otherTasks.length; i += 1) {
    const otherTask = otherTasks[i];
    otherTask.classList.remove('selected');
  }
  const thisSelectedTask = this;
  thisSelectedTask.classList.add('selected');
}

function incluirTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const textoContainer = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (textoTarefa !== '') {
    okAudio();
    li.innerText = textoTarefa;
    li.addEventListener('click', selectedTask);
    li.addEventListener('dblclick', completedTask);
    li.classList.add('task');
    textoContainer.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    errorAudio();
    alert('Campo tarefa esta vazio');
  }
}

function criarTarefa() {
  const criarButton = document.getElementById('criar-tarefa');
  criarButton.addEventListener('click', incluirTarefa);
  const addEnter = document.getElementById('texto-tarefa');
  addEnter.addEventListener('keypress', (keyDown) => {
    if (keyDown.key === 'Enter') {
      incluirTarefa();
    }
  });
}

function apagaTudo() {
  const taskContaneir = document.getElementById('lista-tarefas');
  while (taskContaneir.firstChild) {
    taskContaneir.removeChild(taskContaneir.lastChild);
  }
}

function apagaSelecionado() {
  const taskContaneir = document.getElementById('lista-tarefas');
  const selected = document.getElementsByClassName('selected')[0];
  taskContaneir.removeChild(selected);
}

function botaoApagarTudo() {
  const apagaTudoButton = document.getElementById('apaga-tudo');
  apagaTudoButton.addEventListener('click', apagaTudo);
}

function botaoExcluirTarefa() {
  const apagaTarefaButton = document.getElementById('remover-selecionado');
  apagaTarefaButton.addEventListener('click', apagaSelecionado);
}

function botaoExcluirRiscados() {
  const taskContaneir = document.getElementById('lista-tarefas');
  const btnRemoverRiscados = document.querySelector("#remover-finalizados");
  btnRemoverRiscados.addEventListener('click', () => {
    const tarefasRiscadas = document.querySelectorAll(".completed");
    console.log('click')
    console.log(tarefasRiscadas);
    for (let i = 0; i < tarefasRiscadas.length; i += 1) {
      taskContaneir.removeChild(tarefasRiscadas[i]);
    }
  })

}

function botaoMoverBaixo() {
  const buttonDw = document.querySelector("#mover-baixo");
  const tasklist = document.querySelector("#lista-tarefas");
  buttonDw.addEventListener('click', () => {
    const tasks = tasklist.childNodes;
    for (let i = tasks.length - 2; i >= 0; i -= 1) {
      if (tasks[i].classList.contains('selected')) {
        tasklist.insertBefore(tasks[i + 1], tasks[i]);
      }
    }
  });
}

function botaoMoverCima() {
  const buttonUp = document.querySelector("#mover-cima");
  const tasklist = document.querySelector("#lista-tarefas");
  buttonUp.addEventListener('click', () => {
    const tasks = tasklist.childNodes;
    for (let i = 1; i < tasks.length; i += 1) {
      if (tasks[i].classList.contains('selected')) {
        tasklist.insertBefore(tasks[i], tasks[i - 1]);
      }
    }
  });
}

// btnUp.addEventListener('click', function () {
//   const lista = list.childNodes;
//   for (let i = 1; i < lista.length; i += 1) {
//     if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
//       list.insertBefore(lista[i], lista[i - 1]);
//     }
//   }
// });






window.onload = () => {
  criarTarefa();
  botaoApagarTudo();
  botaoExcluirTarefa();
  botaoExcluirRiscados();
  botaoMoverCima();
  botaoMoverBaixo();
};
