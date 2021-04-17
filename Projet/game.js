const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const text2 = document.getElementById('text2');
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');


const text3 = document.getElementById('text3');
let btnget = document.querySelector('#btn-get');
let inputGet = document.querySelector('#input-get');

const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');

const SeeResult = document.getElementById('SeeResult');


I = 0;
point = 0;

textt = " 1ère année";
textt2 = " tu as fait le choix de gauche";
textt3 = " le choix de droite mnt";

function t1() {
    character = textt.substring(I, I = I + 1);
    if (character == "-" && textt.substr(I, 5) == "stop-") {
        character = "<br>";
        I = I + 5;
    }
    text1.innerHTML += character;
    if (I < textt.length) setTimeout(t1, 30);
}

function t2() {
    character = textt2.substring(I, I = I + 1);
    if (character == "-" && textt2.substr(I, 5) == "stop-") {
        character = "<br>";
        I = I + 5;

    }
    text2.innerHTML += character;
    if (I < textt2.length) {
        setTimeout(t2, 30);
        btn3.style.display = "table-cell";
        btn4.style.display = "table-cell";
    }

}

function t3() {
    character = textt3.substring(I, I = I + 1);
    if (character == "-" && textt3.substr(I, 5) == "stop-") {
        character = "<br>";
        I = I + 5;

    }
    text2.innerHTML += character;
    if (I < textt3.length) {
        setTimeout(t2, 30);
        btn5.style.display = "table-cell";
        btn6.style.display = "table-cell";
    }

}


function startGame() {

    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";

    pic1.style.display = "none";
    pic2.style.display = "none";
    pic3.style.display = "none";
    pic4.style.display = "none";

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
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";
    pic4.style.display = "table-cell";
    t2();
}

function option1D() {
    btn1.disabled = "disabled";
    btn2.disabled = "disabled";

    text2.style.display = "table-cell";
    pic1.style.display = "table-cell";
    pic2.style.display = "table-cell";
    pic3.style.display = "table-cell";
    pic4.style.display = "table-cell";
    t2();
}

pic1.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

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
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";

}

pic3.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";
}

pic4.onclick = () => {
    pic1.disabled = "disabled";
    pic2.disabled = "disabled";
    pic3.disabled = "disabled";
    pic4.disabled = "disabled";

    text3.style.display = "table-cell";
    text3.innerText = " LEFTTT nouveau clique gauche ---- Lorem ipsum dolor sit amet. Non dolore quo ducimus necessitatibus quo voluptatem ipsam rem harum omnis eos quidem odio. Et commodi possimus et quibusdam natus sit maiores dolor et ratione libero? Ut facilis dignissimos et aperiam ipsam aut rerum aliquid et assumenda tempore aut dolorum neque quo architecto natus sit dolor atque. Ad molestiae illo rem unde eaque qui reprehenderit consequuntur qui voluptates natus At perspiciatis deserunt et consequuntur accusamus maxime!";

    btnget.style.display = "table-cell";
    inputGet.style.display = "table-cell";


}

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
    location.href = "index2.html";
}


startGame();