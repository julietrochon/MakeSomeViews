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

    pic1.style.display = "none";
    pic2.style.display = "none";
    pic3.style.display = "none";

    check.style.display = "none";
    btnok.style.display = "none";
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
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

    text2.style.display = "table-cell";
    text2.innerText = " RIGHT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";


}

function option1D() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";

    text2.style.display = "table-cell";
    text2.innerText = " RIGHT welcome to the second game   ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";


}

pic1.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    check.style.display = "table-cell";

    btnok.style.display = "table-cell";
}

pic2.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    check.style.display = "table-cell";

    btnok.style.display = "table-cell";
}

pic3.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    check.style.display = "table-cell";
    btnok.style.display = "table-cell";
}

function getValue() {
    btnok.style.display = "table-cell";
    var str = '';
    for (i = 0; i < 15; i++) {
        if (checks[i].checked === true) {
            str += checks[i].value + " ";
        }
    }
}

btnok.onclick = () => {
    var checks = document.getElementsByClassName('checks');
    text4.style.display = "table-cell";
    for (i = 0; i < 15; i++) {
        checks[i].disabled = "disabled";
    }
    var str = '';
    for (i = 0; i < 15; i++) {
        if (checks[i].checked === true) {
            if (checks[i].id === " micro")
            {
                point +=1;
            }
            if (checks[i].id === " light")
            {
                point +=1;
            }
            if (checks[i].id === " camera")
            {
                point +=1;
            }
            text4.innerText += checks[i].id;
        }
    }
  
    
    text5.style.display = "table-cell";
    text5.innerText = " <br> you have " + point;

    SeeResult.style.display = "table-cell";

}

SeeResult.onclick = () => {
    sessionStorage.setItem("point", point);
    location.href = "index5.html";
}


startGame();