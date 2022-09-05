
function isDivisible(){

	sum = 0
	for (let i = 0; i <=500; i++) {
		
		x = i%23
		if (x == 0) {
			console.log(`${i}`)
			sum = sum+i
		}
	}
}

isDivisible();
console.log(`sum :${sum}`)
