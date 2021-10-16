var city, city_preload;
var spidey, spidey_preload
var theftBoi, thif
var web, web_preload
var spidey_punch
var thif_health

function preload(){
  city_preload = loadImage("Untitled.png");
  spidey_preload = loadAnimation("Spidey.png")
  theftBoi = loadAnimation("thiefy.png")
  web_preload = loadAnimation("Web_sling.png")
  Spidey_mean = loadAnimation( "punch","Spdey punch.png");
}



function setup(){
  createCanvas(2045,1000)

  console.log("Play at 75% zoom")
  console.log("Also hide P5.js errors")
  console.log("So you can read this")





  city = createSprite(1022,200,200,200)
  city.addImage(city_preload)

  web = createSprite(200,200,200,200)
  web.addAnimation("Web", web_preload)

  spidey = createSprite(200,800,200,200)
  spidey.addAnimation("fighter",spidey_preload)
  spidey.scale = 0.5




  thif_health = 5
  
}

function draw(){
background("blue");

spidey.x = World.mouseX
spidey.y = World.mouseY

if (spidey.y < 500){
web.visible = true;
web.x = spidey.x
}
            
if (spidey.y > 500){
  web.visible = false;
}

if(keyDown("RIGHT_ARROW")){
  //spidey.isTouching(thif) 
  spidey.changeAnimation("punch", Spidey_mean)
  thif_health = thif_health - 1
}


spawnTheif();

drawSprites();



}


function spawnTheif(){
  if (frameCount % 150 == 0){
    thif = createSprite(800,800,200,200)
    thif.x = Math.round(random(0,2045))
    thif.addAnimation("thief", theftBoi);
    thif.scale = 0.5
  }

} 