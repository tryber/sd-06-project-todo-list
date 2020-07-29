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
  5: 'li',
};

const btnAdc = lazyCoder(0, 1);
const todoList = lazyCoder(0, 2);
let selected = {};
let liList = [];


function lazyCoder(keyMethod, keyDiv) {
  return document[`${METHODS[keyMethod]}`](TAGS[keyDiv]);
}

function returnCreatedElement(tagName) {
  return document.createElement(tagName);
}

function changeBackground() {
  liList.forEach((e) => {
    e.classList.remove('selected');
    e.style.backgroundColor = 'white';
  });
}

btnAdc.onclick = () => {
  let listConten = lazyCoder(2, 5);
  listConten.className = 'tarefas';
  liList.push(listConten);

  listConten.textContent = lazyCoder(0, 0);
  inputText.value = '';
  todoList.appendChild(listConten);
};

todoList.addEventListener('click', (e) => {
  changeBackground();

  selected = e.target;
  selected.classList.add('selected');

  for (let c in selected.classList) {
    if (selected.classList[c] === 'selected') {
      selected.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
});
