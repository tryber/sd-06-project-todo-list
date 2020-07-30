const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
const executingTodos = JSON.parse(localStorage.getItem('executing-list')) || [];
const doneTodos = JSON.parse(localStorage.getItem('finished-list')) || [];
let selectedTodo = Number(localStorage.getItem('selectedTodo') || 'none')

function saveTodos() {
  localStorage.setItem('todo-list', JSON.stringify(todoList));
  localStorage.setItem('executing-list', JSON.stringify(executingTodos));
  localStorage.setItem('finished-list', JSON.stringify(doneTodos));
  localStorage.setItem('selectedTodo', selectedTodo);
}

function enableMovingButtons() {
  const upBtn = document.querySelector('.up');
  const downBtn = document.querySelector('.down');
  const rightBtn = document.querySelector('.right');
  const removeBtn = document.querySelector('.remove');

  removeBtn.onclick = () => {
    const currentlySelected = document.querySelector(".selected");
    if (currentlySelected) {
      const currentText = currentlySelected.innerText;
      selectedTodo = 'none';
      currentlySelected.remove();

      const todoIndex = todoList.indexOf(currentText);
      todoList.splice(todoIndex, 1);
      renderTodaysTodos();

      if (doneTodos.includes(currentText)) {
        const textIndex = doneTodos.indexOf(currentText);
        doneTodos.splice(textIndex, 1);
        renderDoneTodos();
      }

      if (executingTodos.includes(currentText)) {
        const textIndex = executingTodos.indexOf(currentText);
        executingTodos.splice(textIndex, 1);
        renderDoingTodos();
      }
    }
  }

  upBtn.onclick = () => {
    const currentlySelected = document.querySelector(".selected");

    if (currentlySelected) {
      const selectedText = currentlySelected.innerText;
      const currentIndex = todoList.indexOf(selectedText);

      if (currentIndex !== 0) {
        let elementDown = todoList[currentIndex - 1];
        todoList[currentIndex - 1] = selectedText;
        todoList[currentIndex] = elementDown;
        selectedTodo = currentIndex - 1;
        renderTodaysTodos();
        const everyTodo = document.querySelectorAll(".daily");
        everyTodo[currentIndex - 1].classList.add('selected');
        saveTodos();
      }
    }

  }

  downBtn.onclick = () => {
    const currentlySelected = document.querySelector(".selected");

    if (currentlySelected) {
      const selectedText = currentlySelected.innerText;
      const currentIndex = todoList.indexOf(selectedText);

      if (currentIndex !== todoList.length - 1) {
        let elementUp = todoList[currentIndex + 1];
        todoList[currentIndex + 1] = selectedText;
        todoList[currentIndex] = elementUp;
        selectedTodo = currentIndex + 1;
        renderTodaysTodos();
        const everyTodo = document.querySelectorAll(".daily");
        everyTodo[currentIndex + 1].classList.add('selected');
        saveTodos();
      }
    }

  }

  rightBtn.onclick = () => {
    const currentlySelected = document.querySelector(".selected");
    const todoText = currentlySelected.innerHTML;

    if (doneTodos.includes(todoText)) {
      return
    }

    if (currentlySelected && !executingTodos.includes(todoText)) {
      const todoText = currentlySelected.innerText;
      executingTodos.push(todoText);
      renderDoingTodos();
      currentlySelected.classList.add('doing');
    }
  }
}

// function hideBtn() {
//   const upDownBtnElement = document.querySelector('.up-down-control');
//   const controlContainer = document.querySelector('.control');

//   if (todoList[0]) {
//     upDownBtnElement.classList.remove('hide');
//     controlContainer.classList.remove('hide');
//   } else {
//     upDownBtnElement.classList.add('hide');
//     controlContainer.classList.add('hide');
//   }
// }

function clickTodo(event) {
  const previousSelected = document.querySelector('.selected');
  event.target.classList.toggle('selected');
  selectedTodo = todoList.indexOf(event.target.innerText);

  if (previousSelected) {
    previousSelected.classList.remove('selected')
  }
}

