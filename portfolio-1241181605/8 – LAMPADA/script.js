const modo = document.getElementById('lamp');
const fundo = document.body;

modo.addEventListener("click", function() {
    console.log(modo.src)

    if (modo.src.endsWith("lamp_off.png")){
        modo.src = "assets/lamp_on.png";
        modo.alt = "Lâmpada acesa";
        fundo.style.background = "radial-gradient(circle, white 8%, yellow 100%)";

    }
    else{
        modo.src = "assets/lamp_off.png";
        modo.alt = "Lâmpada apagada";
        fundo.style.background = "radial-gradient(circle, white 8%, black 100%)";
    }
    
} )