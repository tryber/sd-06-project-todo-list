const listaInput = document.getElementById('texto-tarefa');
const botaoCriar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApaga = document.getElementById('apaga-tudo');
const botaoFinalizados = document.getElementById('remover-finalizados');
const botaoStorage = document.getElementById('salvar-tarefas');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');

function funcionarSelect(item) {
	item.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis
		for (let i = 0; i < lis.length; i += 1) {
			lis[i].classList.remove('selected'); // tira de todas
		}
		item.classList.toggle('selected'); // adiciona só na selecionada
	});
} // LEMBRA de ti

function funcionarCompleted(item) {
	item.addEventListener('dblclick', function () {
		item.classList.toggle('completed');
	});
}

function criarItemLista() {
	if (listaInput.value !== '') {
		const criarItem = document.createElement('li');
		listaTarefas.appendChild(criarItem);
		criarItem.innerText = listaInput.value;
		listaInput.value = '';

		funcionarSelect(criarItem);
		funcionarCompleted(criarItem);
	}
}

function funcionarInput() {
	botaoCriar.addEventListener('click', function () {
		criarItemLista();
	});
	// Extra pra funcionar apertando Enter também
	listaInput.addEventListener('keydown', function (e) {
		if (e.keyCode === 13) {
			criarItemLista();
		}
	});
}

function funcionarBotaoCompleted() {
	botaoFinalizados.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis

		const lisLength = lis.length;
		const deleted = []; //ver se não quebra

		for (let i = 0; i < lisLength; i += 1) {
			if (lis[i].classList.contains('completed')) {
				deleted.push(lis[i]);
			}
		}

		for (let i = 0; i < deleted.length; i += 1) {
			deleted[i].remove();
		}
	});
}

function funcionarBotaoApaga() {
	botaoApaga.addEventListener('click', function () {
		listaTarefas.innerHTML = '';
	});
}

function funcionarBotaoStorage() {
	botaoStorage.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis
		localStorage.clear();

		if (lis.length !== 0) { // se tem alguma li criada
			for (let i = 0; i < lis.length; i += 1) {
				localStorage.setItem(i, lis[i].outerHTML);
			}
		}
	});

}

function funcionarBotaoCima() {
	botaoMoverCima.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis

		for (let i = 0; i < lis.length; i += 1) {
			if (lis[i].classList.contains('selected')) { //achou o select
				if (i !== 0) {
					const itemAnterior = lis[i - 1].outerHTML;
					lis[i - 1].outerHTML = lis[i].outerHTML;
					lis[i].outerHTML = itemAnterior;
					for (let i = 0; i < lis.length; i += 1) {
						funcionarSelect(lis[i]);
						funcionarCompleted(lis[i]);
					}
					break;
				}
			}
		}
	});
}

function funcionarBotaoBaixo() {
	botaoMoverBaixo.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis

		for (let i = 0; i < lis.length; i += 1) {
			if (lis[i].classList.contains('selected')) { // achou o select
				if (i !== lis.length - 1) {
					const itemProx = lis[i + 1].outerHTML;
					lis[i + 1].outerHTML = lis[i].outerHTML;
					lis[i].outerHTML = itemProx;

					for (let i = 0; i < lis.length; i += 1) {
						funcionarSelect(lis[i]);
						funcionarCompleted(lis[i]);
					}
					break;
				}
			}
		}
	});
}

function funcionarBotaoRemoverSelecionado() {
	botaoRemoverSelecionado.addEventListener('click', function () {
		const lis = document.getElementsByTagName('li'); // todas as lis

		for (let i = 0; i < lis.length; i += 1) {
			if (lis[i].classList.contains('selected')) {
				lis[i].remove();
			}
		}
	});
}

function LerLocalStorage() {
	const storageLi = document.createElement('li');

	for (let i = 0; i < localStorage.length; i += 1) {
		listaTarefas.appendChild(storageLi);
		storageLi.outerHTML = localStorage[i];
	}
	// recriou tudo, agora adicionar o SELECT e COMPLETED
	let lis = document.getElementsByTagName('li'); // todas as lis

	for (let i = 0; i < lis.length; i += 1) {
		funcionarSelect(lis[i]);
		funcionarCompleted(lis[i]);
	}
}

window.onload = function () {
	funcionarInput();
	funcionarBotaoCompleted();
	funcionarBotaoApaga();
	funcionarBotaoCima();
	funcionarBotaoBaixo();
	funcionarBotaoRemoverSelecionado();

	funcionarBotaoStorage();
	LerLocalStorage();
};
