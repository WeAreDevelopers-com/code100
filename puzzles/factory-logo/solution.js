let dimensions = {
    "halls": [100,100],
    "chimney": [35,120],
    "connect": [35,25],
    "roofs": [100,70] 
}
let total = 0;
total += dimensions.halls[0] * dimensions.halls[1] * 3;
total += ((dimensions.roofs[0] * dimensions.roofs[1]) / 2) * 3;
total += dimensions.chimney[0] * dimensions.chimney[1];
total += (dimensions.connect[0] * dimensions.connect[1]) / 2;

console.log(Math.floor(total));

