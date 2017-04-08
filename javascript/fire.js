class Fire{
	constructor(ctx, img) {
		this.ctx = ctx;
		this.img = img;
		this.x = 1110;
		this.y = 300;
		this.width = 0;
		this.height = 0;
		this.sX = 0;
		this.sY = 0;
		this.time = 0;
		this.explosion = true;
	}
	update() {
		if(this.x >= 150&&this.explosion){
			this.width = 21;
			this.height = 21;
			this.x = Math.pow(1 - this.time, 2)*1110 + 2*this.time*(1 - this.time)*755 + Math.pow(this.time, 2)*200;
			this.y = Math.pow(1 - this.time, 2)*300 + 2*this.time*(1 - this.time)*(-200) + Math.pow(this.time, 2)*350;
			this.time += 0.008;
		}else{
			this.width = 62;
			this.height = 62;
			this.sX += 62;
		}
    }
    disappear() {
		this.x = 1110;
		this.y = 300;
		this.sX = 0;
		this.width = 0;
		this.height = 0;
		this.time = 0;
		this.explosion = true;
    }
    render() {
        this.ctx.drawImage(this.img, this.sX, this.sY, 62, 62, this.x, this.y, this.width, this.height);
	}
}

export {Fire};
