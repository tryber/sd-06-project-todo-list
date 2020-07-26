let button = document.getElementById("criar-tarefa");
      
      let ordList = document.querySelector("#lista-tarefas");


      button.addEventListener("click", function makeList() {
      let atividade = document.getElementById("texto-tarefa").value;
      ordList.appendChild = atividade;
      
    //   ordList.appendChild(atividade);
      
      ordList.innerHTML = `${atividade}`;
      atividade = "";
      });
