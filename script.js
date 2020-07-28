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
    if (event.target.className === "item selected"){
        event.target.classList.add("completed");
    }else {
        event.target.classList.remove("completed");
    }
})
const apagar = document.querySelector("#apaga-tudo");
apagar.addEventListener("click", function(){
    if (selecao.childNodes.length > 0){
        for (let i = 0; i < selecao.childNodes.length; i++) {
            selecao.remove(selecao.childNodes[i]);
        }
    }
})
const apagarFinalizados = document.querySelector("#remover-finalizados");
apagarFinalizados.addEventListener("click", function(){
    let completados = document.querySelectorAll(".completed");
    for (let j = 0; j < completados.length; j++){
        selecao.removeChild(completados[j]);
    }
})
const salvarTarefas = document.querySelector("#salvar-tarefas");
salvarTarefas.addEventListener("click", function(){
    let itensBrutos = document.querySelectorAll(".item");
    let itensArray = [];
    let itensClass = [];
    for (let k = 0; k < itensBrutos.length; k++){
        itensArray.push(itensBrutos[k].innerHTML);
        itensClass.push(itensBrutos[k].classList);
    }
    localStorage.setItem('items', JSON.stringify(itensArray));
    localStorage.setItem('classes', JSON.stringify(itensClass));
})
if (localStorage.getItem('items') !==  null){
    let listaSalva = JSON.parse(localStorage.getItem('items'));
    let classSalva = JSON.parse(localStorage.getItem('classes'));
    for (let i = 0; i < listaSalva.length; i++){
        let item = document.createElement("li");
        let classe = Object.values(classSalva[i]);
        classe = classe.toString();
        classe = classe.replace("selected"," ");
        classe = classe.replace(","," ");
        classe = classe.replace(",","");
        item.classList = classe;
        item.innerHTML = listaSalva[i];
        document.querySelector("#lista-tarefas").appendChild(item);
    }
}