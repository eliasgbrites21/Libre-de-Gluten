


let dondeComo=document.getElementById("dondeComo")
if(dondeComo){
    dondeComo.addEventListener("click",()=>redirect());
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



