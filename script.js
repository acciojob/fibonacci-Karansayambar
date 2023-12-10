function fibonacci(num) {
// your code here
	if (num <= 0) {
        return "Invalid input. Please enter a positive integer greater than 0.";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else if (num > 2) {
    let a = 0, b = 1;
    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
	}
}
module.exports = fibonacci;