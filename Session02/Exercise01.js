function squareList(array) {
    return array.filter((element) => element > 0 && element % parseInt(element) === 0 ).map((element) => Math.pow(element, 2))
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]