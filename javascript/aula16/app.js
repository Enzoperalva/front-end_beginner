let tarefas = 0

function adicionar() {
    let addtask = document.getElementById('taskInput')
    let status = document.getElementById('stats')
    let lista = document.getElementById('taskList')
    let excloe = document.createElement('input')
    excloe.setAttribute('type', 'button');
    excloe.setAttribute('value', 'Excluir')

    if (addtask.value.length == 0) {
        window.alert('[ERRO]! Verifique os dados.')
    } else {
        tarefas++
        status.innerText = `Você tem ${tarefas} tarefas, sendo 0 concluídas`
        lista.innerHTML += `${addtask.value, excloe.value} <br>`
    }
}