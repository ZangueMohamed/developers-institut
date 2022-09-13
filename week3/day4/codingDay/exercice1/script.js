
for (let i = 0; i < 1440; i++) {
	let x = document.getElementById('right');
	let newDiv = document.createElement('div');
	x.appendChild(newDiv);
	newDiv.setAttribute('style', "border:1px solid black;");
	
	console.log(x)
}
	