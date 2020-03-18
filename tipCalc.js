
var submitBtn=document.querySelector("#submitBtn");
var radio=document.querySelectorAll("#currency");
var amount=document.getElementById("amount");
var tip=document.getElementById("tip");
var type="₪";
var count=0;
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
   var res=document.querySelector("span");
   for(var i=0;i<radio.length;i++){
       if(radio[i].checked){
            var temp=type;
            type=radio[i].value;
       }
   }
   var rates={'₪To$':3.5,'₪To€':4,'$To€':1.2,'€To$':1/1.2,'€To₪':0.25, '$To₪':0.35,'₪To₪':1,'$To$':1,'€To€':1};
   if (!count){
    res.textContent="You need to add: "+am*t*0.01+type;
   }
   else{
   res.textContent="You need to add: "+am*t*0.01*rates[temp+'To'+type]+type;
   type=temp;
   }
   count++;
   

}


submitBtn.addEventListener("click",function(){
    var flag={value:false};
    checkForLegalInput(tip.value,amount.value,flag)
    if(flag.value){
        calcResult(tip.value,amount.value)
    } 
});


