const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');
const btnD = document.getElementById('btnD');
const btnE = document.getElementById('btnE');
const btnF = document.getElementById('btnF');
const btnG = document.getElementById('btnG');
const btnH = document.getElementById('btnH');
const btnI = document.getElementById('btnI');
const btnJ = document.getElementById('btnJ');
const btnK = document.getElementById('btnK');
const btnL = document.getElementById('btnL');
const btnM = document.getElementById('btnM');
const btnN = document.getElementById('btnN');
const btnO = document.getElementById('btnO');
const btnP = document.getElementById('btnP');
const btnQ = document.getElementById('btnQ');
const btnR = document.getElementById('btnR');
const btnS = document.getElementById('btnS');
const btnT = document.getElementById('btnT');
const btnU = document.getElementById('btnU');
const btnV = document.getElementById('btnV');
const btnW = document.getElementById('btnW');
const btnX = document.getElementById('btnX');
const btnY = document.getElementById('btnY');
const btnZ = document.getElementById('btnZ');

const text = document.getElementById('name');
const btn_name = document.getElementById('btn_name');
let yourName = "";
let size = 0;



function getName() {

    text.innerText = " > ";
    text.style.display = "table-cell";

    btnA.addEventListener("click", addA);
    btnB.addEventListener("click", addB);
    btnC.addEventListener("click", addC);
    btnD.addEventListener("click", addD);
    btnE.addEventListener("click", addE);
    btnF.addEventListener("click", addF);
    btnG.addEventListener("click", addG);
    btnH.addEventListener("click", addH);
    btnI.addEventListener("click", addI);
    btnJ.addEventListener("click", addJ);
    btnK.addEventListener("click", addK);
    btnL.addEventListener("click", addL);
    btnM.addEventListener("click", addM);
    btnN.addEventListener("click", addN);
    btnO.addEventListener("click", addO);
    btnP.addEventListener("click", addP);
    btnQ.addEventListener("click", addQ);
    btnR.addEventListener("click", addR);
    btnS.addEventListener("click", addS);
    btnT.addEventListener("click", addT);
    btnU.addEventListener("click", addU);
    btnV.addEventListener("click", addV);
    btnW.addEventListener("click", addW);
    btnX.addEventListener("click", addX);
    btnY.addEventListener("click", addY);
    btnZ.addEventListener("click", addZ);
    btn_name.addEventListener("click", finish);

}

function finish(){
    sessionStorage.setItem("name", yourName);
    location.href = "index.html";
}

function addA() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "A";
    text.innerText = " >  " + yourName;

}

function addB() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "B";
    text.innerText = " >  " + yourName;

}

function addC() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "C";
    text.innerText = " >  " + yourName;

}

function addD() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "D";
    text.innerText = " >  " + yourName;

}

function addE() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "E";
    text.innerText = " >  " + yourName;

}

function addF() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "F";
    text.innerText = " >  " + yourName;

}
function addG() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "G";
    text.innerText = " >  " + yourName;

}

function addH() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "H";
    text.innerText = " >  " + yourName;

}

function addI() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "I";
    text.innerText = " >  " + yourName;

}

function addJ() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "J";
    text.innerText = " >  " + yourName;

}

function addK() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "K";
    text.innerText = " >  " + yourName;

}

function addL() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "L";
    text.innerText = " >  " + yourName;

}

function addM() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "M";
    text.innerText = " >  " + yourName;

}

function addN() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "N";
    text.innerText = " >  " + yourName;

}

function addO() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "O";
    text.innerText = " >  " + yourName;

}

function addP() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "P";
    text.innerText = " >  " + yourName;

}

function addQ() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "Q";
    text.innerText = " >  " + yourName;

}

function addR() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "R";
    text.innerText = " >  " + yourName;

}

function addS() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "S";
    text.innerText = " >  " + yourName;

}

function addT() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "T";
    text.innerText = " >  " + yourName;

}

function addU() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "U";
    text.innerText = " >  " + yourName;

}

function addV() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "V";
    text.innerText = " >  " + yourName;

}

function addW() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "W";
    text.innerText = " >  " + yourName;

}

function addX() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "X";
    text.innerText = " >  " + yourName;

}

function addY() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "Y";
    text.innerText = " >  " + yourName;

}

function addZ() {
    size += 1;
    if(size >10)
    {
        tolong();
    }
    yourName += "Z";
    text.innerText = " >  " + yourName;

}



function tolong()
{
    btnA.disabled = "disabled";
    btnB.disabled = "disabled";
    btnC.disabled = "disabled";
    btnD.disabled = "disabled";
    btnE.disabled = "disabled";
    btnF.disabled = "disabled";
    btnG.disabled = "disabled";
    btnH.disabled = "disabled";
    btnI.disabled = "disabled";
    btnJ.disabled = "disabled";
    btnK.disabled = "disabled";
    btnL.disabled = "disabled";
    btnM.disabled = "disabled";
    btnN.disabled = "disabled";
    btnO.disabled = "disabled";
    btnP.disabled = "disabled";
    btnQ.disabled = "disabled";
    btnR.disabled = "disabled";
    btnS.disabled = "disabled";
    btnT.disabled = "disabled";
    btnU.disabled = "disabled";
    btnV.disabled = "disabled";
    btnW.disabled = "disabled";
    btnX.disabled = "disabled";
    btnY.disabled = "disabled";
    btnZ.disabled = "disabled";
}




getName();