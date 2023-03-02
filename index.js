

const dondeComoPag= "./donde_como1.html";
const dondeComproPag= href="./donde_compro.html";
const comoComoPag= href="./como_como.html";
const queTeInvitoPag= href="./que_te_invito.html";
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