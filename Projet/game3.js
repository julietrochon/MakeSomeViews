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
const text5 = document.getElementById('text5');

const SeeResult = document.getElementById('SeeResult');

data = sessionStorage.getItem('point');
var point = 0;
var FinalValue = 0;


function startGame()
{
    point =  Math.floor(data); 
    
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";

    currentValue.style.display = "none";
    sliderC.style.display = "none";
    btnok.style.display = "none";

    btnget.style.display = "none";
    inputGet.style.display = "none";
    SeeResult.style.display = "none";

    text1.innerText = "alors l'histoire commence au pérou et je suis très contente";

    btn1.addEventListener("click", option1G);
    btn2.addEventListener("click", option1D);

}

function option1G() {
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = point + " LEFT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";
    currentValue.style.display = "table-cell";
    sliderC.style.display = "table-cell";
    range.style.display = "table-cell";
}

function option1D() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = " RIGHT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";
    currentValue.style.display = "table-cell";
    sliderC.style.display = "table-cell";
    range.style.display = "table-cell";
    
}

sliderC.addEventListener("input", function(event){
    let value = event.target.value;
    currentValue.innerText = value;
    currentValue.classList.add("active");
    currentValue.style.left = `${value}%`;
    btnok.style.display = "table-cell";
    FinalValue = value;
   });
   
   sliderC.addEventListener("blur", function(event){
    btnok.style.display = "table-cell";
       currentValue.classList.remove("active");
   });

btnok.addEventListener('click', () => {

    btnok.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = "enfin" + FinalValue;
    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";

})

btnget.addEventListener('click', () => {
    let response = inputGet.value;
    
    if (response === "love") {
        point+=1;
        
        text4.innerText = "la c'est good " + response ;
        text5.style.display = "table-cell";
        text5.innerText = "you have " + point;
        SeeResult.style.display = "table-cell";
    }
    else{
        text4.style.display = "table-cell";
        text4.innerText = "la c'est pas good " + response;
        text5.style.display = "table-cell";
        text5.innerText = "you have " + point;
    
        SeeResult.style.display = "table-cell";
    }
})

SeeResult.onclick = () => {
    sessionStorage.setItem("point", point);
    location.href = "index4.html";
}

startGame();