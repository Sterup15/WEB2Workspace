function range(start, end, step = 1)
{
    if (end === undefined) return end => range(start, end)
    let numbers = []
    for (let i=start; i<=end; i+=step)
    {
        numbers.push(i);
    }
    return numbers;
}

let rangeFrom3To = range(3)
let rangeFrom7To = range(7)

console.log(rangeFrom3To(3))
// → [3]
console.log(rangeFrom3To(8))
// → [3,4,5,6,7,8]
console.log(rangeFrom7To(9))
// → [7,8,9]