function countChar(string, char)
{
    let counter = 0;
    for (i=0; i<string.length; i++)
    {
        if (string[i] == char)
        {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"))
// → 4