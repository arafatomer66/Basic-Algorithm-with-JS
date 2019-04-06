// This is often called a Self-Invoked Anonymous Function or Immediately Invoked Function Expression (IIFE). It is a function that executes automatically when you create it, and has the following form:


(function(){
    // some private code that will be executed automatically
})(); 
 
(function(a,b){
    var result = a+b;
    return result;
})(10,20)