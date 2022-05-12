function next_sequence(){
    var buttonaudio = new Audio("buttonpress.mp3")
    var randomNumber = Math.floor(Math.random()*4) + 1
        if (randomNumber == 1){
            randomColor = buttonColors[0]
            $(".red").fadeIn(200).fadeOut(200).fadeIn(200)
            buttonaudio.play()
        }
        else if (randomNumber == 2){
            randomColor = buttonColors[1]
            $(".green").fadeIn(200).fadeOut(200).fadeIn(200)
            buttonaudio.play()
        }
        else if (randomNumber == 3){
            randomColor = buttonColors[2]
            $(".blue").fadeIn(200).fadeOut(200).fadeIn(200)
            buttonaudio.play()
        }   
        else{
            randomColor = buttonColors[3]
            $(".yellow").fadeIn(200).fadeOut(200).fadeIn(200)
            buttonaudio.play()
        }
        gamePattern.push(randomColor)
        console.log(gamePattern)
}
var gamePattern = []
var buttonColors = ["red", "green", "blue", "yellow"]
levels = 20
next_sequence()


