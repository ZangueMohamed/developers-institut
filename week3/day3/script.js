function say(){
	let bdy = document.querySelector('body');
	let newDiv = document.createElement('div');
	let content = document.createTextNode('The sales end in 10min !');
	newDiv.appendChild(content);
	bdy.appendChild(newDiv);
	console.log(newDiv);
	newDiv.setAttribute('style', "color: skyblue;");
	alert();
	

}


setTimeout(say, 5000);