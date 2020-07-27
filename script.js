const botao = document.querySelector("#criar-tarefa");
botao.addEventListener("click", function() {
    let item = document.createElement("li");
    item.className = "item";
    let texto = document.querySelector("#texto-tarefa");
    item.innerHTML = texto.value;
    document.querySelector("#lista-tarefas").appendChild(item);
    texto.value = "";
})

window.onclick = function(){
    if (event.target.className === "item") {
        event.target.style.backgroundColor = "rgb(128,128,128)";
    }
}