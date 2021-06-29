var count=100,drops=[];
var thunder1,thunder2,thunder3,thunder4,thunder,rand,thunderframeCount=0;

const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	
	thunder1=loadImage('images 2/thunderbolt/1.png');
	thunder2=loadImage('images 2/thunderbolt/2.png');
	thunder3=loadImage('images 2/thunderbolt/3.png');
	thunder4=loadImage('images 2/thunderbolt/4.png');

}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	ground= new Ground(400,700,800,50);
	batman = new Batman(400,600,200,250);
	if(frameCount%100===0) {
		for (var i = 0; i < count; i++){
			drops.push(new Drop(random(0,400),random(0,400)));
		}
	}
	Engine.run(engine);
	
}

function draw() {
  
  background("darkblue");
  Engine.update(engine);

	rand = Math.round(random(1,4));
	if(frameCount%80===0){
		thunderframeCount=frameCount;
		thunder=createSprite(random(10,750),random(10,30));
		switch(rand){
			case 1:thunder.addImage(thunder1);
			break;
			case 2:thunder.addImage(thunder2);
			break;
			case 3:thunder.addImage(thunder3);
			break;
			case 4:thunder.addImage(thunder4);
			break;
			default:break

		}
		thunder.scale=random(0.3,0.6);
	}
	if(thunderframeCount+10===frameCount  && thunder){
		thunder.destroy();
	}
    ground.display();
	batman.display();
	for(var i = 0; i < count; i++) {
		drops[i].display();
		drops[i].updateY();
	}
	drawSprites();
}