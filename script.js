const btnCreate = document.getElementById('criar-tarefa');
const btnErase = document.getElementById('apaga-tudo');
const btnEraseTask = document.getElementById('remover-finalizados');
const btnSaveList = document.getElementById('salvar-tarefas');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

function selectElement() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('click', function () {
      for (let j = 0; j < document.querySelectorAll('li').length; j += 1) {
        document.querySelectorAll('li')[j].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function completeTask() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    if (document.querySelectorAll('li')[i].className === '') {
      document.querySelectorAll('li')[i].className = ' ';
      document.querySelectorAll('li')[i].addEventListener('dblclick', function () {
        if (document.querySelectorAll('li')[i].className === ' ') {
          document.querySelectorAll('li')[i].className = 'completed';
        } else {
          document.querySelectorAll('li')[i].className = ' ';
        }
      });
    }
  }
}

function createElementList(textvalue) {
  if (textvalue !== '') {
    const li = document.createElement('li');
    li.innerHTML = textvalue;
    list.appendChild(li);
    text.value = '';
  }
  selectElement();
  completeTask();
}

function listToSave() {
  const saveItem = {};
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    saveItem.name = document.querySelectorAll('li')[i].innerHTML;
    saveItem.class = document.querySelectorAll('li')[i].className;
    localStorage.setItem(i, JSON.stringify(saveItem));
  }
}

function returnSavedList() {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      const saveList = JSON.parse(localStorage.getItem(i));
      createElementList(saveList.name);
    }
    for (let j = 0; j < localStorage.length; j += 1) {
      const saveList = JSON.parse(localStorage.getItem(j));
      document.querySelectorAll('li')[j].className = saveList.class;
    }
    selectElement();
    completeTask();
  }
}

window.onload = function () {
  returnSavedList();
};

btnCreate.addEventListener('click', function () {
  createElementList(text.value);
});

btnErase.addEventListener('click', function () {
  list.innerHTML = '';
});

btnEraseTask.addEventListener('click', function () {
  const completedItems = document.querySelectorAll('.completed');
  for (let i = 0; i < completedItems.length; i += 1) {
    list.removeChild(completedItems[i]);
  }
  listToSave();
  list.innerHTML = '';
  returnSavedList();
  localStorage.clear();
});

btnSaveList.addEventListener('click', function () {
  listToSave();
});

document.getElementById('mover-cima').addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    if (document.querySelectorAll('li')[i].style.backgroundColor === 'rgb(128, 128, 128)' && document.querySelectorAll('li')[i - 1]) {
      const aux = document.querySelectorAll('li')[i - 1].innerHTML;
      document.querySelectorAll('li')[i - 1].innerHTML = document.querySelectorAll('li')[i].innerHTML;
      document.querySelectorAll('li')[i].innerHTML = aux;
      document.querySelectorAll('li')[i].style.backgroundColor = 'white';
      document.querySelectorAll('li')[i - 1].style.backgroundColor = 'rgb(128, 128, 128)';
      if (document.querySelectorAll('li')[i].className === 'completed' && document.querySelectorAll('li')[i - 1].className === ' ') {
        document.querySelectorAll('li')[i].className = ' ';
        document.querySelectorAll('li')[i - 1].className = 'completed';
      } else if (document.querySelectorAll('li')[i].className === 'completed' && document.querySelectorAll('li')[i - 1].className === 'completed') {
        document.querySelectorAll('li')[i].className = 'completed';
        document.querySelectorAll('li')[i - 1].className = 'completed';
      } else if (document.querySelectorAll('li')[i].className === ' ' && document.querySelectorAll('li')[i - 1].className === 'completed') {
        document.querySelectorAll('li')[i].className = 'completed';
        document.querySelectorAll('li')[i - 1].className = ' ';
      } else {
        document.querySelectorAll('li')[i].className = ' ';
        document.querySelectorAll('li')[i - 1].className = ' ';
      }
    }
  }
});

document.getElementById('mover-baixo').addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    if (document.querySelectorAll('li')[i].style.backgroundColor === 'rgb(128, 128, 128)' && document.querySelectorAll('li')[i + 1]) {
      const aux2 = document.querySelectorAll('li')[i].innerHTML;
      document.querySelectorAll('li')[i].innerHTML = document.querySelectorAll('li')[i + 1].innerHTML;
      document.querySelectorAll('li')[i + 1].innerHTML = aux2;
      if (document.querySelectorAll('li')[i].className === 'completed' && document.querySelectorAll('li')[i + 1].className === ' ') {
        document.querySelectorAll('li')[i].className = ' ';
        document.querySelectorAll('li')[i + 1].className = 'completed';
      } else if (document.querySelectorAll('li')[i].className === 'completed' && document.querySelectorAll('li')[i + 1].className === 'completed') {
        document.querySelectorAll('li')[i].className = 'completed';
        document.querySelectorAll('li')[i + 1].className = 'completed';
      } else if (document.querySelectorAll('li')[i].className === ' ' && document.querySelectorAll('li')[i + 1].className === 'completed') {
        document.querySelectorAll('li')[i].className = 'completed';
        document.querySelectorAll('li')[i + 1].className = ' ';
      } else {
        document.querySelectorAll('li')[i].className = ' ';
        document.querySelectorAll('li')[i + 1].className = ' ';
      }
      document.querySelectorAll('li')[i].style.backgroundColor = 'white';
      document.querySelectorAll('li')[i + 1].style.backgroundColor = 'rgb(128, 128, 128)';
      break;
    }
  }
});

document.getElementById('remover-selecionado').addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    if (document.querySelectorAll('li')[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      document.getElementById('lista-tarefas').removeChild(document.querySelectorAll('li')[i]);
    }    
  }
  listToSave();
  list.innerHTML = '';
  returnSavedList();
  localStorage.clear();
});
