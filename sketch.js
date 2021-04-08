var canvas;
var music;
var box ;
var surface1,surface2,surface3,surface4;
box.velocityY = 4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(200,50,20,20)
    //create 4 different surfaces
     surface1 = createSprite(200,30,50,20)
     surface2 = createSprite(200,30,50,20)
     surface3 = createSprite(200,30,50,20)
     surface4 = createSprite(200,30,50,20)
    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();



    //add condition to check if box touching surface and make it box
}
