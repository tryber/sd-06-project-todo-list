let items = [];
let textValue;
const inputText = document.getElementById("texto-tarefa");

function addItem() {
  items.push(textValue);
  textValue = undefined;
  inputText.value = "";
  rebuildList();
}
// Faz o input e o botão funcionarem
function setInput() {
  inputText.addEventListener("input", function () {
    textValue = inputText.value;
  });

  // permitir apertar enter em vez de clicar no botão
  inputText.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      if (textValue) {
        addItem();
      } else {
        window.alert("Insira um item à lista!");
      }
    }
  });
}

function setButton() {
  const inputButton = document.getElementById("criar-tarefa");
  inputButton.addEventListener("click", function () {
    if (textValue) {
      addItem();
    } else {
      window.alert("Insira um item à lista!");
    }
  });
}

// reconstrói a lista toda vez que adiciona ou retira algo
function rebuildList() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  for (let i = 0; i < items.length; i += 1) {
    const newItem = document.createElement("li");
    lista.appendChild(newItem);
    newItem.innerText = items[i];
  }
}

window.onload = function () {
  setInput();
  setButton();
  rebuildList();
};

// ir pro input apertando TAB, não importa onde esteja
