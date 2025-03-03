function checkPositive(array) {
    return array.some((element) => element > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]))
// → true