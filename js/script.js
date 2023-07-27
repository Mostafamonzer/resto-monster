
var allproduct =document.querySelectorAll(".list")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var cost = document.querySelector("#cost")
var totalprice = 0

allproduct.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += item.textContent + "+"
        
        if(content.innerHTML != ""){
            btn.style.display="block"
        }

        totalprice += +(item.getAttribute("price"))
    }

})

btn.onclick = function(){
        console.log(totalprice)
       cost.innerHTML = totalprice
}