function doubleClickTodo(event) {
  event.target.classList.toggle('completed');
  const todoText = event.target.innerText;

  if (executingTodos.includes(todoText)) {
    event.target.classList.remove('doing');
    const textIndex = executingTodos.indexOf(todoText);
    executingTodos.splice(textIndex, 1);
    renderDoingTodos();
  }

  if (doneTodos.includes(todoText)) {
    let indexOfTodo = doneTodos.indexOf(todoText);
    doneTodos.splice(indexOfTodo, 1);
    renderDoneTodos();
  } else {
    doneTodos.push(todoText);
    renderDoneTodos();
  }

}

function renderTodaysTodos() {
  const orderedListElem = document.getElementById("lista-tarefas");
  orderedListElem.innerHTML = '';

  // hideBtn();

  todoList.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.classList.add("todo-item");
    listItem.classList.add("daily");

    if (doneTodos.includes(todo)) {
      listItem.classList.add('completed');
    } else if (executingTodos.includes(todo)) {
      listItem.classList.add('doing');
    }

    if (selectedTodo == todoList.indexOf(todo)) {
      listItem.classList.add('selected');
    }

    listItem.addEventListener('click', clickTodo);
    listItem.addEventListener('dblclick', doubleClickTodo);

    listItem.appendChild(document.createTextNode(todo));
    orderedListElem.appendChild(listItem);
  })
}

function renderDoingTodos() {
  const currentlyDoing = document.querySelector('.current-doing-todos .todo-list');
  currentlyDoing.innerHTML = '';

  executingTodos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.classList.add("todo-item");
    listItem.classList.add("in-exec");

    listItem.appendChild(document.createTextNode(todo));
    currentlyDoing.appendChild(listItem);
  })
}

function renderDoneTodos() {
  const doneListElem = document.querySelector('.completed-todos .todo-list');
  doneListElem.innerHTML = '';

  doneTodos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.classList.add("todo-item");

    listItem.appendChild(document.createTextNode(todo));
    doneListElem.appendChild(listItem);
  })
}

function enableEnter() {
  const addInput = document.getElementById("texto-tarefa");

  addInput.onkeypress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  }
}

function enableAddBtn() {
  const addBtn = document.getElementById("criar-tarefa");

  addBtn.onclick = addTodo;
}

function addTodo() {
  const addInput = document.getElementById("texto-tarefa");
  let todoText = addInput.value.trim();
  if (todoText) {
    todoList.push(todoText);
    renderTodaysTodos();
    addInput.value = '';
  }

}

function enableSaving() {
  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.onclick = saveTodos;
}

function enableDeleteAll() {
  const deleteBtn = document.getElementById('apaga-tudo');

  deleteBtn.onclick = () => {
    todoList.splice(0, todoList.length);
    executingTodos.splice(0, executingTodos.length);
    doneTodos.splice(0, doneTodos.length);
    selectedTodo = null;
    renderTodaysTodos();
    renderDoneTodos();
    renderDoingTodos();
    saveTodos();
  }
}

function enableRemoveDone() {
  const removeDoneTodosBtn = document.getElementById('remover-finalizados');

  removeDoneTodosBtn.onclick = () => {
    const completedElements = document.querySelectorAll('.completed');
    completedElements.forEach((item) => {
      const itemText = item.innerText;
      const indexTodo = todoList.indexOf(itemText);
      const indexDoing = executingTodos.indexOf(itemText);
      const indexDone = doneTodos.indexOf(itemText);

      todoList.splice(indexTodo, 1);
      (indexDoing !== -1) ? executingTodos.splice(indexDoing, 1) : '';
      doneTodos.splice(indexDone, 1);

      renderDoingTodos();
      renderDoneTodos();
      renderTodaysTodos();

      item.remove();
    })
  }
}

window.onload = () => {
  renderTodaysTodos();
  renderDoingTodos();
  renderDoneTodos();
  enableAddBtn();
  enableEnter();
  enableMovingButtons();
  enableSaving();
  enableDeleteAll();
  enableRemoveDone();
}
