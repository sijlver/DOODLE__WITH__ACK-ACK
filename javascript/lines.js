class Lines{
    constructor(ctx, lineImg, x=0, y=0, sX=0, sY=12, sHeight=16, lineJump){
        this.ctx = ctx;
        this.sX = sX;
        this.sY = sY;
        this.sHeight = sHeight;
        this.posY = y;
        this.posX = x;
        this.lineWidth = 80;
        this.lineHeight = sHeight;
        this.lineJump = lineJump;
        this.disappear = 1;
        this.img = lineImg;
    }
    update (incr=2){
        this.posY += incr;
    }
    render () {
        this.ctx.drawImage(this.img, this.sX, this.sY, 57, this.sHeight, this.posX, this.posY, this.lineWidth, this.lineHeight);
    }
}

export {Lines};
