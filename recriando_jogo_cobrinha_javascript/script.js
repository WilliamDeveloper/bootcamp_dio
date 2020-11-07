const tecla_seta_direita_37=37;
const tecla_seta_baixo_38=38;
const tecla_seta_esquerda_39=39;
const tecla_seta_cima_40=40;

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x : 8 * box,
  y : 8 * box
};

let score = 0;
let direction = 'right';

function criarBG(){
  context.fillStyle = "green";
  context.fillRect(0, 0, 16 * box, 16 * box);  
}

function criarCobrinha(){
  for(let i = 0; i < snake.length; i++){
    context.fillStyle = "black";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener('keydown',update);

function update(event){
  
  if(event.keyCode == tecla_seta_direita_37 && direction != "right") direction = 'left';
  if(event.keyCode == tecla_seta_baixo_38 && direction != "down") direction = 'up';  
  if(event.keyCode == tecla_seta_esquerda_39 && direction != "left") direction = 'right';
  if(event.keyCode == tecla_seta_cima_40 && direction != "up") direction = 'down';

  console.log('direction ',direction);

}

function iniciarJogo(){
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if( direction == 'right') snakeX += box;
  if( direction == 'left') snakeX -= box;
  if( direction == 'up') snakeY -= box;
  if( direction == 'down') snakeY += box;

  snake.pop();
  
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
  // snake.push(newHead);

}



let jogo = setInterval(iniciarJogo,100);

// iniciarJogo();