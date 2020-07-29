function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("texto-tarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Você precisa escrever algo!");
    } else {
      document.getElementById("lista-tarefas").appendChild(li);
    }
    document.getElementById("texto-tarefa").value = "";
}
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);