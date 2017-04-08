import {getImg} from './promises';
import {Player} from './player';
import {Lines} from './lines';
import {Fire} from './fire';
import {Tank} from './tank';

Promise.all([getImg('./img/bg.png'), getImg('./img/player.png'), getImg('./img/platforms.png'), getImg('./img/tank.png'), getImg('./img/fire.png')]).then(results => init(...results));

function init(bgImg, playerImg, lineImg, tankImg, fireImg) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const arr = [{x:700, y:580}, {x:720, y:480}, {x:600, y:430}, {x:500, y:380}, {x:620, y:250}, {x:400, y:200}, {x:500, y:100}, {x:620, y:80}, {x:720, y:80}, {x:600, y:20}, {x:400, y:-80}];
    const score = document.getElementById('score');
    const button = document.getElementById('start');
    const continueBlock = document.querySelector('.continue');
    const continueButton = document.getElementById('continueButton');
    const player = new Player(ctx, playerImg, score);
    const fire = new Fire(ctx, fireImg);
    const tank = new Tank(ctx, tankImg, fire);
    let lines = arr.map(obj => new Lines(ctx, lineImg, obj.x, obj.y));
    let lose = false;
    canvas.width = 1200;
    canvas.height = 600;
    
    function randomLine(lines){
        const rand =  Math.round(1+10*Math.random());
        const last = lines[lines.length-1];
        const x = Math.round(400+320*Math.random());
        const y = last.posY - 60*Math.round(1 + Math.random());
        switch(rand){
            case 5:{
                return new Lines(ctx, lineImg, x, y, 118, 0, 28, 'trampoline');
            }
            case 6:{
                return new Lines(ctx, lineImg, x, y, 179, 12, 16, 'disappear');
            }
            case 7:{
                return new Lines(ctx, lineImg, x, y, 59, 0, 28, 'score');
            }
            default:{
                return new Lines(ctx, lineImg, x, y);
            }
        }
    }
    function startFun(e){
        e.target.classList.toggle('start');
        gameLoop();
        e.preventDefault();
    }
    function loseFun(player){
        if(player.y >= 600||Number(score.innerHTML) <= -200){
            continueBlock.style.display = 'block';
            lose = true;
            continueButton.addEventListener('click', function(e){
                e.preventDefault();
                location.reload(true);
            });
        }
    }
    function updateLines(player){
        for(let i = 0;i < lines.length;i++){
            if(lines[i].posY >= canvas.height){
                lines.splice(i,1);
                score.innerHTML = Number(score.innerHTML) + 10;
                lines.push(randomLine(lines));
                lines.push(randomLine(lines));
                break;
            }
            if(player.diff > 0){
                if(player.acceleration){
                    lines[i].update(18);
                }else{
                    lines[i].update();
                }
            }
            lines[i].render();
        }
    }
    function gameLoop() {
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        updateLines(player);
        player.update(lines, fire);
        player.render();
        loseFun(player);
        button.addEventListener('click', startFun);
        if(button.classList.contains('start')&&!lose){
            window.requestAnimationFrame(gameLoop);
        }
        if(Number(score.innerHTML) >= 200){
            tank.update();
        }else if(Number(score.innerHTML) < 200&&tank.sY < 508){
            tank.resolve = 'down';
            tank.update();
        }
        tank.render();
    }
    gameLoop();
}
