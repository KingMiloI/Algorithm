var moving, fix;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 80);
  fix.shapeColor = "red";
  moving = createSprite(400, 800, 80, 30);
  moving.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  console.log(moving.x - fix.x);
  if(moving.x - fix.x < fix.width / 2 + moving.width / 2 && moving.y - fix.y < fix.height / 2 + moving.height / 2 && fix.x - moving.x < fix.width / 2 + moving.width / 2 && fix.y - moving.y < fix.height / 2 + moving.height / 2){
    fix.shapeColor = "blue";
    moving.shapeColor = "blue";
  }
  else{
    fix.shapeColor = "red";
    moving.shapeColor = "red";
  }
  drawSprites();
}