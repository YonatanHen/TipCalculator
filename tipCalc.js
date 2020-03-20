
var submitBtn=document.querySelector("#submitBtn");
var radios=document.querySelectorAll("#currency");
var amount=document.getElementById("amount");
var tip=document.getElementById("tip");
var temp="₪";
var rates={'₪To$':3.5,'₪To€':4,'$To€':1.2,'€To$':1/1.2,'€To₪':0.25, '$To₪':1/3.5,'₪To₪':1,'$To$':1,'€To€':1};
var res=document.querySelector("span");

amount.value=tip.value=0;

function checkForLegalInput(tip,amount,flag){
    if (isNaN(tip) || isNaN(amount)){
        alert("Please enter numeric values");
    }
    else{
        flag.value=true;
    }
}

function calcResult(t,am){
   for(var i=0;i<radios.length;i++){
       if(radios[i].checked){
            type=radios[i].value;
       }
   }
    res.textContent="You need to add: "+(am*t*0.01).toFixed(2)+type;
}     


submitBtn.addEventListener("click",function(){
    var flag={value:false};
    checkForLegalInput(tip.value,amount.value,flag)
    if(flag.value){
        calcResult(tip.value,amount.value)
    }
});

for(var i=0;i<radios.length;i++){
    radios[i].addEventListener("click",function(){
            amount.value=(amount.value*rates[temp+"To"+this.value]).toFixed(2);
            temp=this.value;
    });
}