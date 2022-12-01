function lovefunc(flower1, flower2){

    if (flower1 % 2 == 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 == 0) {
        return "Love";
    } else {
        return "No Love";
    }
  }

console.log(lovefunc(2, 2));