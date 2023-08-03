// for (i in document.querySelectorAll(".drum")){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// -------------------------------------------------------------------------------------------

// MOUSE CLICK PRESS:
for (var i=0; i<document.querySelectorAll(".drum").length; i++){document.querySelectorAll(".drum")[i].addEventListener("click",function(){    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    butttonAnimation(buttonInnerHTML);
    });
}
// KEYBOARD PRESS:
document.addEventListener("keydown", function(KeyboardEvent){
    makeSound(KeyboardEvent.key);
    
    butttonAnimation(KeyboardEvent.key);
});

function makeSound(key){
    switch (key) {
        case "a":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;    
    
        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;    
   
        case "d":
            var share = new Audio("./sounds/snare.mp3");
            share.play();
            break;    
    
        case "f":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;    
    
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;    
    
        case "k":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;    
    
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;    
    
        default: console.log(buttonInnerHTML);
        }     
}

function butttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(endAnimation, 150);

    function endAnimation(){
        activeButton.classList.remove("pressed");
    }
    
    
}
