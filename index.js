
const dondeComoPag= href="./donde_como1.html";


let dondeComo=document.getElementById("dondeComo")
if(dondeComo){
    dondeComo.addEventListener("click",()=>redirect(dondeComo));
}

let dondeCompro=document.getElementById("dondeCompro")
if(dondeComo){
    dondeCompro.addEventListener("click",()=>redirect2());
}

let comoComo=document.getElementById("comoComo")
if(dondeComo){
    comoComo.addEventListener("click",()=>redirect3());
}

let queInvito=document.getElementById("queInvito")
if(dondeComo){
    queInvito.addEventListener("click",()=>redirect4());
}
document.getElementById("menuDiv").addEventListener("click",()=>goHome());


function goHome(){
    window.location.href="./index.html";
    console.log("funciona_menu")
}
function redirect(){
    window.location.href="./donde_como1.html";
    console.log("funciona")
}

function redirect2(){
    window.location.href="./donde_compro.html";
    console.log("funciona")
}


function redirect3(){
    window.location.href="./como_como.html";
}

function redirect4(){
    window.location.href="./que_te_invito.html";
}
