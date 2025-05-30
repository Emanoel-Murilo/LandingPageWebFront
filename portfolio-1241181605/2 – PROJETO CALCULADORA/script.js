const tela = document.getElementById('display');
// Botões
var valor = "";

function limparTudo() {
    tela.innerHTML = "";
}

function apagar(){
    tela.innerHTML = tela.innerHTML.slice(0, -1)
}

function numNove(){
    tela.innerHTML += ("9");
}

function numOito(){
    tela.innerHTML += ("8");
}

function numSete(){
    tela.innerHTML += ("7");
}
function numSeis(){
    tela.innerHTML += ("6");
}

function numCinco(){
    tela.innerHTML += ("5");
}

function numQuatro(){
    tela.innerHTML += ("4");
}

function numTres(){
    tela.innerHTML += ("3");
}

function numDois(){
    tela.innerHTML += ("2");
}

function numUm(){
    tela.innerHTML += ("1");
}

function numZero(){
    tela.innerHTML += ("0");
}

function dividir(){;
    tela.innerHTML += ("/")
}

function multiplicar(){
    tela.innerHTML += ("*");
}

function adicionar(){
    tela.innerHTML += ("+");
}

function subtrair(){
    tela.innerHTML += ("-");
}

function decimal(){
    tela.innerHTML += (".")
}

function fazerConta(){
    tela.innerHTML = eval(tela.innerHTML);
}
