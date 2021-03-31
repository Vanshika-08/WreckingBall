class Rope{
    constructor(body1, point1){
        var options = {
            bodyA : body1,
            pointB : point1,
            stiffness : 0.9,
            length : 260
        }
        this.pointB = point1;
        this.rope = Constraint.create(options);
        World.add(MyWorld, this.rope); 
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke("grey");
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}