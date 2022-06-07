var gamePattern = []
var userPattern = []
level = 0
var started = false;
var buttonColors = ["red", "green", "blue", "yellow"]

function next_sequence(){
    userPattern = []
    level++
    $("h1").html("level " + level)
    var randomNumber = Math.floor(Math.random()*4) + 1
        if (randomNumber == 1){
            randomColor = buttonColors[0]
            $(".red").fadeIn(200).fadeOut(200).fadeIn(200)
        }
        else if (randomNumber == 2){
            randomColor = buttonColors[1]
            $(".green").fadeIn(200).fadeOut(200).fadeIn(200)
            
        }
        else if (randomNumber == 3){
            randomColor = buttonColors[2]
            $(".blue").fadeIn(200).fadeOut(200).fadeIn(200)
        }   
        else{
            randomColor = buttonColors[3]
            $(".yellow").fadeIn(200).fadeOut(200).fadeIn(200)
        }
        gamePattern.push(randomColor)
        console.log("game pattern = ", gamePattern)
}

function checkans(level){
    if (userPattern[level] === gamePattern[level]){
        if (userPattern.length === gamePattern.length){
            setTimeout(function(){
                console.log("success")
                next_sequence();
            },1000);
    }
    }
    else{
        console.log("fail")
        $("h1").html("GAME OVER !")
    }
}

function restart(){
    level = 0
    gamePattern = []
    started = false
}

$(".red").click(function(){
    $(".red").fadeIn(100).fadeOut(100).fadeIn(100)
    userPattern.push("red")
    checkans(userPattern.length - 1);
    console.log("user pattern = ", userPattern) 
})
$(".green").click(function(){
    $(".green").fadeIn(100).fadeOut(100).fadeIn(100)
    userPattern.push("green")
    checkans(userPattern.length - 1);
    console.log("user pattern = ", userPattern) 
})
$(".blue").click(function(){
    $(".blue").fadeIn(100).fadeOut(100).fadeIn(100)
    userPattern.push("blue")
    checkans(userPattern.length - 1);
    console.log("user pattern = ", userPattern) 
})
$(".yellow").click(function(){  
    $(".yellow").fadeIn(100).fadeOut(100).fadeIn(100)
    userPattern.push("yellow")
    checkans(userPattern.length - 1);
    console.log("user pattern = ", userPattern) 
})  

$(document).keydown(function() {
    if(!started){
    $("h1").html("level " + level);
    next_sequence();
    started = true;
  }
  });

