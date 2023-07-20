var car;
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.size(150, 150);
  video.hide();
  flippedVideo = ml5.flipImage(video)
  classifyVideo();
  carImage = loadImage("car.png")
  bg = loadImage("road.jpg")
  car = createSprite(200,200,10,10)
  car.addImage(carImage)
  // car.velocityY =-15
  console.log(car.x)
  camera.on();
  car.scale = 0.2
}

function draw() {
  background(0);
  image(bg,-450,-1600,1200,2000)
  // image(bg,-450,-2600,1200,2000)
  image(flippedVideo, car.x-250, car.y+50);
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  camera.x=car.x;
  camera.y=car.y;
  if (label == 'up') {
    car.y = car.y-7;  
  }
 if (label == 'left') {
  car.x = car.x-7
 }
 if (label == 'right') {
  car.x = car.x+7
 }
  drawSprites()
}
