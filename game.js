
var sequence = [];
var tiles = ["green", "red", "yellow", "blue"];
var wrongSound = new Audio("sounds/wrong.mp3");
var inputSequence = [];
var level = 1;
var started = false;
var j = 0;




function randomName() {                                                   // push a random element of tiles to sequence
    var a = Math.floor(Math.random()*4) + 1;
    sequence.push(tiles[a - 1]);
}


function soundPlay(name) {                                              // takes id name as an input and plays the sound
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function fade(n) {                                                          // takes id name as an input               
    $("#" + n).fadeIn(100).fadeOut(100).fadeIn(100);
    soundPlay(n);
}
 
function clickAnime(m) {                                                                // input is a string containing id name
    $("#" + m).addClass("pressed");
    setTimeout(function() {
        $("#" + m).removeClass("pressed");
    }, 100);

    soundPlay(m);

}






$(document).keydown(function () {

    if(!started) {
        $("h1").text("Level " + level);
        sequence = [];
        randomName();
        fade(sequence[level - 1]);
        started = true;
    }

});


 
$(".btn").click(function() {

    clickId = this.id;

    if(started) {
        clickAnime(clickId);
        inputSequence.push(clickId);
  
        if(inputSequence[j] != sequence[j]) {
            wrongSound.play();

            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 100);
            
            $("h1").text("Game Over, Press any key to start");
            started = false;
            level = 1;
            inputSequence = [];
            sequence = ["none"];
            
            j = 0;

        } else {
            j++;
        }
    }



    if(inputSequence.length === sequence.length && inputSequence != []) {
        

        randomName();
        setTimeout(function() {
            fade(sequence[level - 1]);
        }, 1000);

        level++;
        inputSequence = [];
        j = 0;
        
        $("h1").text("Level " + level);
        

    }


   
});


