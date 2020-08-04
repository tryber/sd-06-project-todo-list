let textValue;
const inputText = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
let listItems = lista.children;
let items = ["coisa", "coisa2", "coisa3"];
let selected;

function selectItem() {
    for (let i = 0; i < items.length; i += 1) {
        listItems[i].addEventListener("click", function () {
            if (selected) {
                selected.style.backgroundColor = "";
                selected = "";
            }
            listItems[i].style.backgroundColor = "rgb(128,128,128)";
            selected = listItems[i];
        });

        listItems[i].addEventListener("dblclick", function () {
            if (listItems[i].classList.contains("completed")) {
                listItems[i].classList.remove("completed");
            } else {
                listItems[i].classList.add("completed");
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

        selectItem();
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

function eraseButton() {
    let eraser = document.getElementById("apaga-tudo");
    eraser.addEventListener("click", function () {
        if (items.length > 0) {
            lista.innerHTML = "";
            items = [];
            rebuildList();
        }
    });
}

function removeCrossed() {
    let crossed = document.getElementById("remover-finalizados");
    crossed.addEventListener("click", function () {
        for (let i = 0; i < listItems.length; i += 1) {
            if (listItems[i].classList.contains("completed")) {
                items.splice(i, 1);
                console.log(items);
                rebuildList();
            }
        }
    });
}

window.onload = function () {
    setInput();
    setButton();
    rebuildList();
    selectItem();
    eraseButton();
    removeCrossed();
};

// ir pro input apertando TAB, não importa onde esteja
// armazenar a lista no webstorage, de modo que sempre que a pessoa entrar no site, a mesma lista está lá.
