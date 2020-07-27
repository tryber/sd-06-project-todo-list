const botao = document.querySelector("#criar-tarefa");
botao.addEventListener("click", function() {
    let item = document.createElement("li");
    item.className = "item";
    let texto = document.querySelector("#texto-tarefa");
    item.innerHTML = texto.value;
    document.querySelector("#lista-tarefas").appendChild(item);
    texto.value = "";
})
let selecao = document.querySelector("#lista-tarefas");
selecao.addEventListener("click", function(){
    if (document.querySelector(".selected") != null) {
        document.querySelector(".selected").style.backgroundColor = "white";
        document.querySelector(".selected").classList.remove("selected");
    }
    event.target.style.backgroundColor = "rgb(128,128,128)";
    event.target.classList.add("selected");
})
selecao.addEventListener("dblclick", function() {
    console.log(event.target.className);
    if (event.target.className === "item selected"){
        event.target.classList.add("completed");
    }else {
        event.target.classList.remove("completed");
    }
})