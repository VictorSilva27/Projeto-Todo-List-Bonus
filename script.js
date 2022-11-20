const tasksTxt = document.getElementById('texto-tarefa');
const buttonCreateTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const saveAll = document.querySelector('#salvar-tarefas');
const clearDone = document.querySelector('#remover-finalizados');
const clearSelect = document.querySelector('#remover-selecionado');

const salvarLista = () => localStorage.setItem('list', ol.innerHTML);

const getList = () => localStorage.getItem('list');

saveAll.addEventListener('click', salvarLista);

const clearOl = () => {
  ol.innerHTML = '';
};

clearAll.addEventListener('click', clearOl);

const createLiWithText = () => {
  if (tasksTxt.value.length <= 0) {
    return alert('Error, Tarefa vázia');
  }
  const li = document.createElement('li');
  li.innerHTML = tasksTxt.value;
  li.addEventListener('click', (event) => {
    const allLi = document.querySelectorAll('li');
    const color = 'gray';
    allLi.forEach((item) => {
      if (item.style.backgroundColor !== color) {
        event.target.style.backgroundColor = color;
      } else {
        item.style.backgroundColor = 'white';
        event.target.style.backgroundColor = color;
      }
    });
  });
  li.addEventListener('dblclick', () => {
    if (li.className === 'completed') {
      li.className = '';
      li.style.textDecoration = 'none';
    } else {
      clearDone.disabled = false;
      li.className = 'completed';
      li.style.textDecoration = 'line-through solid black';
    }
  });
  ol.appendChild(li);
  tasksTxt.value = '';
};

buttonCreateTasks.addEventListener('click', createLiWithText);

clearDone.addEventListener('click', (event) => {
  event.preventDefault();
  const liDone = document.querySelectorAll('.completed');
  if (liDone.length === 0) {
    clearDone.disabled = true;
    return alert('Error, você ainda não concluiu nenhuma tarefa ');
  }
  liDone.forEach((li) => {
    li.remove();
  });
});

clearSelect.addEventListener('click', () => {
  const li = document.querySelectorAll('li');

  li.forEach((item) => {
    if (item.style.backgroundColor === 'gray') {
      item.remove();
    }
  });
});

window.onload = () => {
  ol.innerHTML = getList();
};
