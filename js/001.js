function countSheeps(arrayOfSheep) {
let result = [];
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            result.push(arrayOfSheep[i]);
        }
    }
 return result.length;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));