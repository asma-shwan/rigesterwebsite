let btnjoinEl=document.getElementById("btnjoin")
let boxEl=document.querySelector(".box")
let divEL=document.querySelector(".div")
let iconEL=document.querySelector(".close-icon")
btnjoinEl.addEventListener("click",function(){
boxEl.classList.remove("active")
divEL.classList.add("active")
})

iconEL.addEventListener("click",function(){
    boxEl.classList.add("active")
    divEL.classList.remove("active")
})