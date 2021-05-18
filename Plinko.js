class Plinkos{
    constructor(x,y){

        var options ={
            isStatic:true,
            restitution:0.4
        }
        this.radius = 15;
        this.body = Bodies.circle(x,y,this.radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle =this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("red");
        ellipseMode(CENTER);
        ellipse(0,0,15,15);
        pop();
    }
}