const itemInput = document.querySelector('#texto-tarefa');
const insertButton = document.querySelector('#criar-tarefa');
const listOl = document.querySelector('#lista-tarefas');

function addBackLi() {
  const elemenstLi = document.querySelectorAll('li');
  let returLi = 0;
  for (let i = 0; i < elemenstLi.length; i += 1) {
    if (!elemenstLi[i].classList.contains('liBackground')) {
      returLi += 1;
    }
  }
  if (returLi === elemenstLi.length) {
    const elementLiNow = event.target;
    elementLiNow.classList.add('liBackground');
  }
}

function changeBackLi() {
  const elementLiBefore = document.querySelector('.liBackground');
  const elementLiNow = event.target;
  elementLiBefore.classList.remove('liBackground');
  elementLiNow.classList.add('liBackground');
}

function insertItemList() {
  if (itemInput.value === '') {
    alert('campo não pode ficar em branco')
  } else {
    const elementLi = document.createElement('li');
    elementLi.innerText = itemInput.value;
    listOl.appendChild(elementLi);
    itemInput.value = '';
    elementLi.addEventListener('click', function () {
      addBackLi();
      changeBackLi();
    });
    addEventDouble(elementLi);
  }
}

insertButton.addEventListener('click', function () {
  insertItemList();
  itemInput.addEventListener;
});


function addEventDouble(element) {
  element.addEventListener('dblclick', function () {
    if (!element.classList.contains('completed')) {
      element.classList.add('completed');
    } else {
      element.classList.remove('completed');
    }
  });
}
