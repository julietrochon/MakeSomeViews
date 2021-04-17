const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2 = document.getElementById('text2');
const choiceOne = document.getElementById('choiceOne');
const choiceTwo = document.getElementById('choiceTwo');
const choiceThree = document.getElementById('choiceThree');
let btnok = document.querySelector('#btn-ok');
let input_CM = document.querySelector('#input_CM');
let input_VE = document.querySelector('#input_VE');
let input_Prod = document.querySelector('#input_Prod');

const text3 = document.getElementById('text3');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');

const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');

const SeeResult = document.getElementById('SeeResult');


data = sessionStorage.getItem('point');
var point = 0;


function startGame() {

    point =  Math.floor(data); 

    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";

    btn5.style.display = "none";
    btn6.style.display = "none";
    btn7.style.display = "none";
    btn8.style.display = "none";

    choiceOne.style.display = "none";
    choiceTwo.style.display = "none";
    choiceThree.style.display = "none";
    input_CM.style.display = "none";
    input_VE.style.display = "none";
    input_Prod.style.display = "none";
    btnok.style.display = "none";

    SeeResult.style.display = "none";

    text1.innerText = "ANNEE 2";

    btn1.style.display = "table-cell";
    btn2.style.display = "table-cell";

    btn1.addEventListener("click", choiceoneL);
    btn2.addEventListener("click", choiceoneR);

}

function choiceoneL() {
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = point + " LEFT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    choiceOne.style.display = "table-cell";
    choiceTwo.style.display = "table-cell";
    choiceThree.style.display = "table-cell";
    input_CM.style.display = "table-cell";
    input_VE.style.display = "table-cell";
    input_Prod.style.display = "table-cell";
    btnok.style.display = "table-cell";

}

function choiceoneR() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    text2.innerText = " RIGHT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    choiceOne.style.display = "table-cell";
    choiceTwo.style.display = "table-cell";
    choiceThree.style.display = "table-cell";
    input_CM.style.display = "table-cell";
    input_VE.style.display = "table-cell";
    input_Prod.style.display = "table-cell";
    btnok.style.display = "table-cell";

}

btnok.addEventListener('click', () => {
    btnok.disabled = "disabled";
    let cm = input_CM.value; //3
    let ve = input_VE.value; //1
    let prod = input_Prod.value; //2

    

    if( cm === "3"  )
    {
        point +=1;
    }
    if( ve === "1")
    {
        point +=1;
    }
    if( prod === "2")
    {
        point +=1;
    }

    text3.style.display = "table-cell";
    text3.innerText = "enfin" + point;

    btn5.style.display = "table-cell";
    btn6.style.display = "table-cell";
    btn7.style.display = "table-cell";
    btn8.style.display = "table-cell";

    btn5.addEventListener("click", option21);
    btn6.addEventListener("click", option22);
    btn7.addEventListener("click", option23);
    btn8.addEventListener("click", option24);

})

function option21() {
    point += 1;
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENT --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option22() {
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    btn7.disabled = "disabled";
    btn8.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option23() {
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    btn7.disabled = "disabled";
    btn8.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option24() {
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    btn7.disabled = "disabled";
    btn8.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

SeeResult.onclick = () => {
    sessionStorage.setItem("point", point);
    location.href = "index3.html";
}

startGame();