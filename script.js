const buttonText = document.querySelector('#criar-tarefa');
const listjobs = document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
const clearList = document.querySelector('#apaga-tudo');
console.log("aaa");
function listing() {
    buttonText.addEventListener('click', function () {
        const aux = document.createElement('li');
        aux.innerHTML = textInput.value;
        listjobs.appendChild(aux);
        textInput.value = "";
        aux.addEventListener('click', () => {
            console.log('vamos la bagaça');
            
        })
        aux.addEventListener('dblclick', (e) => {
            const dbclk = e.target;
            console.log("vamos la dois");
            if (!dbclk.classList.contains('completed')) {
                dbclk.className = 'completed';
            } else {
                dbclk.classList -= 'completed';
            }
        })
        let itemLista = document.querySelectorAll('li');
        itemLista.forEach(item => {
            item.addEventListener('click', () => {
                itemLista.forEach(item => {
                    item.classList.remove('selected');
                })
                item.classList.add('selected');
            })
        })

    })
}

aux = listing();
console.log(aux);

clearList.addEventListener('click', function () {
    listjobs.removeChild();
})




