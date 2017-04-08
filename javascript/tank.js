class Tank {
	constructor(ctx, tankImg, fire) {
		this.ctx = ctx;
		this.img = tankImg;
		this.x = 1060;
		this.y = 310;
		this.sX = 0;
		this.sY = 508;
		this.width = 145;
		this.height = 127;
		this.resolve = 'up';
		this.time = 0;
		this.waitTime = 0;
		this.fire = fire;
	}
	update() {
		if(this.sY <= 0){
			wait.call(this, 'down');
		}else if(this.sY >= 508){
			wait.call(this, 'up');
		}
		if(this.resolve === 'up'){
			this.sY -= 127;
		}else if(this.resolve === 'down'){
			this.sY += 127;
		}
        function wait(direction) {
            if (this.waitTime <= 300) {
                if(this.sY <= 0){
                    this.fire.update();
                }
                this.resolve = 'wait';
                this.waitTime += 2;
            }else{
				this.waitTime = 0;
				this.resolve = direction;
				this.fire.disappear();
            }
        }
	}
	render() {
		this.ctx.drawImage(this.img, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width, this.height);
		this.fire.render();
	}
}

export {Tank};