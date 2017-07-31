
function printingI(value){
   setTimeout(function(){
            console.log(value);
         },1000);
}

function printValue(){
    for(var i=0;i<10;i++){
         printingI(i);
    }
}

printValue();