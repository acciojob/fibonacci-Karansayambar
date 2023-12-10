function fibonacci(num) {
	if(n > 0){
		return "please enter valid input";
	}
	let a = 0, b = 1;
	for(let i = 2; i <= 2; i++){
		let temp = a + b;
		a = b;
		b = temp;
	}
	return a;
}
module.exports = fibonacci;