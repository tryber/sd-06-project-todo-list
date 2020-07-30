let lista=document.getElementById("lista-tarefas");
function inicia() {
 document.getElementById("criar-tarefa").addEventListener("click", function(){
   let texto=document.getElementById("texto-tarefa");
   let listItem=document.createElement("li");   
   listItem.textContent=texto.value;
   lista.appendChild(listItem);  
   texto.value="";
   texto.focus()
 });
}
window.addEventListener("load", inicia);
