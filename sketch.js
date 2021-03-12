var canvas;
var line1 ;
var line2;
var line3;
var music ;
var ball ,by,by1;



function setup(){
    canvas = createCanvas(600,600);

    line1 = createSprite(460,503,20,150)
line1.shapeColor = "cyan"
 line2 = createSprite(580,503,20,150)
line2.shapeColor = "cyan";
line3 = createSprite(520,570,100,20)
line3.shapeColor = "cyan";
ball = createSprite(300,300,30,30);
ball.shapeColor = "lightgreen"
by = createSprite(300,325,70,20);
by.shapeColor = "orange";
by1 = createSprite(300,597,600,40)


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if (mousePressedOver(ball)){
        ball.x = mouseX;
        ball.y = mouseY;
        
    }
    
    if (mouseWentUp("leftButton","rightButton")){
        ball.velocityY= 7
    }
drawSprites();
Text("dustbin",520,570)


ball.collide(line3);
ball.collide(by);
ball.collide(by1);

   
}
