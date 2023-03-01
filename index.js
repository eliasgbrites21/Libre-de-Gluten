


document.getElementById("dondeComo").addEventListener("click",()=>redirect());
document.getElementById("menuLateral").addEventListener("click",()=>goHome());

function redirect(){
    window.location.href="./donde_como1.html";
    console.log("funciona")
}

function goHome(){
    window.location.href="./index.html";
    console.log("funciona_menu")
}

