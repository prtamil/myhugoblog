---
title: Javascript Canvas Bouncing Balls
date: 2016-11-19T12:46:43+12:30
categories: ["Javascript"]
tags: ["programming","javascript","graphics"]
draft: false
---
### Javascript Canvas tutorial
This is my first javascript canvas demo. We will discuss about how to building it.

<div>
     <canvas width="300px" height="200px" style="display:none" id='a'> no canvas </canvas>
     <button onclick="clicker()">Toggle Demo</button>
</div>
<script src="../assets/demos/bounce/vector.js"></script>
<script src="../assets/demos/bounce/mover.js"></script>
<script src="../assets/demos/bounce/bounce.js"></script>

#### Lets start with Simple Vector Class


```javascript
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
```

Vector class adds methods such as 

>
+ add()
+ multiplyScalar()
+ getMagnitude()
+ getAngle()
    * Gets Angle from current position
+ fromAngle 
    * Gets Current Position vector from Angle and Magnitude


#### Movers Class
 Movers are objects. I called it as movers. You can rename it as objects.
 The main purpose of it is to handle objects movement.
 Each movers has

+ Velocity
+ Location
+ Direction

And we can define current movement as 

>   Position = Location + Velocity

Since this is Bouncing balls once it reaches the boundary we can switch direction

```javascript

function Mover(x,y) {
    this.location = new Vector(x,y);
    this.velocity = new Vector(1,1);
    this.direction = 1;
}

Mover.prototype.update = function(){
    this.location.add(this.velocity);
    
}

Mover.prototype.checkBounds = function(){
    if(this.location.x < 0 || this.location.x > window.innerWidth)
        this.velocity.x *= -this.direction;
    if(this.location.y < 0 || this.location.y > window.innerHeight)
        this.velocity.y *= -this.direction;
}
Mover.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.location.x, this.location.y,20,0,2*Math.PI);
    ctx.fillStyle = "#0f0";
    ctx.fill();
}
```

#### Drawing Part.

Now the drawing part. we use
```
requestAnimationFrame
```
function to Draw the sequences on each and every frame.
We define a Animation Loop with following logic

+ clear();
+ update();
+ draw();
+ queue();

So The Final Code 

```javascript


window.onload = function () {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    

    
    var movers = [];
    var moverCount = 10;
    
    for(var i = 0; i < moverCount; i++){
        var m = new Mover(Math.random()*100, Math.random()*100);
        m.velocity = new Vector(Math.random()*15, Math.random()*15);
        movers.push(m);
    }
    
    function loop() {
        clear();
        update();
        draw();
        queue();
    }

    function clear() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function update() {
        movers.map(function(m){
            m.update();
            m.checkBounds();
        });
    }
    

    function draw() {
       movers.map(function(m){
           m.draw(ctx);
       });
    }

    function queue() {
        window.requestAnimationFrame(loop);
    }
    
    loop();
}
```
So this defines the basic Javascript Canvas Demo
