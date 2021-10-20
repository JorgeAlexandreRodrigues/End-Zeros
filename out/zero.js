// import assert from "assert";
// Try to find out how many zeros a given number has at the end.
function endZeros(value) {
    var i = 0;
    while (value % 10 == 0) {
        i++;
        value = value / 10;
    }
    return i;
}
console.log('Example:');
console.log("Number of Zeros is", endZeros(100));
// These "asserts" are used for self-checking
// assert.equal(endZeros(0), 1);
// assert.equal(endZeros(1), 0);
// assert.equal(endZeros(10), 1);
// assert.equal(endZeros(101), 0);
// assert.equal(endZeros(245), 0);
// assert.equal(endZeros(100100), 2);
// console.log("Coding complete? Click 'Check' to earn cool rewards!");
//# sourceMappingURL=zero.js.map