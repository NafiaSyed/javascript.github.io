setTimeout(function() {
    console.log("This runs after 3 seconds");
}, 3000);

const numbers = [2, 4, 6, 8, 10];
const squared = numbers.map(function(num) {
    console.log("This runs immediately")
    return num * num;
});

console.log(squared); // Outputs: [4, 16, 36, 64, 100]