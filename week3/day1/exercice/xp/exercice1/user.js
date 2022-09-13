
let newDiv = document.getElementById('container')
console.log(newDiv);

let text = document.getElementsByClassName('list')[0].lastElementChild
 text.innerHTML = "Richard"

 let nom = document.querySelectorAll("ul>li:first-child")
 for (let elem of nom)  {
 	elem.innerHTML = "Mohamed"

 	let text2 = document.getElementsByClassName('list')[1].firstElementChild.nextElementSibling
 	console.log(text2.innerHTML)
 	text2.remove();

 }
 
