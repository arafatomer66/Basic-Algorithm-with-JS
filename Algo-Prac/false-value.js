function bouncer(arr) {
 
 return arr.filter(function (value){
 if (value !== Boolean){
 return value;
 
 }
 });
}
bouncer([7, false, 9]);