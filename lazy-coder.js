const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  2: 'createElement',
};

const TAGS = {
  0: '#texto-tarefa',
  1: '#criar-tarefa',
  2: '#lista-tarefas',
  3: '#generate-board',
  4: '.input-text',
  5: '#apaga-tudo',
  6: '.tarefas',
  7: '#remover-finalizados',
  8: '#remover-selecionado',
  9: '#mover-cima',
  10: '#mover-baixo',
  11: '.selected',
  12: '#salvar-tarefas',
  13: 'li',
};

function lazyCoder(keyMethod, keyDiv) {
  return document[`${METHODS[keyMethod]}`](TAGS[keyDiv]);
}

export default lazyCoder;
