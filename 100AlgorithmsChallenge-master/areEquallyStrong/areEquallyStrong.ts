function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourWekArm = yourLeft <= yourRight ? yourLeft : yourRight  ;
    let yourStrArm = yourRight <= yourLeft ? yourRight : yourLeft ;
    
    let friendStrArm = friendsRight <= friendsLeft ? friendsRight : friendsLeft ;
    let friendWekArm = friendsLeft <= friendsRight ? friendsLeft : friendsRight  ;

    return yourStrArm === friendStrArm && yourWekArm ===friendWekArm ;
}

 console.log(areEquallyStrong(10, 15, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 9))
 