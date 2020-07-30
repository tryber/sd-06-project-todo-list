// Add task

const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

function addTask() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  ol.appendChild(li);
  return li;
}

function addText(li) {
  li.innerText = addTaskInput.value;
  addTaskInput.value = '';
}

function taskCreation() {
  if (addTaskInput.value === '') {
    return alert('Name a task before adding it!');
  }
  const li = addTask();
  return addText(li);
}

addTaskButton.onclick = taskCreation;

// Select element

// let taskList = document.querySelectorAll('li');

function resetSelection() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.removeAttribute('style');
    return selectedTask.classList.remove('selected');
  }
}

function selectTask(task) {
  resetSelection();
  // task.className = 'selected';
  task.classList.add('selected');
  return task.style.backgroundColor = 'rgb(128, 128, 128)';
}

function markAsCompleted(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed')
  }
}

function triggerEvent(task) {
  task.addEventListener('dblclick', function () {
        console.log(task)
    //     markAsCompleted(this);
      });
}

function childChanges() {

// function childChanges(mutations)
  // for (let mutation of mutations) {
    // if (mutation.type === 'childList') {

      const taskList = document.querySelectorAll('li');

      for (let i = 0; i < taskList.length; i += 1) {
        let task = ol.children[i];
        task.onclick = function () {
          selectTask(task);
        }
        task.ondblclick = function () {
          markAsCompleted(this);
        }
      }

    // }
  // }

}

const ol = document.getElementById('lista-tarefas');
const options = {
  childList: true,
};
const observer = new MutationObserver(childChanges);
observer.observe(ol, options);
