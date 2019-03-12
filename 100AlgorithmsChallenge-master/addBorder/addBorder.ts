function addBorder(picture: string[]): string[] 
{   
    let wall = '*'.repeat(picture[0].length + 2);
//    let lengthOfWall =  picture[0].length +2 ;

//    for(let i = 0 ; i < lengthOfWall ; i++){
//      wall =  wall.concat('*');
//    }
   picture.unshift(wall);
   picture.push(wall);

   for(let i = 1 ; i < picture.length - 1; i++ ){
      picture[i] = '*'.concat(picture[i] , '*');
   }

   return picture ;
}


 console.log(addBorder(["abc", "ded"]));