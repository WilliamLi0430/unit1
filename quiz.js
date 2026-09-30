input = [2, 2, 3, 3, 3];
output = [];
lines = [];
let z = 0;
function foodLines(m) {
    for (i = 0; i < m; i++) {
        z.int = lines.pop(lines.min);
        z += 1;
        lines.push(z);
        output.push(z);
    }
    return(output);
}
console.log(foodLines(3));
//print list place not number