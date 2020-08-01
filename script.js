function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("texto-tarefa").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Você precisa escrever algo!");
  } else {
    document.getElementById("lista-tarefas").appendChild(li);
  }
  document.getElementById("texto-tarefa").value = "";
}
var list = document.querySelector("ol");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
list.addEventListener(
  "dblclick",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("completed");
    }
  },
  false
);
const btnClearAll = document.querySelector("#apaga-tudo");
btnClearAll.addEventListener("click", function () {
  const allTask = document.querySelectorAll("li");
  for (let index = 0; index < allTask.length; index += 1) {
    allTask[index].remove();
  }
});
