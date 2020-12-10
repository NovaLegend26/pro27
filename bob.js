class Bob {
    constructor(x,y){
        var options = {
            'restitution':1,
            'friction':0.01,
            'density':1
        }
        this.body = Matter.Bodies.circle(x, y, 35, options);
        this.diameter = 70
        World.add(world, this.body);
      }      
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("lime")
        circle(0, 0, this.diameter);
        pop();
      }
    } 