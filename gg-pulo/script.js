
var larguraTela = 400;
var alturaTela = 600;
var larguraPersonagem = 50;
var alturaPersonagem = 50;
var velocidade = 5;
var gravidade = 0.5;

var x = larguraTela / 2;
var y = alturaTela / 2;
var vy = 0;
var plataformaY = alturaTela - 50;
var pulando = false;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function desenharPersonagem() {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x, y, larguraPersonagem, alturaPersonagem);
}

function desenharPlataforma() {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, plataformaY, larguraTela, 50);
}

function atualizar() {
    ctx.clearRect(0, 0, larguraTela, alturaTela);
    
    vy += gravidade;
   
    y += vy;
   
    if (y + alturaPersonagem >= plataformaY) {
        y = plataformaY - alturaPersonagem;
        vy = 0;
        pulando = false;
    }
    
    desenharPersonagem();
    desenharPlataforma();
}

function lidarComTeclas(event) {
    if (event.key === ' ') {
        if (!pulando) {
            vy = -15;
            pulando = true;
        }
    }
}

document.addEventListener('keydown', lidarComTeclas);

setInterval(atualizar, 16);
