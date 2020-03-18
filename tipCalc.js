
var submitBtn=document.querySelector("#submitBtn");
var radio=document.querySelectorAll("#currency");
var amount=document.getElementById("amount");
var tip=document.getElementById("tip");
var type="₪";
var temp=type;
var rates={'₪To$':3.5,'₪To€':4,'$To€':1.2,'€To$':1/1.2,'€To₪':0.25, '$To₪':1/3.5,'₪To₪':1,'$To$':1,'€To€':1};
var res=document.querySelector("span");
console.log(radio[0]);

function checkForLegalInput(tip,amount,flag){
    if (isNaN(tip) || isNaN(amount)){
        alert("Please enter numeric values");
    }
    else{
        flag.value=true;
    }
}

function calcResult(t,am){
   for(var i=0;i<radio.length;i++){
       if(radio[i].checked){
            type=radio[i].value;
       }
   }
    res.textContent="You need to add: "+am*t*0.01+type;
    temp=type;
}     


submitBtn.addEventListener("click",function(){
    var flag={value:false};
    checkForLegalInput(tip.value,amount.value,flag)
    if(flag.value){
        calcResult(tip.value,amount.value)
    } 
});
