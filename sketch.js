const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var matriz = [1, "vinte e trinta e dois", 3, 4, "dezoito"];

matriz.push("bh");

matriz.pop();

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var linha, bird;
var baladeira1, baladeira2, baladeira3;
var imgbaladeira1, imgbaladeira2, imagbaladeira3;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    imgbaladeira1 = loadImage("sprites/sling1.png");
    imgbaladeira2 = loadImage("sprites/sling2.png");
    imgbaladeira3 = loadImage("sprites/sling3.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);



    box1 = new Box(700, 320 + 280, 70, 70);
    box2 = new Box(920, 320 + 280, 70, 70);
    pig1 = new Pig(820, 590);
    log1 = new Log(810, 260 + 280, 300, PI / 2);
    //constraint = new Log(230, 100, 80, PI / 2);
    pig3 = new Pig(800, 220 + 280);
    box3 = new Box(700, 240 + 280, 70, 70);
    box4 = new Box(920, 240 + 280, 70, 70);


    log3 = new Log(810, 180 + 280, 300, PI / 2);

    box5 = new Box(810, 160 + 280, 70, 70);
    log4 = new Log(760, 120 + 280, 150, PI / 7);
    log5 = new Log(870, 120 + 280, 150, -PI / 7);

    bird = new Bird(100, 100);

    linha = new Slingshot(bird.body, { x: 200, y: 100 });


}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    linha.display();


}



function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });


}
function mouseReleased() {
    linha.fly();


}



async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    if (hour >= 06 && hour <= 19) {
        bg = "sprites/bg1.png";
    }
    else {
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}