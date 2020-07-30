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

function unsetBgTasks() {
  document.querySelectorAll('.tasks').forEach(itemBg => {
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

// function deleteAllCompletedClasses() {
//   document.querySelectorAll('li').forEach((item) => {
//     for (let i = 0; i < item.classList.length; i += 1) {
//       if (item.classList[i] === 'completed') {
//         item.classList.remove(item.classList[i]);
//       }
//     }
//   });
// }

// function selectpalette() {
//   document.querySelectorAll('li').forEach((item) => {
//     item.addEventListener('click', (event) => {
//       deleteAllCompletedClasses();
//       event.target.className += ' completed';
//     });
//   });
//   document.querySelectorAll('.color')[0].className += ' selected';
// }
