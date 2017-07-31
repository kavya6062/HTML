function addition(a,b,c){
    console.log(addition.length); // Prints the number of parameter passed to the function
    return a+b+c;

}
console.log(addition(2,3,1));
console.log(addition.call(null,2,3,1));
console.log(addition.apply(null,[2,3,1]));


/**
 * Create a Person class
 * 
 * fname@parameter
 * lname@parameter
 * age@parameter  -> (Member variables)
 * walk, sleep (Member methods)
 * **/

function Person(fname,lname,age){
    this.fname=fname; // "this"  is a self referential  keyword.
    this.lname=lname;
    this.age=age;

    //This is not a good practice
   /**
       this.greet=function(){
          return "Hello "
        } 
    */

    
}

//Best practice to add a member method 
Person.prototype.greet = function(){
    return "Hello " + this.fname;
}

//Best practice to add a member method 
Person.prototype.sleep = function(){
    return "Person is sleeping ";
}

var p1 = new Person("Vishal","Reddy",24);
console.log(p1);
console.log(p1.fname);
console.log(p1.greet());
console.log(p1.sleep());

var p2 = new Person("Ramesh","Kodari",25);
console.log(p2);
console.log(p2.fname);
console.log(p2.greet());



function Employee(fname,lname,age,empID,salary){
    Person.call(this,fname,lname,age);
    this.empID = empID;
    this.salary = salary;
}
Employee.prototype = Person.prototype;

Employee.prototype.sleep =  function(){  // Overriding
    return "Employee is sleeping ";
}

var emp1  = new Employee("Xyz","Kodari",25,10001,10000);

console.log(emp1.greet());
console.log(emp1.sleep());
console.log(emp1);

/*

		-> Inheritence
		-> Polymorphism
           1) Function overriding
		   2) Function overloading
        -> Encapsulation
		-> Clousers
		-> Event Loop

*/
// Function overloading
function add(){  // Variadiac functions -> Function overloading can be implemented 
    // arguments (inbuilt variable) Is not a array but a array like object where, its keys are non negative number.
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log("Sum = ", add(2,3,8,67));

var values = [20,56,43,32,97,23,45]

add.apply(null,values);
// Encapsulation : Binding data and functions into one single unit is called encapsulation.




















