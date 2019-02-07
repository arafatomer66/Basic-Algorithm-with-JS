function chunkArrayInGroups(arr, size) {

    var group = [];
    var position = 0;

    while (position < arr.length) 
            {
                group.push(arr.slice(position, position += size));
                console.log(position);
                console.log(group);
            }
}



