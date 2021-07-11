"use strict"

const pinGeneratorButton = document.getElementById("generate-btn");
const pinDisplayArea = document.getElementById("generate-display");

pinGeneratorButton.addEventListener("click", function(){
    let randomNum = Math.round(Math.random()*10000);
    if(randomNum<1000){
        randomNum+=1000;
    }

    console.log(randomNum);
    pinDisplayArea.value = randomNum;
})





// right section code 

const allButton = document.querySelectorAll(".button");
const submitDisplay = document.getElementById("submit-display");
let submitDisplayValue = "";

for(let item of allButton){

    item.addEventListener("click",function(){

        if(item.innerHTML == "C"){
            submitDisplay.value ="";
            submitDisplayValue = "";
        }
         else if (item.innerText == "<")
         {
            console.log("Yeah Clicked");
            submitDisplayValue =submitDisplayValue.slice(0,-1);
            submitDisplay.value = submitDisplayValue;
        } 
        else{

            submitDisplayValue += item.innerHTML;
            submitDisplay.value = submitDisplayValue;
        }
        
        

    })
}


// submit- button -work 

const submitBtn = document.getElementById("submit");
const actionCount = document.querySelector(".action-count");
console.log(submitBtn)

submitBtn.addEventListener("click",function(e){
    console.log("clicked");
    if(pinDisplayArea.value == submitDisplay.value){
        console.log("congratulation");
        document.querySelector(".notify-success").style.visibility = "visible";
        document.querySelector(".notify-fail").style.visibility = "hidden";

    } else{
        if(parseFloat(actionCount.innerHTML)<=0){
           submitBtn.style.visibility = "hidden";
           document.querySelector(".notify-fail").innerHTML = "❌ You tried many time!";

        }else{
            actionCount.innerHTML = parseFloat(actionCount.innerHTML-1);
        console.log("Submit Again");
        document.querySelector(".notify-success").style.visibility = "hidden";
        document.querySelector(".notify-fail").style.visibility = "visible";
        }
        
    }

})
console.log(actionCount);