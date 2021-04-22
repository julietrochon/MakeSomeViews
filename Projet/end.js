const success = document.getElementById('successText');
const explanation = document.getElementById('explanation');

var input = document.getElementById('prog');
var barstat = document.getElementById('bar-stat');

data = sessionStorage.getItem('point');
end = sessionStorage.getItem('end');

function DrawResult() {

    var point = parseInt(data);

    if (end === "gameOne") {
        finalR = (point * 100) / 3;
    }
    else if (end === "gameTwo") {
        finalR = (point * 100) / 8;
    }
    else if (end === "gameThree") {
        finalR = (point * 100) / 12;
    }
    else if (end === "gameFour") {
        finalR = (point * 100) / 21;
    }
    else if (end === "gameFive" || end === "endGame") {
        finalR = (point * 100) / 25;
    }


    finalR = Math.round(finalR);

    let nbre = finalR + "%";
    var pos = document.documentElement;
    pos.style.setProperty("--footer-size", nbre);


    success.innerText = finalR + " % success";

    if (end === "gameOne") {
        explanation.innerHTML = "oh ... you should try again because it looks like you didn't make the right choices";
    }
    else if (end === "gameTwo") {
        explanation.innerHTML = "launching on youtube is not easy, you will often have failures, but it is only part postponement. Start a new game and try to do better";
    }
    else if (end === "gameThree") {
        explanation.innerHTML = "you got off to a good start but unfortunately you got it wrong somewhere, don't lose hope, start over, you can only do better";
    }
    else if (end === "gameFour") {
        explanation.innerHTML = "too bad, you were almost at the end, we believe the next is the right one";
    }
    else if (end === "gameFive") {
        explanation.innerHTML = "you were almost there, it's a shame";
    }
    else if (end === "endGame") {
        if (finalR === 100) {
            explanation.innerHTML = "whao I'm impressed you hit 100% on our game Congratulations";
        }
        else {
            explanation.innerHTML = "Great, you've reached the end of the game, but you still haven't hit 100%, maybe the next one will be right";
        }
    }
}

playAgain.onclick = () => {
    location.href = "first.html";
}

DrawResult();