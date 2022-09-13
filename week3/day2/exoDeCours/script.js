function insertRow(){
	let row = document.createElement('tr');
	let newTd = document.createElement('td');
	let table = document.getElementById("sampleTable");
	let content1 = document.createTextNode('Ligne3 cellule3');
	table.appendChild(row);
	row.appendChild(newTd);
	newTd.appendChild(content1);
	console.log(row);
	
}