let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = [];

for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
        if(array1[i] + array2[j] == 8) {
        combined.push([array1[i], array2[j]]);
        }
    }
}
console.log(combined);