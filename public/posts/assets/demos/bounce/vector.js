function Vector(x,y){
    this.x = x || 0;
    this.y = y || 0;
}

//Add another vector
Vector.prototype.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
}

//multiply with scalar
Vector.prototype.multiplyScalar = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
}
//Get Length of vector
Vector.prototype.getMagnitude = function() {
    return Math.sqrt(this.x * this.x + this. y * this.y);
}

//Get the angle accounting for the quadrant we are in
Vector.prototype.getAngle = function(){
    return Math.atan2(this.y, this.x);
}

//Allows us to get a new vector from angle magnitude
Vector.fromAngle = function(angle, magnitude) {
    return new Vector(magnitude* Math.cos(angle),
                      magnitude* Math.sin(angle));
}