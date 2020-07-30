
function inicia() {
 document.getElementById("criar-tarefa").addEventListener("click", function(){
   let lista=document.getElementById("lista-tarefas");
   let texto=document.getElementById("texto-tarefa");
   let li=document.createElement("li");
   li.textContent=texto.value;
   lista.appendChild(li);  
   texto.value="";
   texto.focus()
 });
}
window.addEventListener("load", inicia);
