const tasksTxt = document.getElementById('texto-tarefa');
const buttonCreateTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const saveAll = document.querySelector('#salvar-tarefas');

const salvarLista = () => localStorage.setItem('list', ol.innerHTML);

const getList = () => localStorage.getItem('list');

saveAll.addEventListener('click', salvarLista);

const clearOl = () => {
  ol.innerHTML = '';
};

clearAll.addEventListener('click', clearOl);

const createLiWithText = () => {
  const li = document.createElement('li');
  li.innerHTML = tasksTxt.value;
  li.addEventListener('click', () => {
    li.style.backgroundColor = 'gray';
  });
  li.addEventListener('dblclick', () => {
    li.className = 'completed';
    li.style.textDecoration = 'line-through solid black';
  });
  ol.appendChild(li);
  tasksTxt.value = '';
};

buttonCreateTasks.addEventListener('click', createLiWithText);

window.onload = () => {
  ol.innerHTML = getList();
};
