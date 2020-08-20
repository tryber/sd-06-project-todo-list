function moveUpSelectedTask() {
  const tasksToMoveUp = document.querySelectorAll('#lista');
  for (let index = 1; index < tasksToMoveUp.length; index += 1) {
    if (tasksToMoveUp[index].classList.contains('selected')) {
      const liPrevClass = tasksToMoveUp[index - 1].className;
      const liPrevTask = tasksToMoveUp[index - 1].innerText;
      tasksToMoveUp[index - 1].innerText = tasksToMoveUp[index].innerText;
      tasksToMoveUp[index - 1].className = tasksToMoveUp[index].className;
      tasksToMoveUp[index].innerText = liPrevTask;
      tasksToMoveUp[index].className = liPrevClass;
      break;
    }
  }
}

function moveDownSelectedTask() {
  const tasksToMoveDown = document.querySelectorAll('#lista');
  for (let index = 0; index < tasksToMoveDown.length - 1; index += 1) {
    if (tasksToMoveDown[index].classList.contains('selected')) {
      const liNextClass = tasksToMoveDown[index + 1].className;
      const LiNextTask = tasksToMoveDown[index + 1].innerText;
      tasksToMoveDown[index + 1].innerText = tasksToMoveDown[index].innerText;
      tasksToMoveDown[index + 1].className = tasksToMoveDown[index].className;
      tasksToMoveDown[index].innerText = LiNextTask;
      tasksToMoveDown[index].className = liNextClass;
      break;
    }
  }
}