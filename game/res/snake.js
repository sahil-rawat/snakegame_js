import { getInputDirection } from "./input.js ";

export let SNAKE_SPEED=document.getElementById('speed_r').value;
document.getElementById('speed_r').oninput=function(){
    SNAKE_SPEED=document.getElementById('speed_r').value;
}
console.log(document.getElementById('speed_r').value);
const snakeBody=[{x:11,y:11 }];
let newSegments=0; 

export function update(){
    addSegments()
    const inputDirection=getInputDirection()
    for(let i=snakeBody.length -2;i>=0;i--){
        snakeBody[i+1]={ ...snakeBody[i] };
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
    
}
export function draw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement);

    })
}

export function expandSnake(num){
    newSegments+=num
}

export function onSnake(pos,{ignoreHead= false}={}){
    return snakeBody.some((segments,index)=>{
        if(ignoreHead && index===0) return false
        return equalP(segments,pos);
    })
}
function equalP(pos1,pos2){

    return(
        pos1.x==pos2.x && pos1.y==pos2.y
    )
}

function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegments=0 ;
}

export function getSnakeHead(){
    return(
        snakeBody[0]
    )

}

export function snakeIntersect(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}