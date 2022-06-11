const tasksTxt = document.getElementById('texto-tarefa');
const buttonCreateTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

const createLiWithText = () => {
  const li = document.createElement('li');
  li.className = 'tarefas';
  li.innerHTML = tasksTxt.value;
  li.addEventListener('click', () => {
    li.style.backgroundColor = 'gray';
  });
  ol.appendChild(li);
  tasksTxt.value = '';
};

buttonCreateTasks.addEventListener('click', createLiWithText);
