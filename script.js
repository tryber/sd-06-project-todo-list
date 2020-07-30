window.onload = function () {

    setInput();
    rebuildList();
}

let items = [];

// Faz o input e o botão funcionarem
function setInput() {
    let inputText = document.getElementById('texto-tarefa');
    let textValue;

    inputText.addEventListener('input', function () {
        textValue = inputText.value;
    });

    // permitir apertar enter em vez de clicar no botão
    inputText.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            if (textValue) {
                items.push(textValue);
                textValue = undefined;
                inputText.value = "";
                rebuildList();
            } else {
                window.alert('Insira um item à lista!');
            }
        }
    });

    let inputButton = document.getElementById('criar-tarefa');
    inputButton.addEventListener('click', function () {

        if (textValue) {
            items.push(textValue);
            textValue = undefined;
            inputText.value = "";
            rebuildList();
        } else {
            window.alert('Insira um item à lista!');
        }
    });
}

// reconstrói a lista toda vez que adiciona ou retira algo
function rebuildList() {
    let lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let newItem = document.createElement('li');
        lista.appendChild(newItem);
        newItem.innerText = items[i];
    }

}
