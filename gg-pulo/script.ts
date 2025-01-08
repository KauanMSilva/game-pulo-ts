
const larguraTela = 400;
const alturaTela = 600;
const larguraPersonagem = 50;
const alturaPersonagem = 50;
const velocidade = 5;
const gravidade = 0.5;


let x = larguraTela / 2;
let y = alturaTela / 2;
let vy = 0;
let plataformaY = alturaTela - 50;
let pulando = false;


const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;


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


function lidarComTeclas(event: KeyboardEvent) {
  if (event.key === ' ') {
    if (!pulando) {
      vy = -15;
      pulando = true;
    }
  }
}

document.addEventListener('keydown', lidarComTeclas);


setInterval(atualizar, 16);
