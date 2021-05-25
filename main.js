import BotaoConcluir from './components/concluirTarefa.js';
import BotaoRemover from './components/removerTarefa.js';

const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form__input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoRemover());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form__button]');

novaTarefa.addEventListener('click', criarTarefa);