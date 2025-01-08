// Configurações
const larguraTela = 400;
const alturaTela = 600;
const larguraPersonagem = 50;
const alturaPersonagem = 50;
const velocidade = 5;
const gravidade = 0.5;

// Variáveis
let x = larguraTela / 2;
let y = alturaTela / 2;
let vy = 0;
let plataformaY = alturaTela - 50;
let pulando = false;

// Inicializar canvas
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

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
function lidarComTeclas(event: KeyboardEvent) {
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
