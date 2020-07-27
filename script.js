const botao = document.querySelector("#criar-tarefa");
botao.addEventListener("click", function() {
    let item = document.createElement("li");
    let texto = document.querySelector("#texto-tarefa");
    item.innerHTML = texto.value;
    document.querySelector("#lista-tarefas").appendChild(item);
    texto.value = "";
})