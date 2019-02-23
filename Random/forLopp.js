arr = ['md','omer','arafat'] ; 
//arr.forEach(data => console.log(data));


arr = {firstName :'md',middleName :'omer', lastName :'arafat'} ; 

for(const key in Object.values(arr)){
   console.log(key);
}