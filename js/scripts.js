
/*document.querySelector('#logo-png').addEventListener("onload", deslocaLogo);*/
/*document.querySelector('#logo-move').addEventListener("mouseout", voltaLogo);*/

var logo = document.querySelector('#logo-png');
var letr = document.querySelector('#logo-letras');
var creative = document.querySelector('#creative');

function deslocaLogo(){
    logo.style.marginLeft = "-10%";
    logo.style.transition = "all 1s";
    setTimeout(mostraLetra, 1200);
}

function mostraLetra(){
    letr.style.marginLeft = "0%";
    letr.style.transition = "all 1s";
    creative.style.display = "flex";
        }



