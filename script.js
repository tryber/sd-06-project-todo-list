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

window.onload = function () {
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
  localStorage.clear();
});

btnSaveList.addEventListener('click', function () {
  const saveItem = {};
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    saveItem.name = document.querySelectorAll('li')[i].innerHTML;
    saveItem.class = document.querySelectorAll('li')[i].className;
    localStorage.setItem(i, JSON.stringify(saveItem));
  }
});
