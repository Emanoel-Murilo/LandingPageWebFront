// Botão de mostrar opções quando tela esta pequena

const navegacao = document.getElementsByTagName('nav')[0]

function mostrarNav(){
    if (navegacao.className === 'esconder' ){
        navegacao.className = '';
    }
    else {
        navegacao.className = 'esconder';
    }
}