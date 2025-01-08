// Configurações
var larguraTela = 400;
var alturaTela = 600;
var larguraPersonagem = 50;
var alturaPersonagem = 50;
var velocidade = 5;
var gravidade = 0.5;
// Variáveis
var x = larguraTela / 2;
var y = alturaTela / 2;
var vy = 0;
var plataformaY = alturaTela - 50;
var pulando = false;
// Inicializar canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Função para desenhar personagem
function desenharPersonagem() {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x, y, larguraPersonagem, alturaPersonagem);
}
// Função para desenhar plataforma
function desenharPlataforma() {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, plataformaY, larguraTela, 50);
}
// Função para atualizar jogo
function atualizar() {
    ctx.clearRect(0, 0, larguraTela, alturaTela);
    // Gravidade
    vy += gravidade;
    // Movimento vertical
    y += vy;
    // Colisão com plataforma
    if (y + alturaPersonagem >= plataformaY) {
        y = plataformaY - alturaPersonagem;
        vy = 0;
        pulando = false;
    }
    // Desenhar elementos
    desenharPersonagem();
    desenharPlataforma();
}
// Função para lidar com teclas
function lidarComTeclas(event) {
    if (event.key === ' ') {
        if (!pulando) {
            vy = -15;
            pulando = true;
        }
    }
}
// Adicionar eventos
document.addEventListener('keydown', lidarComTeclas);
// Loop do jogo
setInterval(atualizar, 16);
