let count=0
let r=document.getElementById("record")
let inc=document.getElementById("count-el")
function add(){
    count=count+1
    inc.innerText=count
}
let btn2=document.querySelector("#btn-2")
btn2.addEventListener("click",function(){
    r.innerText+=count + "-"
    inc.innerText=0
    count=0
})