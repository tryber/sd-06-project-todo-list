import lazyCoder from './lazy-coder.js';

const btnAdc = lazyCoder(0, 1);
const todoList = lazyCoder(0, 2);
let liList = {}, selected = {};
const updateLiList = function () { liList = lazyCoder(1, 6); };


if (localStorage.list !== undefined) {
  todoList.innerHTML = localStorage.list;
  updateLiList();
}

function changeBackground() {
  for (let i = 0; i < liList.length; i += 1) {
    if (liList[i].classList.contains('selected')) {
      liList[i].classList.remove('selected');
      liList[i].style.backgroundColor = 'white';
    }
  }
}

btnAdc.onclick = () => {
  if (lazyCoder(0, 0).value === '') {
    alert('Digite algo no input!');
  } else {
    const listConten = lazyCoder(2, 13);
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
  selected = e.target;
});

todoList.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

lazyCoder(0, 5).onclick = () => {
  liList.forEach((e) => e.remove());
  updateLiList();
};

lazyCoder(0, 7).onclick = () => {
  liList.forEach((e) => {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
  updateLiList();
};

lazyCoder(0, 8).onclick = () => {
  liList.forEach((e) => {
    if (e.classList.contains('selected')) {
      e.remove();
    }
  });
  updateLiList();
};

lazyCoder(0, 9).onclick = () => {
  if (selected) {
    if (selected.previousSibling) {
      selected.parentNode.insertBefore(selected, selected.previousSibling);
    }
  }
};

lazyCoder(0, 10).onclick = () => {
  if (selected) {
    if (selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    }
  }
};

lazyCoder(0, 12).onclick = () => {
  localStorage.setItem('list', todoList.innerHTML);
};
