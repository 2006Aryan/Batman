class Drop{

    constructor(x,y){
        var options = {
            isState: false,
            restitution: 1,
            friction: 0,
            density: 1,

        }
        this.body = Bodies.rectangle(x,y,3,5,options);
        World.add(world,this.body);

        console.log(this.body);

    }

    updateY() {
        if(this.body.position.y>650) {
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,700)})
        }
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill('lightblue');
        noStroke();
        ellipse(this.body.position.x,this.body.position.y,2,2);
        pop();
    }
}