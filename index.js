

const dondeComoPag= "./donde_como1.html";
const dondeComproPag= href="./donde_compro.html";
const comoComoPag= href="./como_como.html";
const queTeInvitoPag= href="./que_te_invito.html";
const primerosPasosPag= href="./primeros_pasos.html";
const goHome= href="./index.html";


let dondeComo=document.getElementById("dondeComo")
if(dondeComo){
    dondeComo.addEventListener("click",()=>redirect1(dondeComoPag));
}

let dondeCompro=document.getElementById("dondeCompro")
if(dondeComo){
    dondeCompro.addEventListener("click",()=>redirect2(dondeComproPag));
}

let comoComo=document.getElementById("comoComo")
if(dondeComo){
    comoComo.addEventListener("click",()=>redirect3(comoComoPag));
}

let queInvito=document.getElementById("queInvito")
if(dondeComo){
    queInvito.addEventListener("click",()=>redirect4(queTeInvitoPag));
}

let primerosPasos=document.getElementById("firstsSteps")
if(primerosPasos){
    primerosPasos.addEventListener("click",()=>redirectPP(primerosPasosPag));
}
document.getElementById("menuDiv").addEventListener("click",()=>redirect(goHome));


function redirect(){
    window.location.href=goHome;
     }

function redirect1(){
    window.location.href=dondeComoPag;
 }

 function redirect2(){
   window.location.href=dondeComproPag;
}

function redirect3(){
    window.location.href=comoComoPag;
}

function redirect4(){
window.location.href=queTeInvitoPag;
}

function redirectPP(){
    window.location.href=primerosPasosPag;
}

const desayunoButton = document.getElementById('desayunoButton');
const desayunoList = document.getElementById('desayunoList');

desayunoButton.addEventListener('click', function() {
    desayunoList.classList.toggle('show');
});

const almuerzoButton = document.getElementById('almuerzoButton');
const almuerzoList = document.getElementById('almuerzoList');

almuerzoButton.addEventListener('click', function() {
    almuerzoList.classList.toggle('show');
});