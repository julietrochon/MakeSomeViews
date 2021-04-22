const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2A = document.getElementById('text2A');
const text2 = document.getElementById('text2');
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');


const text3 = document.getElementById('text3');
let btnget = document.querySelector('#btn-get');
let inputGet = document.querySelector('#input-get');

const text4 = document.getElementById('text4');

const SeeResult = document.getElementById('SeeResult');


I = 0;
point = 0;

function startGame() {

    text2A.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";

    pic1.style.display = "none";
    pic2.style.display = "none";
    pic3.style.display = "none";
    pic4.style.display = "none";

    btnget.style.display = "none";
    inputGet.style.display = "none";
    SeeResult.style.display = "none";

    text1.innerHTML = "As a first test, we want to know what are the reasons you start youtube?";

    btn1.addEventListener("click", option1G);
    btn2.addEventListener("click", option1D);

}

function option1G() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2A.style.display = "table-cell";
    text2.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";
    pic4.style.display = "table-cell";

    text2.innerHTML = "For this, another YouTuber told you about a technique to get more views. This is called clickbaity. Make the most eye-catching video thumbnail to appeal to the user. So which of these miniatures do you think is the most clickbaity?";
}

function option1D() {
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2A.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";
    pic4.style.display = "table-cell";
    text2.innerHTML = "For this, another YouTuber told you about a technique to get more views. This is called clickbaity. Make the most eye-catching video thumbnail to appeal to the user. So which of these miniatures do you think is the most clickbaity?";

}

pic1.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerHTML = "Well, it's been almost a year since you started the youtube adventure. But the question is, who is your idol, the person who inspires you for the videos?";


    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";

}


pic2.onclick = () => {
    point += 1;
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerHTML = "Well, it's been almost a year since you started the youtube adventure. But the question is, who is your idol, the person who inspires you for the videos?";


    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";

}

pic3.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerHTML = "Well, it's been almost a year since you started the youtube adventure. But the question is, who is your idol, the person who inspires you for the videos?";


    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";
}

pic4.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerHTML = "Well, it's been almost a year since you started the youtube adventure. But the question is, who is your idol, the person who inspires you for the videos?";


    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";


}

btnget.addEventListener('click', () => {
    let response = inputGet.value;

    if (response === "pewdiepie") {
        point += 1;
    }
    text4.style.display = "table-cell";
    text4.innerText = "It's been a year since the channel was launched and you are really very proud of yourself. You can now click the button to move on to the next year.";
    SeeResult.style.display = "table-cell";
})


SeeResult.onclick = () => {

    if (point <= 1){
        sessionStorage.setItem("point", point);
        sessionStorage.setItem("end", "gameOne");
        location.href = "end.html";
    }
    else{
        sessionStorage.setItem("point", point);
        location.href = "index2.html";
    }

}


startGame();