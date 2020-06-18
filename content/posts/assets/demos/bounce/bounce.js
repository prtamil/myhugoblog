

window.clicker = function () {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
  console.log("canvas => ", canvas.style.display) 
    if (canvas.style.display === "none") {
        canvas.style.display="block";
        canvas.hidden = false;
    } else {
        canvas.style.display="none"
        canvas.hidden = true;
    }

    canvas.width = 300;
    canvas.height = 300;
    

    
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
        w = canvas.width
        h = canvas.height
        movers.map(function(m){
            m.update();
            m.checkBounds(w,h);
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
if(canvas.style.display!=="none") {
    loop();
}
}
