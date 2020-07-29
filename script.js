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
  const itemlist = document.querySelector("#lista-tarefas")
  buttonDw.addEventListener('click', () => {
    for (let i = 0; i < itemlist.childNodes.length; i += 1) {
      const thisTask = itemlist.childNodes[i];
      if (thisTask.classList.contains('selected')) {
        const underTask = itemlist.childNodes[i+1];
        let underTaskText = underTask.innerText;
        underTask.innerText = thisTask.innerText;
        thisTask.innerText = underTaskText;
        console.log(underTask)
        thisTask.classList.toggle('selected');
      } 
    }
  });
}

function botaoMoverCima() {
  const buttonUp = document.querySelector("#mover-cima");
  const itemlist = document.querySelector("#lista-tarefas")
  buttonUp.addEventListener('click', () => {
    for (let i = 0; i < itemlist.childNodes.length; i += 1) {
      const thisTask = itemlist.childNodes[i];
      if (thisTask.classList.contains('selected')) {
        const underTask = itemlist.childNodes[i-1];
        const thisTaskText = thisTask.innerText;
        thisTask.innerText = underTask.innerText;
        underTask.innerText = thisTaskText;
        thisTask.classList.toggle('selected');
        underTask.classList.toggle('selected');
      } 
    }
  });
}

window.onload = () => {
  criarTarefa();
  botaoApagarTudo();
  botaoExcluirTarefa();
  botaoExcluirRiscados();
  botaoMoverCima();
  botaoMoverBaixo();
};
