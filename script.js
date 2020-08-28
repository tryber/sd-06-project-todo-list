window.onload = function () {

let buttonAdd = document.querySelector("#criar-tarefa")
let campoTexto = document.getElementById("texto-tarefa")
let buttonDel = document.querySelector("#apaga-tudo")



//Add elementos na lista
buttonAdd.addEventListener("click", function(){
    let linha = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(linha)
    linha.innerHTML = campoTexto.value
    campoTexto.value = ""
    
//Add cor de fundo nos elementos da lista e remove dos antigos marcados
    linha.addEventListener("click", function(){
        lista = document.getElementsByTagName("li");
            for(let i=0;i<lista.length;i++){
                lista[i].classList.remove("cor-fundo")
            }
            linha.classList.add("cor-fundo")
            
    })
//limpar toda a lista
    buttonDel.addEventListener("click", function(){
        document.getElementById("lista-tarefas").removeChild(linha)
    })

//risca elemento das lista
    linha.addEventListener("dblclick", function(){
        
        if(linha.classList.contains("completed")){
            linha.classList.remove("completed")
        }else {
            linha.classList.add("completed")
            
    }

})

})

//botao de remover os riscados
let buttonEnd = document.querySelector("#remover-finalizados")
buttonEnd.addEventListener("click", (event) => deleteCompletedListItem());


    function deleteCompletedListItem() {
        let allCompletedListItem = document.querySelectorAll('.completed');
        let listElement = document.querySelector('#lista-tarefas');
        for (let item = 0; item < allCompletedListItem.length; item += 1) {
            listElement.removeChild(allCompletedListItem[item])
        }
    }


//remover selecionado
let slectedRemove = document.querySelector('#remover-selecionado');
let selecionado = document.getElementsByClassName('cor-fundo');

    slectedRemove.addEventListener('click', function () {
    selecionado[0].remove();
  })


}