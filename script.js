const olElement = document.getElementById( 'lista-tarefas' );
const removeAllTasksButton = document.getElementById( 'apaga-tudo' );
const createTaskButton = document.getElementById( 'criar-tarefa' );
const removeCompletedTasksButton = document.getElementById(
  'remover-finalizados'
);
const removeSelectedTasksButton = document.getElementById(
  'remover-selecionado'
);
const moveUpSelectedTaskButton = document.getElementById( 'mover-cima' );
const moveDownSelectedTaskButton = document.getElementById( 'mover-baixo' );
const saveStatusButton = document.getElementById( 'salvar-tarefas' );
const localStorageList = localStorage.getItem( 'toDoList' );

if ( localStorageList )
{
  document.getElementById( 'lista-tarefas' ).innerHTML = localStorageList;
}

function selectedTask ( event )
{
  const liSelectedTask = event.target;
  if ( document.querySelector( '.selectedTask' ) )
  {
    if ( liSelectedTask.classList.contains( 'selectedTask' ) )
    {
      liSelectedTask.classList.remove( 'selectedTask' );
    } else
    {
      document.querySelector( '.selectedTask' ).classList.remove( 'selectedTask' );
      liSelectedTask.classList.add( 'selectedTask' );
    }
  } else
  {
    liSelectedTask.classList.add( 'selectedTask' );
  }
}

function completedTask ( event )
{
  const liCompletedTask = event.target;
  if ( liCompletedTask.classList.contains( 'completed' ) )
  {
    liCompletedTask.classList.remove( 'completed' );
  } else
  {
    liCompletedTask.classList.add( 'completed' );
  }
}

function createTask ()
{
  const liElement = document.createElement( 'li' );
  const task = document.getElementById( 'texto-tarefa' ).value;
  liElement.className = 'texto-tarefa-item';
  liElement.innerHTML = task;
  olElement.appendChild( liElement );
  document.getElementById( 'texto-tarefa' ).value = '';
}

function removeAllTasks ()
{
  const liElements = document.getElementsByTagName( 'li' );
  for ( let i = liElements.length - 1; i >= 0; i -= 1 )
  {
    liElements[ i ].remove();
  }
}

function removeCompletedTasks ()
{
  const liCompleted = document.querySelectorAll( '.completed' );
  for ( let i = liCompleted.length - 1; i >= 0; i -= 1 )
  {
    liCompleted[ i ].remove();
  }
}

function removeSelectedTasks ()
{
  if ( document.querySelector( '.selectedTask' ) !== null )
  {
    document.querySelector( '.selectedTask' ).remove();
  }
}

function moveUpSelectedTask ()
{
  if ( document.querySelector( '.selectedTask' ) !== null )
  {
    const elementValue = document.querySelector( '.selectedTask' );
    const liElement = document.getElementsByTagName( 'li' );
    for ( let index = 0; index < liElement.length; index += 1 )
    {
      if ( elementValue.innerHTML === liElement[ index ].innerHTML )
      {
        if ( index > 0 )
        {
          const elementAux = liElement[ index - 1 ].innerHTML;
          const elementClassAux = liElement[ index - 1 ].className;
          liElement[ index - 1 ].innerHTML = liElement[ index ].innerHTML;
          liElement[ index - 1 ].className = liElement[ index ].className;
          liElement[ index ].innerHTML = elementAux;
          liElement[ index ].className = elementClassAux;
        }
      }
    }
  }
}

function moveDownSelectedTask ()
{
  if ( document.querySelector( '.selectedTask' ) !== null )
  {
    const elementValue = document.querySelector( '.selectedTask' );
    const liElement = document.getElementsByTagName( 'li' );
    for ( let index = 0; index < liElement.length; index += 1 )
    {
      if ( elementValue.innerHTML === liElement[ index ].innerHTML )
      {
        if ( index < liElement.length - 1 )
        {
          const elementAux = liElement[ index + 1 ].innerHTML;
          const elementClassAux = liElement[ index + 1 ].className;
          liElement[ index + 1 ].innerHTML = liElement[ index ].innerHTML;
          liElement[ index + 1 ].className = liElement[ index ].className;
          liElement[ index ].innerHTML = elementAux;
          liElement[ index ].className = elementClassAux;
        }
      }
    }
  }
}

function saveStatus ()
{
  const taskList = document.getElementById( 'lista-tarefas' );
  localStorage.setItem( 'toDoList', taskList.innerHTML );
}

olElement.addEventListener( 'click', selectedTask );
olElement.addEventListener( 'dblclick', completedTask );
createTaskButton.addEventListener( 'click', createTask );
removeAllTasksButton.addEventListener( 'click', removeAllTasks );
removeCompletedTasksButton.addEventListener( 'click', removeCompletedTasks );
removeSelectedTasksButton.addEventListener( 'click', removeSelectedTasks );
moveUpSelectedTaskButton.addEventListener( 'click', moveUpSelectedTask );
moveDownSelectedTaskButton.addEventListener( 'click', moveDownSelectedTask );
saveStatusButton.addEventListener( 'click', saveStatus );
