let items = ["comer banana", "tomar chocolate quente"];
let textValue;
const inputText = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
let selected;

// reconstrói a lista toda vez que adiciona ou retira algo
function rebuildList() {
  lista.innerHTML = "";

  for (let i = 0; i < items.length; i += 1) {
    const newItem = document.createElement("li");
    lista.appendChild(newItem);
    newItem.innerText = items[i];

    let thisItem = lista.children[i];
    // fica cinza quando clica
    thisItem.addEventListener("click", function () {
      if (selected) {
        selected.style.backgroundColor = "";
      }
      selected = thisItem;
      selected.style.backgroundColor = "rgb(128,128,128)";
      console.log(selected);
    });
  }
}

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

window.onload = function () {
  setInput();
  setButton();
  rebuildList();
};

// ir pro input apertando TAB, não importa onde esteja
