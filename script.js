import { lazyCoder } from './lazy-coder.js';

const btnAdc = lazyCoder(0, 1);
const todoList = lazyCoder(0, 2);
const updateLiList = function () { liList = lazyCoder(1, 12); }
let liList = {};

function changeBackground() {
  for (const value of Object.values(liList)) {
    if (value.classList.contains('selected')) {
      value.classList.remove('selected');
      value.style.backgroundColor = 'white';
    }
  }
}

btnAdc.onclick = () => {
  if (lazyCoder(0, 0).value === '') {
    alert('Digite algo no input!')
  } else {
    const listConten = lazyCoder(2, 12);
    listConten.className = 'tarefas';

    listConten.textContent = lazyCoder(0, 0).value;
    lazyCoder(0, 0).value = '';

    todoList.appendChild(listConten);
    updateLiList();
  }
};

todoList.addEventListener('click', (e) => {
  changeBackground();

  e.target.classList.add('selected');
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

todoList.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

lazyCoder(0, 5).onclick = () => {
  lazyCoder(1, 6).forEach((e) => e.remove());
  updateLiList();
};

lazyCoder(0, 7).onclick = () => {
  lazyCoder(1, 6).forEach((e) => {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
  updateLiList();
};

lazyCoder(0, 8).onclick = () => {
  lazyCoder(1, 6).forEach((e) => {
    if (e.classList.contains('selected')) {
      e.remove();
    }
  });
  updateLiList();
};


lazyCoder(0, 9).onclick = () => {
  updateLiList();
  for (let i = 0; i < liList.length; i += 1) {
    if (liList[i].classList.contains('selected') && i !== 0) {
      todoList.insertBefore(liList[i], liList[i - 1]);
    }
  }
};

lazyCoder(0, 10).onclick = () => {
  updateLiList();
  for (let i = 0; i < liList.length; i += 1) {
    if (liList[i].classList.contains('selected') && i !== liList.length - 1) {
      todoList.insertBefore(liList[i + 1], liList[i]);
    }
  }
};