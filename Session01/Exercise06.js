function range(start, end, step = 1)
{
    let numbers = []
    for (let i=start; i<=end; i+=step)
    {
        numbers.push(i);
    }
    return numbers;
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

console.log(sum(range(1, 10)))
console.log(sum(range(1, 10, 2)))