import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food=getFoodRandomPosition(); 
let EXPANSION_RATE=2;
/*
document.getElementById('expand').oninput=function(){
    console.log(document.getElementById('expand').value);
    EXPANSION_RATE=document.getElementById('expand').value;
}
*/
export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food=getFoodRandomPosition();
    }
    



}
export function draw(gameBoard){
    
        const foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add("food")
        gameBoard.appendChild(foodElement);


}

function getFoodRandomPosition(){
    let newFoodPosition;
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition=randomGridPosition()
    }
    return newFoodPosition;
}
