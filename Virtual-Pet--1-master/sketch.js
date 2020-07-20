//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()
{
  dog = loadImage("Dog.png")
  happyDog = loadImage("happyDog.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(200,200,10,10);
  dog = loadImage("Dog.png")
  happyDog = createSprite(30,200,10,10)
  happyDog = loadImage("happyDog.png")
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
 if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
 }
  drawSprites();
  //add styles here

}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

