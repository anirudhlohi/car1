var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

car1_x = 10
car1_y = 10

background_image = "img_racing.jpg";
car1_image = "car1.png";
car2_image = "car2.png"
car1_width = 100
car1_height = 80

car2_width =100
car2_height =80

car2_x = 10
car2_y = 100


function load1(){
    
    background_IMGtag = new Image()
    background_IMGtag.onload = background;
    background_IMGtag.src = background_image;

    car1_IMGtag = new Image()
   car1_IMGtag.onload = car1;
    car1_IMGtag.src = car1_image;

    car2_IMGtag = new Image()
   car2_IMGtag.onload = car2;
    car2_IMGtag.src = car2_image;
}

function background(){
    ctx.drawImage(background_IMGtag , 0 , 0 , canvas.width , canvas.height)
}

function car1(){
    ctx.drawImage(car1_IMGtag , car1_x ,car1_y , car1_width , car1_height)
}

function car2(){
    ctx.drawImage(car2_IMGtag , car2_x , car2_y , car2_width , car2_height)
}

window.addEventListener("keydown" , my_keydown)
function my_keydown(e){
   var key_pressed = e.keyCode;
    console.log(key_pressed)
    
}
