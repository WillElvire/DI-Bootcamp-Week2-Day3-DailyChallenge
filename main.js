/***
 *@author Koua wilfried
 @description : the purpose of this code is to draw using *
 */

 // using one loop
for(let indexStar = 1; indexStar <= 6; indexStar++){
    console.log(`* `.repeat(indexStar));
}


// with two nested loops
for(let indexStar = 1; indexStar <= 6; indexStar++) {
    let str = ''
    for(let indexStarS = 0; indexStarS < i; indexStarS++){
        str += `* `
    }
    console.log(str)
}