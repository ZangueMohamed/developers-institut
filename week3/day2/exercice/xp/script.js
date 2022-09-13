let newH = document.querySelector('h1');
console.log(newH);
let x = document.querySelector('article').lastElementChild;
console.log(x);
x.remove();

let y = document.querySelector('h2');
y.addEventListener('click', color);

function color(){
	y.style.color = "red";
}

let z = document.querySelector('h3');
z.addEventListener('click', hiden)

function hiden(){
	z.style.display = "none"
}

let a = document.querySelector('article');
let btn = document.createElement('button');
btn.innerHTML = "Text bold";
a.appendChild(btn)
let paragraph = document.getElementsByTagName('p');
console.log(paragraph);

btn.addEventListener('click', bold);


function bold(){
	for (let i = 0; i < 3; i++) {
		paragraph[i].style.fontWeight = "bold"
	
    }
}