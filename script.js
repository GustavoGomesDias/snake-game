/* Pega o ID */
let canvas = document.getElementById("snake");

/* O contexto renderiza o desenho que aconte no canvas. 2D => trata como 2D */
let context = canvas.getContext("2d");

let box = 32;

let snake = [];

// Cria a cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

/* Criar background */
function criarBG(){
    /* Trabalha com o estilo do nosso contexto */
    context.fillStyle = "lightgreen";

    /* Desenha onde acontece o jogo. Trabalaho com 4 parâmetros (x, y, altura e largura. Vaiter o tamanho de 16 quadradinhos de 32px) */
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";

        /* Aqui ela vai ter o tamanho de um quadradinho e vai ander por x e y, com relação a iteração. Ou seja, i igual a 1, a cobra vai tá em x = 1 e y = 1*/
        context. fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    createSnake();

    /* Posição de ponto de partida */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /* 
    Acrescenta um quadrado a mais na direção 
    Plano cartesiano => right +, left -.
    */
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}


/* A cada 100 milisegundos o jogo é renovado */
let jogo = setInterval(iniciarJogo, 100);

/* Cobra é um array de coordenadas. */
/* unshift => adiciona um ou mais ele no início de um array e retorna length atualizado */