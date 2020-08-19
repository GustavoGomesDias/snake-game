/* Pega o ID */
let canvas = document.getElementById("snake");

/* O contexto renderiza o desenho que aconte no canvas. 2D => trata como 2D */
let context = canvas.getContext("2d");

let box = 32;

function criarBG(){
    /* Criar background */

    /* Trabalha com o estilo do nosso contexto */
    context.fillStyle = "lightgreen";

    /* Desenha onde acontece o jogo. Trabalaho com 4 parâmetros (x, y, altura e largura. Vaiter o tamanho de 16 quadradinhos de 32px) */
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();