// Importa os dados do local storage, caso haja
if (localStorage.getItem('my-tasks') !== null) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('my-tasks');
  }
  
  const btSave = document.getElementById('salvar-tarefas');
  btSave.addEventListener('click', function () {
    localStorage.setItem('my-tasks', document.getElementById('lista-tarefas').innerHTML);
  });
  
  function unsetBgTasks() {
    document.querySelectorAll('.tasks').forEach((itemBg) => {
      itemBg.style.backgroundColor = '';
    });
  }
  
  function tasksListenerClick(tagLi) {
    tagLi.addEventListener('click', function () {
      unsetBgTasks();
      tagLi.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
  
  function tasksListenerDbClick(tagLi) {
    tagLi.addEventListener('dblclick', function () {
      if (tagLi.classList[1] === 'completed') {
        tagLi.classList.remove(tagLi.classList[1]);
      } else {
        tagLi.className += ' completed';
      }
      unsetBgTasks();
    });
  }
  
  const btAdd = document.getElementById('criar-tarefa');
  btAdd.addEventListener('click', function () {
    const newTask = document.getElementById('texto-tarefa').value;
    const tagLi = document.createElement('li');
    tagLi.innerHTML = newTask;
    tagLi.className = 'tasks';
    tagLi.style.cursor = 'pointer';
    document.querySelector('#lista-tarefas').appendChild(tagLi);
    document.getElementById('texto-tarefa').value = '';
    tasksListenerClick(tagLi);
    tasksListenerDbClick(tagLi);
  });
  
  // Atribui as funcionalidades aos botões importados do local storage
  document.querySelectorAll('.tasks').forEach((eachTask) => {
    tasksListenerClick(eachTask);
    tasksListenerDbClick(eachTask);
  });
  
  const btRemoveAll = document.querySelector('#apaga-tudo');
  btRemoveAll.addEventListener('click', function () {
    document.querySelector('#lista-tarefas').innerHTML = '';
  });
  
  const btRemoveAllFinished = document.querySelector('#remover-finalizados');
  btRemoveAllFinished.addEventListener('click', function () {
    const listLis = document.querySelectorAll('li');
    for (let i = 0; i < listLis.length; i += 1) {
      if (listLis[i].classList[1] === 'completed') {
        document.querySelector('#lista-tarefas').removeChild(listLis[i]);
      }
    }
  });
  
  const moveUp = document.querySelector('#mover-cima');
  moveUp.addEventListener('click', function () {
    const listLis = document.querySelectorAll('li');
    for (let i = 0; i < listLis.length; i += 1) {
      if (listLis[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        const listOfTasks = document.querySelector('#lista-tarefas');
        if (i > 0) {
          listOfTasks.insertBefore(listLis[i], listLis[i - 1]);
          // listLis[i - 1] é o mesmo que listLis[i].previousSibling
        }
      }
    }
  });
  
  const moveDown = document.querySelector('#mover-baixo');
  moveDown.addEventListener('click', function () {
    const listLis = document.querySelectorAll('li');
    for (let i = 0; i < listLis.length; i += 1) {
      if (listLis[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        const listOfTasks = document.querySelector('#lista-tarefas');
        if (i < listLis.length) {
          listOfTasks.insertBefore(listLis[i], listLis[i + 2]);
        }
      }
    }
  });
  
  const btRemoveSelected = document.querySelector('#remover-selecionado');
  btRemoveSelected.addEventListener('click', function () {
    const listLis = document.querySelectorAll('li');
    for (let i = 0; i < listLis.length; i += 1) {
      if (listLis[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        document.querySelector('#lista-tarefas').removeChild(listLis[i]);
      }
    }
  });