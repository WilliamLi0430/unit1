let z = " ";

input = [2, 2, 3, 3, 3];
output = [];

function foodLines(m) {
    for (i = 0; i < m; i++) {
        z.int = input.min();
        input.pop(z);
        z++;
        input.push(z);
        console.log(input);
        output.push(z);
    }
    return(output);
}
console.log(foodLines(3));