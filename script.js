function click(event) {
    const fundoTarefa = event.target;
    const removerFundo = document.querySelectorAll('#lista');
    for (let index = 0; index < removerFundo.length; index += 1) {
      removerFundo[index].classList.remove('selected');
    }
    fundoTarefa.classList.add('selected');
  }

    function duploClick(event) {
    const tarefaCompleta = event.target;
    if (tarefaCompleta.classList.contains('completed')) {
      tarefaCompleta.classList.remove('completed');
    } else {
      tarefaCompleta.classList.add('completed');
    }
  }

    function salvarLocalmente() {
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      const tarefas = document.querySelector('#lista-tarefas');
      const objetosTarefas = [];
      const objetosClasses = [];
      for (let index = 0; index < tarefas.children.length; index += 1) {
        objetosTarefas[index] = tarefas.children[index].innerText;
        objetosClasses[index] = tarefas.children[index].classList;
      }
      localStorage.setItem('tarefas', objetosTarefas.join());
      localStorage.setItem('classes', objetosClasses.join());
    } 

    function armazenamentoLocal() {
    const objetosTarefas = localStorage.getItem('tarefas').split(',');
    const objetosClasses = localStorage.getItem('classes').split(',');
    for (let index = 0; index < objetosTarefas.length; index += 1) {
      const adicionarTarefa = document.querySelector('#lista-tarefas');
      const lista = document.createElement('li');
      lista.innerHTML = objetosTarefas[index];
      lista.className = objetosClasses[index];
      lista.id = 'lista';
      adicionarTarefa.appendChild(lista);
      lista.addEventListener('click', click);
      lista.addEventListener('duploClick', duploClick);
    }
  }



    function criarElemento() {
    const adicionarNovaTarefa = document.querySelector('#lista-tarefas');
    const textoDaTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    if (textoDaTarefa.value !== '') {
      li.innerHTML = textoDaTarefa.value;
      li.id = 'lista';
      adicionarNovaTarefa.appendChild(li);
      textoDaTarefa.value = '';
      li.addEventListener('click', click);
      li.addEventListener('duploClick', duploClick);
    }
  }

    function removerTodasTarefas() {
    const todasTarefas = document.querySelector('#lista-tarefas');
    while (todasTarefas.firstChild) {
      todasTarefas.removeChild(todasTarefas.lastChild);
    }
  }

    function removerTarefasCompletas() {
    const tarefasCompletas = document.getElementsByClassName('completed');
    while (tarefasCompletas.length > 0) {
      tarefasCompletas[0].remove();
    }
  }

    function RemoverTarefasSelecionadas() {
    const tarefasSelecionadas = document.getElementsByClassName('selected');
    while (tarefasSelecionadas.length > 0) {
      tarefasSelecionadas[0].remove();
    }
  }

    const btnCriarTarefa = document.querySelector('#criar-tarefa');
    btnCriarTarefa.addEventListener('click', criarElemento);

    const btnRemoverTarefa = document.querySelector('#apaga-tudo');
    btnRemoverTarefa.addEventListener('click', removerTodasTarefas);

    const btnRemoverTarefasCompletas = document.querySelector('#remover-finalizados');
    btnRemoverTarefasCompletas.addEventListener('click', removerTarefasCompletas);

    const btnSalvarTarefas = document.querySelector('#salvar-tarefas');
    btnSalvarTarefas.addEventListener('click', salvarLocalmente);

    const btnRemoverTarefasSelecionadas = document.querySelector('#remover-selecionado');
    btnRemoverTarefasSelecionadas.addEventListener('click', RemoverTarefasSelecionadas); 