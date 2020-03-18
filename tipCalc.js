
var submitBtn=document.querySelector("#submitBtn");
var radio=document.querySelectorAll("#currency");
var amount=document.getElementById("amount");
var tip=document.getElementById("tip");
console.log(radio[0]);

function checkForLegalInput(tip,amount,flag){
    if (isNaN(tip) || isNaN(amount)){
        alert("Please enter numeric values");
    }
    else{
        flag.value=true;
    }
}

function calcResult(tip,amount,currType){
   var res=document.querySelector("span");
   var type="-";
   for(var i=0;i<radio.length;i++){
       if(radio[i].checked){
            type=radio[i].value;
       }
   }
   
   res.textContent="You need to add: "+amount*tip*0.01+type;
}


submitBtn.addEventListener("click",function(){
    var flag={value:false};
    checkForLegalInput(tip.value,amount.value,flag)
    if(flag.value){
        calcResult(tip.value,amount.value)
    } 
});


