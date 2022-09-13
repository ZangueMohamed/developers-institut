/*Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
La fonction alertera "Hello World".*/

/*function text(){
	alert('Hello World');
}

setTimeout(text, 2000);*/

/*Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.*/

/*function hello(){
	let x = document.getElementById('container')
	let prg = document.createElement('p');
	let txt = document.createTextNode('Hello World');
	prg.appendChild(txt);
	x.appendChild(prg);

}

setTimeout(hello, 2000);*/

/*Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.*/

/*let int = setInterval(hello, 2000);*/

/*L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.*/

/*let btn = document.getElementsByTagName('button');
btn.addEventListener('click', stop);

function stop(){
	clearInterval(int);
}*/
/*Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) 
dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">.*/



function add(){
	let newDiv = document.getElementsById('container');
	let p = document.createElement('p');

	const long = p.lenght;	

	if (long < 5) {
		let txt = document.createTextNode('Hello World');
		let newP = document.createElement('p')
		newP.appendChild(txt);
		newDiv.appendChild(newP);
	}
	else{
		clearInterval(add);
	}
}

setTimeout(add, 2000);