//Clousers 
// Ability to retain the state of a function even after its execution is called clouser. Useful in dynamic programming.

function xyz(){
     var a = 10, b = 20;
     var sum = a+b;
    
    /** 
     return function(){
         return "The sum = "+a + " +  "+ b + " =  "+ sum; 
     };

     **/

    return {
          getSum:function(){
              return "The sum = "+a + " +  "+ b + " =  "+ sum; 
          }
    }

}

var result = xyz();
//console.log(result());
console.log(result.getSum());


function counterCreator(incrementBy){
   var count = 0 ;
   return function(){
       count+=incrementBy;
       return count;
   }
}

var incrementBy1 = counterCreator(1);
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());


var incrementBy2 = counterCreator(2);
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());


