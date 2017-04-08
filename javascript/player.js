class Player{
    constructor(ctx, playerImg, score){
        this.ctx = ctx;
        this.y = 580;
        this.x = 750;
        this.sX = 0;
        this.run = 60;
        this.jump = 140;
        this.width = 50;
        this.height = 53;
        this.diff = 0;
        this.incr = 0;
        this.down = true;
        this.acceleration = 0;
        this.img = playerImg;
        this.score = score;
        document.addEventListener('keydown', e => {
            if(e.keyCode === 38){
                this.acceleration = 150;
                this.score.innerHTML = Number(this.score.innerHTML) - 100;
            }else if(e.keyCode === 39){
                this.sX = 197;
                this.run = 0;
            }else if(e.keyCode === 37){
                this.sX = 0;
                this.run = 0;
            }
        });
    }
    update (lines, fire){
        if(fire.x <= this.x+this.width&&fire.x >= this.x&&this.y <= fire.y&&this.y+this.height >= fire.y&&fire.explosion){
            fire.explosion = false;
            this.x -= 70;
            this.score.innerHTML = Number(this.score.innerHTML) - 100;
        }
        lines.some((line, i) => {
            if(line.posX < this.x+this.width&&line.posX+line.lineWidth > this.x&&line.posY <= this.y&&line.posY+8 >= this.y&&this.down&&i < 7){
                this.jump = 0;
                if(line.lineJump === 'trampoline'){
                    this.acceleration = 320;
                }else if(line.lineJump === 'disappear'&&line.disappear < 2){
                    this.acceleration = 0;
                    line.disappear++;
                }else if(line.lineJump === 'score'){
                    this.acceleration = 0;
                    line.sX = 0;
                    line.lineJump = '';
                    this.score.innerHTML = Number(this.score.innerHTML) + 50;
                }else if(line.lineJump === 'disappear'&&line.disappear >= 2){
                    this.acceleration = 0;
                    lines.splice(i, 1);
                    return true;
                }else{
                    this.acceleration = 0;
                }
                lines.some(line1 => {
                    if(this.diff <= 0&&line1.posY > line.posY){
                        this.diff = line1.posY - line.posY;
                        this.incr = 2;
                        return true;
                    }
                    this.diff = 0;
                });
                return true;
            }
        });
        if(this.diff >= 0){
            this.diff -= this.incr;
        }
        if(this.jump <= this.acceleration+120){
            this.y -= 8 + this.incr;
            this.jump += 8 + this.incr;
            this.down = false;
        }else if(this.jump <= this.acceleration+160){
            this.y -= 6 + this.incr;
            this.jump += 6 + this.incr;
        }else{
            this.down = true;
            this.y += 6 + this.incr;
        }
        if(this.run <= 60&&this.sX === 197&&this.x >= 824){
            this.x = 424;
            this.run += 2;
        }else if(this.run <= 60&&this.sX === 0&&this.x <= 424-this.width){
            this.x = 824;
            this.run += 2;
        }else if(this.run <= 60&&this.sX === 197&&this.x <= 824){
            this.x += 4;
            this.run += 2;
        }else if(this.run <= 60&&this.sX === 0&&this.x >= 424-this.width){
            this.x -= 4;
            this.run += 2;
        }
    }
    render (){
        this.ctx.drawImage(this.img, this.sX, 0, 197, 193, this.x, this.y-this.height, this.width, this.height);
    }
}

export {Player};
