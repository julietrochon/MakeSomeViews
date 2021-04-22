const text0 = document.getElementById('text0');
const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2 = document.getElementById('text2');
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const text3 = document.getElementById('text3');
const check = document.getElementById('check');
let btnok = document.querySelector('#btn-ok');

const text4 = document.getElementById('text4');

const SeeResult = document.getElementById('SeeResult');

data = sessionStorage.getItem('point');

theme = sessionStorage.getItem('theme');
//theme = "lifestyle";
var point = 0;

function startGame() {

    point = Math.floor(data);

    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";

    pic1.style.display = "none";
    pic2.style.display = "none";
    pic3.style.display = "none";

    check.style.display = "none";
    btnok.style.display = "none";
    SeeResult.style.display = "none";

    text0.innerText = "Welcome to your fourth year. You become a big YouTuber, it sometimes even happens that you are recognized in the street, unbelievable, isn't it? Some subscribers are starting to know your address, which is why you decide to separate your place of work with your place of life, you decide to take a studio.";
    text1.innerText = "this studio story annoys you, do you think you should reproduce your decor that you had at home or do something more creative with a specific theme?";

    btn1.addEventListener("click", option1G);
    btn2.addEventListener("click", option1D);

}

function option1G() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

    text2.style.display = "table-cell";
    text2.innerText = "you asked an interior designer company for your decor. They offered you 3 different designs. Which one do you choose? Your decor should look like the theme of your youtube channel";

}

function option1D() {
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

    text2.style.display = "table-cell";
    text2.innerText = "you asked an interior designer company for your decor. They offered you 3 different designs. Which one do you choose? Your decor should look like the theme of your youtube channel";
}

pic1.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    if (theme === "gaming") {
        point += 1;
    }

    text3.style.display = "table-cell";
    text3.innerText = "you chose this decor? okay he looks cool. But I find that it lacks a bit of scenery. Among the proposed objects, choose 5 that represent your universe.";
    check.style.display = "table-cell";

    btnok.style.display = "table-cell";
}

pic2.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    if (theme === "lifestyle") {
        point += 1;
    }

    text3.style.display = "table-cell";
    text3.innerText = "you chose this decor? okay he looks cool. But I find that it lacks a bit of scenery. Among the proposed objects, choose 5 that represent your universe.";
    check.style.display = "table-cell";

    btnok.style.display = "table-cell";
}

pic3.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    if (theme === "culture") {
        point += 1;
    }

    text3.style.display = "table-cell";
    text3.innerText = "you chose this decor? okay he looks cool. But I find that it lacks a bit of scenery. Among the proposed objects, choose 7 that represent your universe.";
    check.style.display = "table-cell";
    btnok.style.display = "table-cell";
}

btnok.onclick = () => {
    var checks = document.getElementsByClassName('checks');
    text4.style.display = "table-cell";
    for (i = 0; i < 15; i++) {
        checks[i].disabled = "disabled";
    }

    for (i = 0; i < 15; i++) {
        if (checks[i].checked === true) {

            if (theme == "gaming") {
                if (checks[i].id === "streamdeck") {
                    point += 1;
                }
                if (checks[i].id === "videoGames") {
                    point += 1;
                }
                if (checks[i].id === "headphone") {
                    point += 1;
                }
                if (checks[i].id === "computer") {
                    point += 1;
                }
                if (checks[i].id === "light") {
                    point += 1;
                }
                if (checks[i].id === "camera") {
                    point += 1;
                }
                if (checks[i].id === "micro") {
                    point += 1;
                }
            }

            if (theme == "lifestyle") {
                if (checks[i].id === "polaroid") {
                    point += 1;
                }
                if (checks[i].id === "candle") {
                    point += 1;
                }
                if (checks[i].id === "makeUp") {
                    point += 1;
                }
                if (checks[i].id === "vegetation") {
                    point += 1;
                }
                if (checks[i].id === "light") {
                    point += 1;
                }
                if (checks[i].id === "camera") {
                    point += 1;
                }
                if (checks[i].id === "micro") {
                    point += 1;
                }
            }

            if (theme == "culture") {
                if (checks[i].id === "curiosityobject") {
                    point += 1;
                }
                if (checks[i].id === "terrestrialGlobe") {
                    point += 1;
                }
                if (checks[i].id === "book") {
                    point += 1;
                }
                if (checks[i].id === "bulb") {
                    point += 1;
                }
                if (checks[i].id === "light") {
                    point += 1;
                }
                if (checks[i].id === "camera") {
                    point += 1;
                }
                if (checks[i].id === "micro") {
                    point += 1;
                }
            }

            text4.innerText = "this year was amazing. It allowed you to find a balance between your personal and professional life. Looking forward to next year";
        }
    }

    SeeResult.style.display = "table-cell";

}

SeeResult.onclick = () => {
    if (point < 12) {
        sessionStorage.setItem("point", point);
        sessionStorage.setItem("end", "gameFour");
        location.href = "end.html";
    }
    else {
        sessionStorage.setItem("point", point);
        location.href = "index5.html";
    }
}


startGame();