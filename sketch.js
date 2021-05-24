const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bees;
var bi1, bi2, bi3;
var timg, tree;
var honey1;


function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    bi1 = loadImage("images/bee1.png");
    bi2 = loadImage("images/bee2.png");
    bi3 = loadImage("images/bee3.png");

    mowgliImg = loadImage("images/balloo_and_mowgli.png");
    timg = loadImage("images/tree.png");
}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    mowgli = createSprite(240, 400, 100, 200);
    mowgli.addImage(mowgliImg);
    mowgli.scale = 0.65;

    ground = new Ground(displayWidth/2, displayHeight - 120, displayWidth, 10);

    tree = createSprite(displayWidth - 100, displayHeight/2 - 90, 100, 500);
    tree.addImage(timg);
    tree.scale = 1.3;

    honey1 = new Honey(990, 200, 70);
    honey2 = new Honey(1000, 100, 30);
    honey3 = new Honey(1050, 280, 50);
    honey4 = new Honey(1200, 250, 80);
    honey5 = new Honey(1500, 230, 60);
    honey6 = new Honey(1800, 200, 90);
    honey7 = new Honey(1180, 65, 70);
    honey8 = new Honey(1100, 180, 50);
    honey9 = new Honey(1230, 140, 20);
    honey10 = new Honey(1070, 68, 40);
    honey10 = new Honey(950, 355, 80);

}

function draw(){
    background(backgroundImg);
    fill("red");
    text(mouseX + "," + mouseY, width/2, height/2);
    Engine.update(engine);
    
    spawnBees();
    drawSprites();
    honey1.display();
    honey2.display();
    honey3.display();
    honey4.display();
    honey5.display();
    honey6.display();
    honey7.display();
    honey8.display();
    honey9.display();
    honey10.display();
    ground.display();
}

function spawnBees() {
    if(frameCount%75 === 0) {
        bees = createSprite(920, 365, 10, 10);
        bees.addImage(bi1);
        bees.y = Math.round(random(306, 395))
        bees.scale = 0.08;
        bees.velocityX = -7;
    }
    
    if(frameCount%55 === 0) {
        bee1 = createSprite(960, 206, 10, 10);
        bee1.addImage(bi2);
        bee1.y = Math.round(random(160, 250))
        bee1.scale = 0.08;
        bee1.velocityX = -5;
    }

    if(frameCount%65 === 0) {
        bee1 = createSprite(1179, 258, 10, 10);
        bee1.addImage(bi3);
        bee1.y = Math.round(random(191, 303))
        bee1.scale = 0.08;
        bee1.velocityX = -6;
    }
}



