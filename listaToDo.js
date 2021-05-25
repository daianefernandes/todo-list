
function ToDoList () {
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
        input.value = "";
    }
    
    const novaTarefa = document.querySelector('[data-form__button]');
    
    novaTarefa.addEventListener('click', criarTarefa);
    
    const BotaoConcluir = () => {
        const botaoConcluir = document.createElement('button');
    
        botaoConcluir.classList.add('check-button');
        botaoConcluir.innerText = 'Concluir';
    
        botaoConcluir.addEventListener('click', (concluirTarefa));
    
        return botaoConcluir;
    } 
    
    const concluirTarefa = (evento) => {
        const botaoConcluir = evento.target;
    
        const tarefaConcluida = botaoConcluir.parentElement;
    
        tarefaConcluida.classList.toggle('done');
    }

    const BotaoRemover = () => {
        const botaoRemover = document.createElement('button');

        botaoRemover.innerText = 'Remover';
        botaoRemover.addEventListener('click', removerTarefa);

        return botaoRemover;
    }

    const removerTarefa = (evento) => {
        const botaoRemover = evento.target;

        const tarefaRemovida = botaoRemover.parentElement;

        tarefaRemovida.remove();

        return botaoRemover;
    }
}

ToDoList();