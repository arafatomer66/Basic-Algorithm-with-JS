function getIndexToIns(arr, num) {
    arr.sort(function(a,b){
      return a - b;
    });
    for (i = 0; i < arr.length; i++){
      if(num <= arr[i]){
        return i;  
        } 
    } return arr.length; 
  }
  getIndexToIns([10, 20, 30, 40, 50], 35); 