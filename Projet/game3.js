const text0 = document.getElementById('text0');

const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2 = document.getElementById('text2');
const sliderC = document.getElementById('custom-slider');
const currentValue = document.getElementById("current-value");
const range = document.getElementsByClassName("slider");
let btnok = document.querySelector('#btn-ok');

const text3 = document.getElementById('text3');
let btnget = document.querySelector('#btn-get');
let inputGet = document.querySelector('#input-get');

const text4 = document.getElementById('text4');

const SeeResult = document.getElementById('SeeResult');

data = sessionStorage.getItem('point');
var point = 0;
var FinalValue = 0;


function startGame() {
    point = Math.floor(data);

    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";

    currentValue.style.display = "none";
    sliderC.style.display = "none";
    btnok.style.display = "none";

    btnget.style.display = "none";
    inputGet.style.display = "none";
    SeeResult.style.display = "none";

    text0.innerText = "You are starting your third year as a YouTuber. This year is based on the theme of product placement. Indeed, you manage to release a salary for you but you need additional money to pay your employees.";
    text1.innerText = "On Youtube, product placement is still a bit taboo, do you think it's good to say it or pretend nothing has happened?";

    btn1.addEventListener("click", option1G);
    btn2.addEventListener("click", option1D);

}

function option1G() {
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = "being a youtuber is not that easy. You know why? As a self-employed person, it's up to you to take care of the administrative papers. In your opinion, to within 10 percent, how much is taxed for a self-employed person?";
    currentValue.style.display = "table-cell";
    sliderC.style.display = "table-cell";
    range.style.display = "table-cell";
}

function option1D() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = "being a youtuber is not that easy. You know why? As a self-employed person, it's up to you to take care of the administrative papers. In your opinion, to within 10 percent, how much is taxed for a self-employed person?";
    currentValue.style.display = "table-cell";
    sliderC.style.display = "table-cell";
    range.style.display = "table-cell";

}

sliderC.addEventListener("input", function (event) {
    let value = event.target.value;
    currentValue.innerText = value;
    currentValue.classList.add("active");
    currentValue.style.left = `${value}%`;
    btnok.style.display = "table-cell";
    FinalValue = value;
});

sliderC.addEventListener("blur", function (event) {
    btnok.style.display = "table-cell";
    currentValue.classList.remove("active");
});

btnok.addEventListener('click', () => {

    btnok.disabled = "disabled";

    if (FinalValue >= 55 || FinalValue <= 65) {
        point += 2;
    }
    text3.style.display = "table-cell";
    text3.innerText = "One last question crosses your mind. Should we make product placements of anything and everything even if it is very well paid. You don't think that's a really good idea. Which category of product placements do you think should be avoided?";
    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";

})

btnget.addEventListener('click', () => {
    let response = inputGet.value;
    text4.style.display = "table-cell";

    if (response === "mobile game") {
        point += 1;
    }

    text4.innerText = "Product placements went pretty well. Hope the 4th year goes as well";
    SeeResult.style.display = "table-cell";
})

SeeResult.onclick = () => {
    sessionStorage.setItem("point", point);
    location.href = "index4.html";
}

startGame();