const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img,polygon;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,595,1200,10);
    ground2=new Ground(400,459,200,10);
    ground3=new Ground(700,309,180,10);

    block1=new Block(327,458,25,35);
    block2=new Block(350,458,25,35);
    block3=new Block(375,458,25,35);
    block4=new Block(400,458,25,35);
    block5=new Block(425,458,25,35);
    block6=new Block(450,458,25,35);
    block7=new Block(475,458,25,35);
    block8=new Block(352,405,25,35);
    block9=new Block(375,405,25,35);
    block10=new Block(400,405,25,35);
    block11=new Block(425,405,25,35);
    block12=new Block(450,405,25,35);
    block13=new Block(375,355,25,35);
    block14=new Block(400,355,25,35);
    block15=new Block(425,355,25,35);
    block16=new Block(400,345,25,35);
    block17=new Block(655,308,25,35);
    block18=new Block(675,308,25,35);
    block19=new Block(700,308,25,35);
    block20=new Block(725,308,25,35);
    block21=new Block(748,308,25,35);
    block22=new Block(675,240,25,35);
    block23=new Block(700,240,25,35);
    block24=new Block(725,240,25,35);
    block25=new Block(700,200,25,35);

    polygon=Bodies.circle(50,200,5);
    World.add(world,polygon);
 
    slingshot=new Slingshot(this.polygon,{x:200,y:400})

}

function draw(){
    background("blue");
    Engine.update(engine);
    
    ground.display();   
    ground2.display();   
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    slingshot.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
