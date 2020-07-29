function appendTask(textToAdd) {
  let item = document.createElement("li");
  item.innerText = textToAdd;
  document.querySelector(".to-do-list").appendChild(item);
}

document.querySelector(".add-task").addEventListener('click', () => {
  const TASK = document.querySelector(".to-do-task").value;
  appendTask(TASK);
});