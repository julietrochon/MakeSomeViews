const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2 = document.getElementById('text2');

const brand1 = document.getElementById('brand1');
const brand2 = document.getElementById('brand2');
const brand3 = document.getElementById('brand3');

const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const text3 = document.getElementById('text3');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');

const SeeResult = document.getElementById('SeeResult');

data = sessionStorage.getItem('point');
var point = 0;


function startGame()
{
    point =  Math.floor(data); 
    
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";

    brand1.style.display = "none";
    brand2.style.display = "none";
    brand3.style.display = "none";

    pic1.style.display = "none";
    pic2.style.display = "none";
    pic3.style.display = "none";

    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
    btn6.style.display = "none";

    SeeResult.style.display = "none";

    text1.innerText = "alors l'histoire commence au pérou et je suis très contente";

    btn1.addEventListener("click", option1G);
    btn2.addEventListener("click", option1D);

}

function option1G(){
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";
    text2.style.display = "table-cell";

    brand1.style.display = "table-cell";
    brand2.style.display = "table-cell";
    brand3.style.display = "table-cell";

    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

}

function option1D(){
    point += 1;
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";
    text2.style.display = "table-cell";
    text2.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    brand1.style.display = "table-cell";
    brand2.style.display = "table-cell";
    brand3.style.display = "table-cell";

    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

}

pic1.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btn3.style.display = "table-cell";
    btn4.style.display = "table-cell";
    btn5.style.display = "table-cell";
    btn6.style.display = "table-cell";

    btn3.addEventListener("click", option31);
    btn4.addEventListener("click", option32);
    btn5.addEventListener("click", option33);
    btn6.addEventListener("click", option34);
}

pic2.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btn3.style.display = "table-cell";
    btn4.style.display = "table-cell";
    btn5.style.display = "table-cell";
    btn6.style.display = "table-cell";

    btn3.addEventListener("click", option31);
    btn4.addEventListener("click", option32);
    btn5.addEventListener("click", option33);
    btn6.addEventListener("click", option34);

}

pic3.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btn3.style.display = "table-cell";
    btn4.style.display = "table-cell";
    btn5.style.display = "table-cell";
    btn6.style.display = "table-cell";

    btn3.addEventListener("click", option31);
    btn4.addEventListener("click", option32);
    btn5.addEventListener("click", option33);
    btn6.addEventListener("click", option34);
}

function option31(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option32(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    
    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option33(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    
    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

function option34(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";
    
    text4.style.display = "table-cell";
    text4.innerText = "PAS CONTENTE --- ";

    text5.style.display = "table-cell";
    text5.innerText = "you have " + point;

    SeeResult.style.display = "table-cell";
}

SeeResult.onclick = () => {
    sessionStorage.setItem("point", point);
    location.href = "end.html";
}


startGame();