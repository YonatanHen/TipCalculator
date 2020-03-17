
var submitBtn=document.querySelector("#submitBtn");


function checkForLegalInput(tip,amount,flag){
    if (isNaN(tip) || isNaN(amount)){
        alert("Please enter numeric values");
    }
    else{
        flag.value=true;
    }
}

function calcResult(tip,amount){
   //alert(amount*tip*0.01);
   var res=document.querySelector("span");
   res.textContent="You need to add: "+amount*tip*0.01+"$";
}



submitBtn.addEventListener("click",function(){
    var amount=document.getElementById("amount").value;
    var tip=document.getElementById("tip").value;
    var flag={value:false};
    checkForLegalInput(tip,amount,flag)
    if(flag.value){
        calcResult(tip,amount)
    } 
});
