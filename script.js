const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  2: 'createElement',
};

const TAGS = {
  0: '#texto-tarefa',
  1: '#criar-tarefa',
  2: '#lista-tarefas',
  3: '#generate-board',
  4: '.input-text',
  5: '#apaga-tudo',
  6: '.tarefas',
  7: '#remover-finalizados',
  8: 'li',
};

function lazyCoder(keyMethod, keyDiv) {
  return document[`${METHODS[keyMethod]}`](TAGS[keyDiv]);
}

const btnAdc = lazyCoder(0, 1);
const todoList = lazyCoder(0, 2);
const liList = [];

function changeBackground() {
  liList.forEach((e) => {
    e.classList.remove('selected');
    e.style.backgroundColor = 'white';
  });
}

btnAdc.onclick = () => {
  const listConten = lazyCoder(2, 8);
  listConten.className = 'tarefas';
  liList.push(listConten);

  listConten.textContent = lazyCoder(0, 0).value;
  lazyCoder(0, 0).value = '';
  todoList.appendChild(listConten);
};

todoList.addEventListener('click', (e) => {
  changeBackground();
  const selected = e.target;

  selected.classList.add('selected');
  selected.style.backgroundColor = 'rgb(128, 128, 128)';
});

todoList.addEventListener('dblclick', (e) => {
  const selected = e.target;

  if (selected.classList.contains('completed')) {
    selected.classList.remove('completed');
  } else {
    selected.classList.add('completed');
  }
});

lazyCoder(0, 5).onclick = () => {
  lazyCoder(1, 6).forEach((e) => e.remove());
};

lazyCoder(0, 7).onclick = () => {
  lazyCoder(1, 6).forEach((e) => {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
};
