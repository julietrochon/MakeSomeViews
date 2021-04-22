const text0 = document.getElementById('text0');
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

const SeeResult = document.getElementById('SeeResult');

theme = sessionStorage.getItem('theme');
data = sessionStorage.getItem('point');
var point = 0;


function startGame()
{
    point =  Math.floor(data); 
    
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";

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

    text0.innerText = "it's been four years since you made a youtube channel. You want to see other horizons, why not embark on the creation of a brand ...";
    text1.innerText = "the question concerning the creation of a brand is, should I make very good qualities but on the other hand the prices will be high so that all the subscribers cannot buy it, or do something very qualitative and cheaper but no longer available to the general public.";

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

    if(theme === "gaming")
    {
        point +=2;
    }

    text3.style.display = "table-cell";
    text3.innerText = "starting a business requires many new tasks from you in your work, what are they? ";

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

    if(theme === "lifestyle")
    {
        point +=2;
    }

    text3.style.display = "table-cell";
    text3.innerText = "starting a business requires many new tasks from you in your work, what are they? ";

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

    if(theme === "culture")
    {
        point +=2;
    }

    text3.style.display = "table-cell";
    text3.innerText = "starting a business requires many new tasks from you in your work, what are they? ";

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

    if(theme === "lifestyle")
    {
        point +=1;
    }

    text4.style.display = "table-cell";
    text4.innerText = "whoa, it was 5 amazing years. I experienced something unforgettable ...";

    SeeResult.style.display = "table-cell";
}

function option32(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";

    text4.style.display = "table-cell";
    text4.innerText = "whoa, it was 5 amazing years. I experienced something unforgettable ...";

    SeeResult.style.display = "table-cell";
}

function option33(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";

    if(theme === "culture")
    {
        point +=1;
    }
    
    text4.style.display = "table-cell";
    text4.innerText = "whoa, it was 5 amazing years. I experienced something unforgettable ...";

    SeeResult.style.display = "table-cell";
}

function option34(){
    btn3.disabled = "disabled";
    btn4.disabled = "disabled";
    btn5.disabled = "disabled";
    btn6.disabled = "disabled";

    if(theme === "gaming")
    {
        point +=1;
    }
    
    text4.style.display = "table-cell";
    text4.innerText = "whoa, it was 5 amazing years. I experienced something unforgettable ...";

    SeeResult.style.display = "table-cell";
}

SeeResult.onclick = () => {
    if (point < 14) {
        sessionStorage.setItem("point", point);
        sessionStorage.setItem("end", "gameFour");
        location.href = "end.html";
    }
    else {
        sessionStorage.setItem("point", point);
        sessionStorage.setItem("end", "endGame");
        location.href = "end.html";
    }
}


startGame();