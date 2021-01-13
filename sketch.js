//Create variables here
var dog, dogImage, happyDogImage, database, foodS, foodStock
function preload()
{
dogImage = loadImage("images/dogImg.png");
happyDogImage = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2
database = firebase.database();

foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  //add styles here
  fill(255,255,254);
  text ("Food remaining : "+ foodS,200,150);
  stroke("red");
  textSize(17);
  text("Press up arrow key To Feed Max!",130,10,300,20);
  //add styles here
}

function readStock(data){
foodS = data.val();

}

function writeStock(x){
database.ref('/').update({
  Food : x
})

}