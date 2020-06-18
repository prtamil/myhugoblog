function Mover(x,y) {
    this.location = new Vector(x,y);
    this.velocity = new Vector(1,1);
    this.direction = 1;
}

Mover.prototype.update = function(){
    this.location.add(this.velocity);
    
}

Mover.prototype.checkBounds = function(width, height){
    if(this.location.x < 0 || this.location.x > width)
        this.velocity.x *= -this.direction;
    if(this.location.y < 0 || this.location.y > height)
        this.velocity.y *= -this.direction;
}
Mover.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.location.x, this.location.y,20,0,2*Math.PI);
    ctx.fillStyle = "#0f0";
    ctx.fill();
}
