var lista = [];
var btn = document.getElementById("criar-tarefa");
btn.addEventListener("click", function() {
  clickBtnCriarTarefa();
});

/*************************************************/
function clickBtnCriarTarefa() {
  pegaTexto();
  criarArray()
  criarTabela();
  limpaTexto()
}
/*************************************************/
function pegaTexto() {
  let texto = document.getElementById("texto-tarefa");
  return texto.value;
}
/*************************************************/
function criarArray() {
  let texto = pegaTexto();
  if (texto !== ""){
    lista.push(texto);
    console.log(lista);
  } else {
    alert("Campo tarefa precisa ser preenchido!!!")
  } 
}
/*************************************************/
function criarTabela() {
  for (let i = 0; i < lista.length; i +=1) {
    let tarefa = document.createElement("li")
    tarefa.innerHTML = lista[i];
    document.getElementById("lista-tarefas").appendChild(tarefa);
  }
}  
/*************************************************/
function limpaTexto() {
  let tarefa = document.getElementById("texto-tarefa");
  tarefa.value = "";
}
/*************************************************/

