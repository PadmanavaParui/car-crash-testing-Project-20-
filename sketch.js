// the global variable declaration
var car, wall;
var speed, weight;

//the setup function
function setup() {
  // creatign the canvas
  createCanvas(1400,400);

  // initializing the speed
  speed = random(55, 90);

  // initializing the weight
  weight = random(400, 1500);

  // creating the car sprite
  car = createSprite(50, 200, 50, 50);
  // setting the car speed same as the value of the speed variable
  car.velocityX = speed;

  // creating the wall
  wall = createSprite(1300, 200, 60, height/2);
  wall.shapeColor = "grey";
}

//the draw function
function draw() {
  //setting the background colour
  background(0,0,0);  

  // detectiing the colision
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }

    else if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }

    else if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

    else{
      car.shapeColor ="white";
    }
  }

  //displaying the sprites
  drawSprites();
}