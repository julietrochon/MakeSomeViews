const success = document.getElementById('successText');
const explanation = document.getElementById('explanation');

var input = document.getElementById('prog');
var barstat = document.getElementById('bar-stat');

data = sessionStorage.getItem('point');

function DrawResult() {

    var point = parseInt(data);
    finalR = (point * 100) / 25;
    finalR = Math.round(finalR);

    let nbre = finalR + "%";
    var pos = document.documentElement;
    pos.style.setProperty("--footer-size", nbre);


    success.innerText = finalR + " % success";


    if (finalR > 0 || finalR <= 30) {
        explanation.innerHTML = "oh you won't do a really good youtuber, please try again to do better";
    }
    if (finalR > 30 || finalR <= 60) {
        explanation.innerHTML = " it is quite ok but I think you can do better";
    }
    if (finalR > 60 || finalR <= 100) {
        explanation.innerHTML = " you should try youtube on the real life you would be perfect";
    }

}

playAgain.onclick = () =>{
    location.href = "first.html";
}

DrawResult();