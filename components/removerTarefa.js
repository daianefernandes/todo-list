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

export default BotaoRemover