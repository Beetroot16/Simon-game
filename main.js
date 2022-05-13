function next_sequence(){
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
        console.log(gamePattern)
}

function handler(){
    $(".red").click(function(){
        $(".red").fadeIn(100).fadeOut(100).fadeIn(100)
        userPattern.push("red")
        console.log(userPattern)
    })
    $(".green").click(function(){
        $(".green").fadeIn(100).fadeOut(100).fadeIn(100)
        userPattern.push("green")
        console.log(userPattern)
    })
    $(".blue").click(function(){
        $(".blue").fadeIn(100).fadeOut(100).fadeIn(100)
        userPattern.push("blue")
        console.log(userPattern)
    })
    $(".yellow").click(function(){  
        $(".yellow").fadeIn(100).fadeOut(100).fadeIn(100)
        userPattern.push("yellow")
        console.log(userPattern)
    })   
}

function checkans(level,gamePattern,userPattern){
    if (JSON.stringify(userPattern)==JSON.stringify(gamePattern)){
        console.log("success")
        userPattern = []
        return true
    }
    else{
        console.log("fail")
        userPattern = []
        return false
    }
    
    level += 1 
}

var gamePattern = []
var userPattern = []
level = 0
var buttonColors = ["red", "green", "blue", "yellow"]
$(document).keypress(function(){
    $("h1").text("Level " + level+1)
    next_sequence()
    handler()
    setTimeout(function(){checkans(level,gamePattern,userPattern);}, 2000);    
})