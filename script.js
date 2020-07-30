let textValue;
const inputText = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
let items = lista.children;
let selected;

//DEPOIS APAGA, SÓ PRA TESTE
lista.innerHTML = "<li>uma coisa</li><li>duas coisa</li><li>três coisa</li>";
//APAGA

function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener("click", function () {
      if (selected) {
        selected.style.backgroundColor = "";
        selected = "";
      }
      items[i].style.backgroundColor = "rgb(128,128,128)";
      selected = items[i];
    });

    items[i].addEventListener("dblclick", function () {
      if (items[i].classList.contains("completed")) {
        items[i].classList.remove("completed");
      } else {
        items[i].classList.add("completed");
      }
    });
  }
}

// reconstrói a lista toda vez que adiciona ou retira algo
function rebuildList() {
  lista.innerHTML = "";

  for (let i = 0; i < items.length; i += 1) {
    const newItem = document.createElement("li");
    lista.appendChild(newItem);
    newItem.innerText = items[i];
  }
}

function addItem() {
  items.push(textValue);
  textValue = undefined;
  inputText.value = "";
  rebuildList();
  selectItem();
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
  //rebuildList();
  selectItem(); //APAGA
};

// ir pro input apertando TAB, não importa onde esteja
// armazenar a lista no webstorage, de modo que sempre que a pessoa entrar no site, a mesma lista está lá.
