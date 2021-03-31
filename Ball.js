class Ball {
    constructor(x, y, r){
        var options = {
            frictionAir : 0.005,
            density : 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(MyWorld, this.body);
    }  
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("grey");
        stroke("white");
        strokeWeight(5);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}