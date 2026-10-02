let input = [2, 2, 3, 3, 3];
let output = [];

function foodLines(m) {
    for (i = 0; i < m; i++) {
        output.push(Math.min(...input));
        let m = input.indexOf(Math.min(...input));
        input[m] += 1;
        console.log(input);
    }
    return(output);
}
console.log(foodLines(3));