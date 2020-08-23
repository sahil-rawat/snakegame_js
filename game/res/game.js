import {SNAKE_SPEED,update as updateSnake,draw as drawSnake,getSnakeHead,snakeIntersect} from './snake.js';
import {update as updateFood,draw as drawFood} from './food.js';
import { outsideGrid } from "./grid.js";
let lastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById('game')

 function main(currentTime){
     if(gameOver){
         if(confirm("YOU LOSE Press OK to Restart")){
             window.location='/'
         }
         return 
     }
    window.requestAnimationFrame(main);
    const timeSinceRender=(currentTime-lastRenderTime)/1000
    if(timeSinceRender < 1/SNAKE_SPEED) return
    lastRenderTime=currentTime;
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()

}
function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard) 
}

function checkDeath(){
    gameOver=outsideGrid(getSnakeHead())||snakeIntersect(); 
}

