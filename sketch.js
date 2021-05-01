var bgImg,catImg1,catImg2,catImg3, jerryImg1,jerryImg2,jerryImg3;
var bg, cat, jerry;

function preload() {
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
   
    cat = createSprite(800,650);
    //cat.addAnimation("catRunning",catImg1);

    jerry=createSprite(200,650);
    //jerry.addAnimation("jerryStanding",jerryImg1)
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
