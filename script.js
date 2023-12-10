function fibonacci(num) {
// your code here
	if (num < 0 ){
        return "Invalid input. Please enter a positive integer between 0 and 50 (inclusive).";
    }
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}
module.exports = fibonacci;